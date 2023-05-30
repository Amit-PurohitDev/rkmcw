import {initializeApp}  from 'firebase/app';
import {getFirestore} from 'firebase/firestore';
import {getAuth} from 'firebase/auth';

const firebaseConfig = {
    apiKey: "AIzaSyDSegIU-p4jLffQyYUq4VDLbJM-jJ1_bXE",
    authDomain: "webapp-ceb12.firebaseapp.com",
    databaseURL: "https://webapp-ceb12-default-rtdb.firebaseio.com",
    projectId: "webapp-ceb12",
    storageBucket: "webapp-ceb12.appspot.com",
    messagingSenderId: "89980478177",
    appId: "1:89980478177:web:19ad2b911c8ff4171ecda0"
  };

  const app = initializeApp(firebaseConfig);
  const db = getFirestore(app);
  export const auth = getAuth();


  export default db;