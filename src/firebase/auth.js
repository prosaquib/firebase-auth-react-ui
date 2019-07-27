import {auth} from './firebase';
// import { EmailAuthProvider } from '@firebase/auth-types';

//signup
export const doCreateUserWithEmailAndPassword = (email,password) =>
    auth.createUserWithEmailAndPassword(email,password);

//signin
export const doSignInWithEmailAndPassword = (email,password) =>
    auth.signInWithEmailAndPassword(email,password);

//signout

export const doSignOut = () =>
  auth.signOut();

// Password Reset
export const doPasswordReset = (email) =>
  auth.sendPasswordResetEmail(email);

// Password Change
export const doPasswordUpdate = (password) =>
  auth.currentUser.updatePassword(password);