import Rebase from 're-base'
import firebase from 'firebase/app'
import 'firebase/database'

const firebaseApp = firebase.initializeApp({
  apiKey: "AIzaSyDORN3N9TCGZEqggWBPWEDQ1I_PREiBg2c",
  authDomain: "travel-diary-app-30e5d.firebaseapp.com",
  databaseURL: "https://travel-diary-app-30e5d.firebaseio.com",
  projectId: "travel-diary-app-30e5d",
  storageBucket: "travel-diary-app-30e5d.appspot.com",
  messagingSenderId: "171659719228",
  appId: "1:171659719228:web:05201eb61625cc96918939",
  measurementId: "G-Z6X3F47ZSS"
})

const base = Rebase.createClass(firebaseApp.database())

// This is a named export
export { firebaseApp }

// this is a default export
export default base
