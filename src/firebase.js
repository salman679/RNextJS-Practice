// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {
  FacebookAuthProvider,
  GoogleAuthProvider,
  createUserWithEmailAndPassword,
  getAuth,
  sendPasswordResetEmail,
  signInWithEmailAndPassword,
  signInWithPopup,
} from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBW7QLf-_df3JNFXGKeoGpD0ndPW_TeMnI",
  authDomain: "guestbook-d280a.firebaseapp.com",
  projectId: "guestbook-d280a",
  storageBucket: "guestbook-d280a.appspot.com",
  messagingSenderId: "451888273325",
  appId: "1:451888273325:web:ce19e2a41b0e727948f324",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const googleAuthProvider = new GoogleAuthProvider();
const facebookAuthProvider = new FacebookAuthProvider();

async function registerWithEmailAndPassword(email, password) {
  try {
    const res = await createUserWithEmailAndPassword(auth, email, password);
    const user = res.user;
    return user;
  } catch (err) {
    throw new Error(err);
  }
}

const loginWithEmailAndPassword = async (email, password) => {
  const res = await signInWithEmailAndPassword(auth, email, password);
  return res;
};

async function sendPasswordReset(email) {
  await sendPasswordResetEmail(auth, email);
}

async function signInWithGoogle() {
  const res = await signInWithPopup(auth, googleAuthProvider);
  return res.user;
}

async function signInWithFacebook() {
  const res = await signInWithPopup(auth, facebookAuthProvider);
  return res.user;
}

export {
  auth,
  loginWithEmailAndPassword,
  registerWithEmailAndPassword,
  sendPasswordReset,
  signInWithFacebook,
  signInWithGoogle,
};
