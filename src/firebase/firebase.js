// Import the functions you need from the SDKs you need
import { initializeApp } from 'firebase/app'
import { getFirestore } from 'firebase/firestore'
import { getStorage } from 'firebase/storage'

const firebaseConfig = {
  apiKey: 'AIzaSyD3iMouL81shsf7wSwhWbQFv0s0cbscc94',
  authDomain: 'entfinal-coderreactjs.firebaseapp.com',
  projectId: 'entfinal-coderreactjs',
  storageBucket: 'entfinal-coderreactjs.appspot.com',
  messagingSenderId: '528861217925',
  appId: '1:528861217925:web:bf47a3f4c914b9f1edd5ec'
}

const app = initializeApp(firebaseConfig)
export const db = getFirestore(app)
export const storage = getStorage(app)
