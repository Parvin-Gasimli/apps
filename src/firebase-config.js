import   {initializeApp,}  from "firebase/app"
import "firebase/database"
import {getFirestore} from "@firebase/firestore"



var firebaseConfig = {
    apiKey: process.env.API_KEY,
    authDomain: process.env.AUTH_DOMAIN,
    projectId: process.env.PROJECT_ID,
    storageBucket: process.env.STORAGE_BUCKET,
    messagingSenderId: process.env.SENDER_ID,
    appId: process.env.APP_ID
  };


const app=initializeApp(firebaseConfig)
 export const db=getFirestore(app)