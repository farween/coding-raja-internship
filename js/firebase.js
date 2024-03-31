let firebaseConfig = {
  apiKey: "AIzaSyBt4E3IAYremjhING2f5mKAqz3Y2PqImhw",
  authDomain: "blogging-website-2ed5b.firebaseapp.com",
  projectId: "blogging-website-2ed5b",
  storageBucket: "blogging-website-2ed5b.appspot.com",
  messagingSenderId: "300176917435",
  appId: "1:300176917435:web:54aa3c3946230600dd7a9e",
  measurementId: "G-35REP4FDMG"
};

firebase.initializeApp(firebaseConfig);

let db = firebase.firestore();
let auth= firebase.auth();

const logoutUser=() => {
  auth.signOut();
  location.reload();
}
