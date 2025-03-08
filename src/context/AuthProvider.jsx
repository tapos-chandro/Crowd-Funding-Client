

import { createContext, useEffect, useState } from "react";
import { createUserWithEmailAndPassword, GoogleAuthProvider, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut, updateProfile } from "firebase/auth";
import { auth } from "../firebase/firebase.config";

 export const AuthContext = createContext({})


const AuthProvider = ({children}) => {
    const [user, setUser] = useState(null)
    const [loading , setLoading] = useState(true)
    const [userPhoto , setUserPhoto] = useState('')
    const googleProvider = new GoogleAuthProvider();

    console.log(userPhoto)

    const registerNewUser = (email, password) => {
        setLoading(true)
        return createUserWithEmailAndPassword( auth, email, password)
    }

    const updateUserProfile = (name, photoURL) => {
        setLoading(true)
        return updateProfile(auth.currentUser, { displayName: name, photoURL }).then(() => {
            setUser({ ...auth.currentUser, displayName: name, photoURL });
          });
    }

    const signInUser = (email, password) => {
        setLoading(true)
        return signInWithEmailAndPassword(auth, email, password)
    }

    const googleLoginUser = () => {
        setLoading(true)
        return signInWithPopup(auth, googleProvider)
    }


    const logout = () => {
        return  signOut(auth)
    }

    useEffect(() => {
       const unsubscribe =  onAuthStateChanged(auth, currentUser => {
            if(currentUser){
                setUser(currentUser)
                setLoading(false)
                setUserPhoto(currentUser.photoURL)
            }else{
                setUser(null)
                setLoading(false)
            }
            return () =>  {
                unsubscribe ()
            }
        })

        
    }, [])

    const authInfo = {
        user,
        setUser,
        registerNewUser,
        updateUserProfile,
        signInUser,
        loading,
        googleLoginUser,
        logout,
        userPhoto
    }

    return (
        <AuthContext.Provider value={authInfo}>
            {children}
        </AuthContext.Provider>
    );
};




export default AuthProvider;