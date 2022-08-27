import { initializeApp } from "firebase/app";
import { getFirestore } from 'firebase/firestore';
import { getAuth, GoogleAuthProvider } from 'firebase/auth';
import { getStorage } from "firebase/storage";

const firebaseConfig = {
    apiKey: "AIzaSyC9L4IFbVc4WC4fCyHWtglqJJ25HKEEhGY",
    authDomain: "userdata-7798d.firebaseapp.com",
    databaseURL: "https://userdata-7798d-default-rtdb.firebaseio.com",
    projectId: "userdata-7798d",
    storageBucket: "userdata-7798d.appspot.com",
    messagingSenderId: "639386634518",
    appId: "1:639386634518:web:75dc339a9a061049e0e837"
};


export const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);
export const auth = getAuth();
export const Storage = getStorage(app);
export const provider = new GoogleAuthProvider();
provider.setCustomParameters({ prompt: 'select_account'});