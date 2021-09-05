import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import 'firebase/compat/firestore';
// import 'firebase/firestore'

const firebaseConfig = {
    apiKey: "AIzaSyCqQSKjT5Fz90xC7sJl9d-ILemT2bCVngM",
    authDomain: "wayde-93041.firebaseapp.com",
    projectId: "wayde-93041",
    storageBucket: "wayde-93041.appspot.com",
    messagingSenderId: "750635331085",
    appId: "1:750635331085:web:ec8a7c69f670163edcaf44"
  };

// initialize firestore
firebase.initializeApp(firebaseConfig)

// init service
const projectFirestore = firebase.firestore()
const projectAuth = firebase.auth()

// timestamp
const timestamp = firebase.firestore.FieldValue.serverTimestamp

export { projectFirestore, projectAuth }