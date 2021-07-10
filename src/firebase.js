import firebase from 'firebase/app';
// firestore database
import 'firebase/firestore';

const firebaseConfig = {
  apiKey: 'AIzaSyBjJm77sry2PcQnORT4j4bCxiwGIDJEHdw',
  authDomain: 'think-piece-f2ef3.firebaseapp.com',
  projectId: 'think-piece-f2ef3',
  storageBucket: 'think-piece-f2ef3.appspot.com',
  messagingSenderId: '360076552537',
  appId: '1:360076552537:web:19e11a7516a3b747f0c448',
  measurementId: 'G-TMS0LXC151',
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);

export const firestore = firebase.firestore();

window.firebase = firebase;

export default firebase;
