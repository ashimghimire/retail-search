import { initializeApp, getApps, getApp } from "firebase/app";
import { getAuth } from "firebase/auth"; // Example service
// import { getFirestore } from "firebase/firestore"; // Example service
import {firebaseConfig} from '../../../firebaseConfig';

// Initialize Firebase only once
const app = !getApps().length ? initializeApp(firebaseConfig) : getApp();

// Export initialized services for use in your app
export const auth = getAuth(app);
// export const db = getFirestore(app);
// export const storage = getStorage(app);