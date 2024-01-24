const { initializeApp } = require("firebase/app");
const { getFirestore } = require("firebase/firestore")

const firebaseConfig = {
  apiKey: "AIzaSyD6g2VBl4zCQHvqaugC5h7zK2TfC2hpxM8",
  authDomain: "clone-c41fd.firebaseapp.com",
  projectId: "clone-c41fd",
  storageBucket: "clone-c41fd.appspot.com",
  messagingSenderId: "165083308376",
  appId: "1:165083308376:web:a81cb2e98b0de8bc07052d"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = getFirestore(app);


module.exports = { db };