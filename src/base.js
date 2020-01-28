import Rebase from 're-base'
import firebase from 'firebase/app'
import 'firebase/database'

const firebaseApp = firebase.initializeApp({
  apiKey: "AIzaSyDORN3N9TCGZEqggWBPWEDQ1I_PREiBg2c",
  authDomain: "travel-diary-app-30e5d.firebaseapp.com",
  databaseURL: "https://travel-diary-app-30e5d.firebaseio.com"
})

const base = Rebase.createClass(firebaseApp.database())

// This is a named export
export { firebaseApp }

// this is a default export
export default base
