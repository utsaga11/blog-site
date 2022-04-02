import firebase from 'firebase/compat/app';
import 'firebase/compat/firestore';

const firebaseConfig = {
  apiKey: "AIzaSyBmI-DbURnpauZ0ozSQp75Qeid-G8gXopQ",
  authDomain: "react-hooks-app-e9f91.firebaseapp.com",
  projectId: "react-hooks-app-e9f91",
  storageBucket: "reac  t-hooks-app-e9f91.appspot.com",
  messagingSenderId: "482644173658",
  appId: "1:482644173658:web:a5a298592452f947934963"
};

// Initialize Firebase
firebase.initializeApp(firebaseConfig);

// export const firestore = firebase.firestore();
export const db = firebase.firestore();