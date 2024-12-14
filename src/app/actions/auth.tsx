import {  signInWithEmailAndPassword, GoogleAuthProvider, signInWithPopup } from "firebase/auth";
import { auth } from "../lib/firebaseConfig";
import { createSession, deleteSession } from "../lib/session";

export async function loginWithPassword(email:string,password:string) {
    
    try{
        const userCredential=await signInWithEmailAndPassword(auth,email,password);
        console.log(userCredential.user);
        //@ts-expect-error/has-use-access
        createSession(userCredential.user.accessToken);
        return userCredential.user;
    } catch(error){
        console.log("Error",error);
        return null;
    }
}
export async function loginWithGoogle() {
    try{
        const provider = new GoogleAuthProvider();
        provider.addScope('https://www.googleapis.com/auth/contacts.readonly');
        const userCredential=await signInWithPopup(auth,provider);
        // @ts-expect-error/has  usage
        createSession(userCredential.user.accessToken);
        return userCredential.user;

    } catch(error){
        return null;
        console.log("Error",error);
    }
}

export async function logout() {
    try{
        
        deleteSession();
        return;

    } catch(error){
        return null;
        console.log("Error",error);
    }
}