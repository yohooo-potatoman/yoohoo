const fs   = require('fs');
const path = require('path');
const { execFileSync } = require('child_process');

const ROOT = __dirname;
const DIST = path.join(ROOT, 'dist');
const BUILD_VERSION = Date.now().toString(36);
const CSS_FILE_NAME = `style.${BUILD_VERSION}.css`;
const JS_FILE_NAME = `script.${BUILD_VERSION}.js`;
const cleanCssCli = path.join(ROOT, 'node_modules', 'clean-css-cli', 'bin', 'cleancss');
const javascriptObfuscatorCli = path.join(ROOT, 'node_modules', 'javascript-obfuscator', 'bin', 'javascript-obfuscator');

// Clean dist
fs.rmSync(DIST, { recursive: true, force: true });
fs.mkdirSync(DIST, { recursive: true });
fs.mkdirSync(path.join(DIST, 'assets', 'images'), { recursive: true });
fs.mkdirSync(path.join(DIST, 'assets', 'music'),  { recursive: true });
fs.mkdirSync(path.join(DIST, 'assets', 'icons'),  { recursive: true });

console.log('[build] dist/ cleaned');

// ── 1. Copy static assets (images, music, icons) ──────────
function copyDir(src, dest) {
  if (!fs.existsSync(src)) return;
  fs.readdirSync(src).forEach(f => {
    const s = path.join(src, f), d = path.join(dest, f);
    if (fs.statSync(s).isDirectory()) {
      fs.mkdirSync(d, { recursive: true });
      copyDir(s, d);
    } else {
      fs.copyFileSync(s, d);
    }
  });
}
copyDir(path.join(ROOT, 'assets'), path.join(DIST, 'assets'));
console.log('[build] assets copied');

// ── 2. Minify CSS ──────────────────────────────────────────
execFileSync(process.execPath, [
  cleanCssCli,
  '--output', path.join(DIST, CSS_FILE_NAME),
  path.join(ROOT, 'style.css'),
], { stdio: 'inherit', cwd: ROOT });
console.log('[build] CSS minified');

// ── 3. Obfuscate JS ────────────────────────────────────────
execFileSync(process.execPath, [
  javascriptObfuscatorCli,
  path.join(ROOT, 'script.js'),
  '--config', path.join(ROOT, 'obfuscator.config.json'),
  '--output', path.join(DIST, JS_FILE_NAME),
], { stdio: 'inherit', cwd: ROOT });
console.log('[build] JS obfuscated');

// ── 4. Minify HTML and inject versioned asset filenames ────
const { minify } = require('html-minifier-terser');
const html = fs.readFileSync(path.join(ROOT, 'index.html'), 'utf8');
minify(html, {
  collapseWhitespace: true,
  removeComments: true,
  removeAttributeQuotes: false,
  minifyCSS: true,
  minifyJS: false,   // JS is already in separate obfuscated file
  removeEmptyAttributes: true,
  sortAttributes: true,
}).then(minHtml => {
  const versionedHtml = minHtml
    .replace(/href="style\.css"/g, `href="${CSS_FILE_NAME}"`)
    .replace(/src="script\.js"/g, `src="${JS_FILE_NAME}"`);

  fs.writeFileSync(path.join(DIST, 'index.html'), versionedHtml, 'utf8');
  verifyNoPublicSourceMaps();
  console.log('[build] HTML minified');
  printStats();
});

function verifyNoPublicSourceMaps() {
  const files = fs.readdirSync(DIST, { recursive: true });
  const maps = files.filter(file => file.endsWith('.map'));
  if (maps.length) {
    throw new Error(`Public source maps found in dist/: ${maps.join(', ')}`);
  }

  for (const file of [CSS_FILE_NAME, JS_FILE_NAME]) {
    const contents = fs.readFileSync(path.join(DIST, file), 'utf8');
    if (contents.includes('sourceMappingURL=')) {
      throw new Error(`Public source map reference found in dist/${file}`);
    }
  }
}

function printStats() {
  const files = ['index.html', CSS_FILE_NAME, JS_FILE_NAME];
  console.log('\n── Size comparison ─────────────────────────────');
  files.forEach(f => {
    const src  = f === 'index.html' ? fs.statSync(path.join(ROOT, 'index.html')).size : 0;
    const dist = fs.statSync(path.join(DIST, f)).size;
    const pct  = src ? Math.round((1 - dist/src)*100) : 0;
    console.log(`  ${f.padEnd(18)} ${(src/1024).toFixed(1)}kB → ${(dist/1024).toFixed(1)}kB  (-${pct}%)`);
  });
  console.log('────────────────────────────────────────────────');
  console.log('[build] Done! Output in dist/');
}
