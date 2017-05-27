import * as firebase from 'firebase';

var config = {
    apiKey: "AIzaSyCB7_lsVTfazwJc-bdpSkW2To7F6G8sOww",
    authDomain: "chefchallenge-5ab74.firebaseapp.com",
    databaseURL: "https://chefchallenge-5ab74.firebaseio.com",
    storageBucket: "chefchallenge-5ab74.appspot.com",
    messagingSenderId: "724176944733"
  };
  
export const firebaseApp = firebase.initializeApp(config);
export const topicsRef = firebase.database().ref();
