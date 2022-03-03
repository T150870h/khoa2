import {getAuth} from 'https://www.gstatic.com/firebasejs/9.6.6/firebase-auth.js'
import {getFirestore} from 'https://www.gstatic.com/firebasejs/9.6.6/firebase-firestore.js'
export const auth = getAuth();
export const db = getFirestore();