import { initializeApp } from 'firebase/app'
import { getStorage } from 'firebase/storage'

// Set the app configuration
const firebaseConfig = {
  apiKey: 'AIzaSyDhNfoPBCxprGo4B1q32JZaGkxjcIgS-Go',
  authDomain: 'fingerprint-verification-70d6f.firebaseapp.com',
  projectId: 'fingerprint-verification-70d6f',
  storageBucket: 'fingerprint-verification-70d6f.appspot.com',
  messagingSenderId: '812148039041',
  appId: '1:812148039041:web:35ec8a6889e026e7b81c80'
}
const firebaseApp = initializeApp(firebaseConfig)

// Get a reference to the storage service, which is used to create references in your storage bucket
const storage = getStorage(firebaseApp)

export default storage
