import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
    apiKey: "AIzaSyCU1vsHy8UulOfzHM1UIUazGcoOIquxNhY",
    authDomain: "eliteevents-1121a.firebaseapp.com",
    projectId: "eliteevents-1121a",
    storageBucket: "eliteevents-1121a.firebasestorage.app",
    messagingSenderId: "1095235383989",
    appId: "1:1095235383989:web:689d3cd50f9ba8906544fc",
    measurementId: "G-45GBPGR00R"
};

const app = initializeApp(firebaseConfig);
const auth = getAuth(app);

export default auth;
