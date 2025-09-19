// app/firebase.js
import { initializeApp } from 'firebase/app';
import { getFirestore } from 'firebase/firestore';
import { getAuth } from 'firebase/auth';

const firebaseConfig = {
  apiKey: "AIzaSyCOGDjBNnPqucArYINfKNQfhkuEtsaUrW8",
  authDomain: "defect-tracker-11a91.firebaseapp.com",
  projectId: "defect-tracker-11a91",
  storageBucket: "defect-tracker-11a91.appspot.com",
  messagingSenderId: "766488836354",
  appId: "1:766488836354:web:86d39abdf6c6045f416a1b"
};

const app = initializeApp(firebaseConfig);

export const db = getFirestore(app);
export const auth = getAuth(app);
