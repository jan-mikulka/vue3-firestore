import { firebaseOptions } from './firebaseOptions'
import { initializeApp } from 'firebase/app'
import { getFirestore } from 'firebase/firestore'

const firebaseApp = initializeApp(firebaseOptions)
const db = getFirestore(firebaseApp)

export {
    firebaseOptions,
    firebaseApp,
    db
}