import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";

const firebaseConfig = {
  apiKey: "AIzaSyB67t1bUcFxi4OMU0wMSvSQnSxNukdcFVc",
  authDomain: "reactchatapp-e3dee.firebaseapp.com",
  projectId: "reactchatapp-e3dee",
  storageBucket: "reactchatapp-e3dee.appspot.com",
  messagingSenderId: "408234144750",
  appId: "1:408234144750:web:0ec9fb903b58a6d2a094ff",
};

export const app = initializeApp(firebaseConfig);

export const auth = getAuth();
export const db = getFirestore();
export const storage = getStorage();
