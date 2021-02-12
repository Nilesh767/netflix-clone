import firebase from "firebase";

const firebaseConfig = {
  apiKey: "AIzaSyBX4hVz_ipa_DZk3TuJyqhE1gknIQ1b8KY",
  authDomain: "netflix-clone-neo.firebaseapp.com",
  projectId: "netflix-clone-neo",
  storageBucket: "netflix-clone-neo.appspot.com",
  messagingSenderId: "240397869368",
  appId: "1:240397869368:web:ac959e42d4d9004f1521cd",
};

const firebaseApp = firebase.initializeApp(firebaseConfig);
const db = firebaseApp.firestore();
const auth = firebase.auth();

export { auth };
export default db;
