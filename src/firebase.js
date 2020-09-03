import  firebase  from 'firebase';


const firebaseConfig = firebase.initializeApp({
    apiKey: "AIzaSyCCJuCab4eN3UemHavBIcifU0APMjCr1tQ",
    authDomain: "to-do-f5076.firebaseapp.com",
    databaseURL: "https://to-do-f5076.firebaseio.com",
    projectId: "to-do-f5076",
    storageBucket: "to-do-f5076.appspot.com",
    messagingSenderId: "1035245852491",
    appId: "1:1035245852491:web:69556e74d285e4813dbace",
    measurementId: "G-SSXEVT6VY0"
  });

const db = firebaseConfig.firestore();

export default db;
