import firebase from 'firebase/app'
import 'firebase/auth'
import 'firebase/database'


import { config } from 'dotenv'

config()

const FirebaseConfig = {
  apiKey: process.env.apiKey,
  authDomain: process.env.authDomain,
  databaseURL: process.env.databaseURL,
  projectId: process.env.projectId,
  storageBucket: process.env.storageBucket,
  messagingSenderId: process.env.messagingSenderId,
  appId: process.env.appId
};

firebase.initializeApp(FirebaseConfig);

