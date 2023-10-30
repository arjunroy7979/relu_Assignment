
import { initializeApp } from "firebase/app";
import { getAuth } from 'firebase/auth';

const firebaseConfig = {
  apiKey: "AIzaSyCbUFh7zkymfe2tw9xqT4E2GnBe6z_erXk",
  authDomain: "auths-5c0f6.firebaseapp.com",
  projectId: "auths-5c0f6",
  storageBucket: "auths-5c0f6.appspot.com",
  messagingSenderId: "851587035857",
  appId: "1:851587035857:web:3d0f20cce46a7c9f4d4bf0"
};

const app = initializeApp(firebaseConfig);
export const database = getAuth(app);