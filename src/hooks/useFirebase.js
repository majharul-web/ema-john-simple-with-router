import { useState, useEffect } from "react";
import { getAuth, signInWithPopup, signOut, GoogleAuthProvider, onAuthStateChanged } from "firebase/auth";
import initializeAuthentication from "../Firebase/initializeFirebase";

initializeAuthentication();


const useFirebase = () => {
    const [user, setUser] = useState({});

    const auth = getAuth();
    const googleProvider = new GoogleAuthProvider();

    // google singIn
    const singInUsingGoogle = () => {
        return signInWithPopup(auth, googleProvider)

    }

    // logout
    const logOut = () => {
        signOut(auth)
            .then(() => {
                setUser({})
            });

    }
    useEffect(() => {
        onAuthStateChanged(auth, (user) => {
            if (user) {
                setUser(user)
            }
        });

    }, [])


    return {
        user,
        singInUsingGoogle,
        logOut
    }

}

export default useFirebase;