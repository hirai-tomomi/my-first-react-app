import firebase from 'firebase'
import {firebaseConfig} from "./firebaseConfig";

// // For Firebase JS SDK v7.20.0 and later, measurementId is optional
// const firebaseConfig = {
//     apiKey: "AIzaSyDtJtdaMyRHYFTF96jFLrn-y28em6lwtpk",
//     authDomain: "my-first-react-app-da65d.firebaseapp.com",
//     databaseURL: "https://my-first-react-app-da65d.firebaseio.com",
//     projectId: "my-first-react-app-da65d",
//     storageBucket: "my-first-react-app-da65d.appspot.com",
//     messagingSenderId: "714513294439",
//     appId: "1:714513294439:web:ec45c851c9c08b254ce0c2",
//     measurementId: "G-29N3SLBJ6R"
//   };

  export const firebaseApp = firebase.initializeApp(firebaseConfig)