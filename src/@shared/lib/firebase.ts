import { initializeApp } from "firebase/app";
import * as firebaseAuth from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyDD6doETkf_xCIBOBs8PfWcet8JOav1ptg",
  authDomain: "warehouse-b7e14.firebaseapp.com",
  projectId: "warehouse-b7e14",
  storageBucket: "warehouse-b7e14.firebasestorage.app",
  messagingSenderId: "193676011113",
  appId: "1:193676011113:web:3855ac21ffd8e4da67a4f8",
};

export const app = initializeApp(firebaseConfig);
export const auth = firebaseAuth;
