import firebase from 'firebase';

// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBs3th5RjvSVSwFSNldDKbK96V0RGgut9s",
  authDomain: "xsjsjsdmsam.firebaseapp.com",
  databaseURL: "https://xsjsjsdmsam-default-rtdb.firebaseio.com",
  projectId: "xsjsjsdmsam",
  storageBucket: "xsjsjsdmsam.appspot.com",
  messagingSenderId: "60261799913",
  appId: "1:60261799913:web:8501cfeba0b79ed050dd78",
  measurementId: "G-ZG36E19GKH"
};

if (!firebase.apps.length) {
  firebase.initializeApp(firebaseConfig);
}
export default firebase.database();