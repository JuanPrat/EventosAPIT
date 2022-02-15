// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import {getStorage} from "firebase/storage";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBTn9xRT9eCVWpkac2Z6-Igtbt76PcyN9w",
  authDomain: "eventos-apit.firebaseapp.com",
  projectId: "eventos-apit",
  storageBucket: "eventos-apit.appspot.com",
  messagingSenderId: "459116552053",
  appId: "1:459116552053:web:ae678b456e4a94aca37d3c",
  measurementId: "G-TEPM52HMZ6"
};



// Initialize Firebase
export const app = initializeApp(firebaseConfig);

export const storage = getStorage(app)

const analytics = getAnalytics(app);


