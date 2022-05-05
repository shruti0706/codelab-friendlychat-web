/**
 * To find your Firebase config object:
 * 
 * 1. Go to your [Project settings in the Firebase console](https://console.firebase.google.com/project/_/settings/general/)
 * 2. In the "Your apps" card, select the nickname of the app for which you need a config object.
 * 3. Select Config from the Firebase SDK snippet pane.
 * 4. Copy the config object snippet, then add it here.
 */

  /* TODO: ADD YOUR FIREBASE CONFIGURATION OBJECT HERE */
  // For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBNGit1ezK7WSM1-vYm2Fzttf_hxx3iBwM",
  authDomain: "react-firechat-22550.firebaseapp.com",
  projectId: "react-firechat-22550",
  storageBucket: "react-firechat-22550.appspot.com",
  messagingSenderId: "796320273844",
  appId: "1:796320273844:web:accb537a499cc4a9ef0ee1",
  measurementId: "G-26HPVW821M"
};


export function getFirebaseConfig() {
  if (!config || !config.apiKey) {
    throw new Error('No Firebase configuration object provided.' + '\n' +
    'Add your web app\'s configuration object to firebase-config.js');
  } else {
    return config;
  }
}
