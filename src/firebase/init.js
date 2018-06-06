import firebase from 'firebase'  
import firestore from 'firebase/firestore'
// Initialize Firebase
var config = {
    apiKey: "AIzaSyDzXgIX9xTWi-sX_U_AvrCcNwl0tjW6_Dk",
    authDomain: "dreamhomefinder-9edf5.firebaseapp.com",
    databaseURL: "https://dreamhomefinder-9edf5.firebaseio.com",
    projectId: "dreamhomefinder-9edf5",
    storageBucket: "dreamhomefinder-9edf5.appspot.com",
    messagingSenderId: "436872240025"
    };

const firebaseApp = firebase.initializeApp(config);
firebaseApp.firestore().settings({timestampsInSnapshots: true})
export default firebaseApp.firestore()
