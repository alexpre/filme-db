import Firebase from 'firebase'
let config = {
  apiKey: 'AIzaSyCbN4-EDljP-ad2ZCYxBuuvyblImHhbJ-s',
  authDomain: 'movieproject-db.firebaseapp.com',
  databaseURL: 'https://movieproject-db.firebaseio.com',
  projectId: 'movieproject-db',
  storageBucket: '',
  messagingSenderId: '260550762780'
}
let app = Firebase.initializeApp(config)
export const db = app.database()
