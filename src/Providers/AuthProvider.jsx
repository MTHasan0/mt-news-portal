import { createUserWithEmailAndPassword, getAuth, onAuthStateChanged, signInWithEmailAndPassword, signOut } from "firebase/auth";

import { createContext, useEffect, useState } from "react";
import app from "../Firebase/Firebase.config";


export const AuthContext = createContext(null);


const auth = getAuth(app);

const AuthProvider = ({children}) => {

    const [loading, setLoading] = useState(true);

    const createUser = (email, password)=>{
        setLoading(true);
        return createUserWithEmailAndPassword(auth, email, password);
        
    }

    const loginUser = (email, password)=>{
        setLoading(true);
        return signInWithEmailAndPassword(auth, email, password);
    }

    const logOut = ()=>{
        setLoading(true);
        return signOut(auth);
    }

    const [user, setUser] = useState(null);

    useEffect(()=>{
        const unSubscribe = onAuthStateChanged(auth, currentUser=>{
            console.log('User in auth state', currentUser);
            setUser(currentUser);
            setLoading(false);
        });
        return ()=>{
            unSubscribe();
        }
    }, [])

    const authInfo = {
        user,
        loading,
        createUser,
        loginUser,
        logOut

    };

    return (
        <AuthContext.Provider value={authInfo}>
            {children}
        </AuthContext.Provider>
    );
};

export default AuthProvider;