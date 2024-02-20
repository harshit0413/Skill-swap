import firebase from "firebase/app";
import "firebase/firestore";
import "firebase/auth";

const firebaseApp = {
  apiKey: "AIzaSyD8SOnYhRXnv6_hrfxZO8oycyCIOihsqvM",
  authDomain: "https://skill-swap-2fe5e.web.app/",
  projectId: "skill-swap-2fe5e",
  messagingSenderId: "206057775996",
  appId: "1:206057775996:web:7f59696e2fa989e85cfaf9",
};
if (!firebase.apps.length) {
  firebase.initializeApp(firebaseApp);
}
export default firebase;
