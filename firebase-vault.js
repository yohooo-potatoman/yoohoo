import { initializeApp } from 'firebase/app';
import { getAuth, onAuthStateChanged, signInWithEmailAndPassword, signOut } from 'firebase/auth';
import { get, getDatabase, ref, remove, set } from 'firebase/database';

const firebaseConfig = {
  apiKey: 'AIzaSyBQoCkJPESLciZ2k9joqbMJqb04SRr7S58',
  authDomain: 'yohooo-10424.firebaseapp.com',
  databaseURL: 'https://yohooo-10424-default-rtdb.firebaseio.com',
  projectId: 'yohooo-10424',
  storageBucket: 'yohooo-10424.firebasestorage.app',
  messagingSenderId: '1069675568854',
  appId: '1:1069675568854:web:8c69fe627cb648b97b7377',
};

const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const database = getDatabase(app);

function getUnlockTimestamp(date) {
  const match = String(date).match(/^([A-Za-z]+)\s+(\d{1,2}),\s*(\d{4})$/);
  if (!match) throw new Error('Letter has an invalid unlock date.');

  const months = {
    January: 0, February: 1, March: 2, April: 3, May: 4, June: 5,
    July: 6, August: 7, September: 8, October: 9, November: 10, December: 11,
  };
  const month = months[match[1]];
  if (month === undefined) throw new Error('Letter has an invalid unlock date.');

  const day = Number(match[2]);
  const year = Number(match[3]);
  const timestamp = Date.UTC(year, month, day) - 8 * 60 * 60 * 1000;
  const parsed = new Date(timestamp + 8 * 60 * 60 * 1000);
  if (parsed.getUTCFullYear() !== year || parsed.getUTCMonth() !== month || parsed.getUTCDate() !== day) {
    throw new Error('Letter has an invalid unlock date.');
  }
  return timestamp;
}

function getLatestUnlockedNumber() {
  const manilaNow = new Date(Date.now() + 8 * 60 * 60 * 1000);
  const monthsSinceStart = (manilaNow.getUTCFullYear() - 2026) * 12
    + manilaNow.getUTCMonth() - 5;
  const latest = monthsSinceStart + (manilaNow.getUTCDate() >= 14 ? 1 : 0);
  return Math.min(Math.max(latest, 0), 120);
}

async function readMessages(maxNumber) {
  const messages = [];
  for (let start = 1; start <= maxNumber; start += 20) {
    const end = Math.min(start + 19, maxNumber);
    const snapshots = await Promise.all(
      Array.from({ length: end - start + 1 }, (_, index) =>
        get(ref(database, `monthsaries/${start + index}`))),
    );
    snapshots.forEach(snapshot => {
      const message = snapshot.val();
      if (message && typeof message === 'object' && Number.isInteger(message.num)) {
        messages.push(message);
      }
    });
  }
  return messages.sort((a, b) => a.num - b.num);
}

window.firebaseVault = {
  getCurrentUser: () => auth.currentUser,
  signIn: (email, password) => signInWithEmailAndPassword(auth, email, password),
  signOut: () => signOut(auth),
  loadMessages: () => readMessages(auth.currentUser ? 120 : getLatestUnlockedNumber()),
  async saveMessages(messages) {
    if (!auth.currentUser) {
      throw new Error('Sign in with your admin account before saving letters.');
    }

    const existing = await readMessages(120);
    const prepared = messages.map(message => {
      if (!Number.isInteger(message.num) || message.num < 1 || message.num > 120) {
        throw new Error('Monthsary number must be between 1 and 120.');
      }
      return {
        num: message.num,
        label: message.label,
        date: message.date,
        letter: message.letter,
        unlockAt: getUnlockTimestamp(message.date),
      };
    });
    const desiredNumbers = new Set(prepared.map(message => message.num));
    await Promise.all([
      ...prepared.map(message => set(ref(database, `monthsaries/${message.num}`), message)),
      ...existing
        .filter(message => !desiredNumbers.has(message.num))
        .map(message => remove(ref(database, `monthsaries/${message.num}`))),
    ]);
  },
};

onAuthStateChanged(auth, user => {
  window.dispatchEvent(new CustomEvent('firebase-vault-auth', {
    detail: { email: user?.email || null },
  }));
});
