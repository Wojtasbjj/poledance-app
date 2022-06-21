import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import 'firebase/compat/firestore';
import 'firebase/compat/storage'
import 'firebase/compat/database'

const clientCredentials = {
  apiKey: "AIzaSyA54bTOkw_QRO2E5MOka3Wsup2u-mvP100",
  authDomain: "poledance-app.firebaseapp.com",
  projectId: "poledance-app",
  storageBucket: "poledance-app.appspot.com",
  messagingSenderId: "582367186560",
  appId: "1:582367186560:web:e23ec9fa587d6135e86065",
  measurementId: "G-B3TCP6K9ML"
};

if (!firebase.apps.length) {
    firebase.initializeApp(clientCredentials)
}

const storage = firebase.storage()

const database = firebase.database()

export { storage, database, firebase as default }