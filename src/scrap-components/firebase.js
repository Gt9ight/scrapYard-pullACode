import { initializeApp } from 'firebase/app';
import { getAuth, signInWithRedirect, signInWithPopup, GoogleAuthProvider, createUserWithEmailAndPassword, signInWithEmailAndPassword } from 'firebase/auth';
import { getFirestore, doc, getDoc, setDoc } from 'firebase/firestore'

const firebaseConfig = {
    apiKey: "AIzaSyDaRHpE7LsGLlsS6cA2QcNFpazi9sS78-M",
    authDomain: "service-manager-95b96.firebaseapp.com",
    projectId: "service-manager-95b96",
    storageBucket: "service-manager-95b96.appspot.com",
    messagingSenderId: "151124106785",
    appId: "1:151124106785:web:a21428ac529d37a1c44d60"
  };
  
  // Initialize Firebase
  const firebaseApp = initializeApp(firebaseConfig);

  const provider = new GoogleAuthProvider();
  provider.setCustomParameters({
    prompt: 'select_account'
  })


  export const auth = getAuth()

  export const signInWithGooglePopup = () => signInWithPopup(auth, provider);


  export const db = getFirestore()
  export const createUserDocumentFromAuth = async (userAuth, additionalInformation ={}) => {
    if(!userAuth) return;
        const UserDocRef = doc(db, 'users', userAuth.uid)

        const userSnapshot = await getDoc(UserDocRef);
        if(!userSnapshot.exists()){
            const { displayName, email } = userAuth;
            const createdAt = new Date();

            try {
                await setDoc(UserDocRef, {
                    displayName,
                    email,
                    createdAt,
                    ...additionalInformation

                });
            }catch (error){
                console.log('error creating the user', error.message)
            }
        }
        return UserDocRef
  }

  export const createAuthUserWithEmailAndPassword = async (email, password) => {
    if(!email || !password) return;
    return await createUserWithEmailAndPassword(auth, email, password)
  };
  export const signinAuthUserWithEmailAndPassword = async (email, password) => {
    if(!email || !password) return;
    return await signInWithEmailAndPassword(auth, email, password)
  };


  const createTechnicianDocument = async (tasks) => {
    const technicianTasksDocRef = doc(db, 'fleets',  ) 
  }