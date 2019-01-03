// db.js

import Firebase from 'firebase'
let config = {
    apiKey: "AIzaSyAkIvUPsihisfRgbKQyNxMnS3Xwqcmzreo",
    authDomain: "first-project-7103f.firebaseapp.com",
    databaseURL: "https://first-project-7103f.firebaseio.com",
    projectId: "first-project-7103f",
    storageBucket: "",
    messagingSenderId: "896658847984"
  };
let app = Firebase.initializeApp(config)
export const db = app.database()