import { getAuth, signInWithPopup, GoogleAuthProvider, onAuthStateChanged, signInWithEmailAndPassword, signOut, createUserWithEmailAndPassword, updateProfile } from "firebase/auth";
import { useEffect, useState } from "react";
import initializeAuthentication from "../Pages/Login/Firebase/firebase.init";

initializeAuthentication();
const useFirebase = () => {
    const [user, setUser] = useState({});
    // for handle error
    const [error, setError] = useState('');
    // for making admin
    const [admin, setAdmin] = useState(false);
    const auth = getAuth();
    const googleProvider = new GoogleAuthProvider();

    // signup
    const registerAuth = (email, password, name, navigate) => {
        createUserWithEmailAndPassword(auth, email, password)
            .then((userCredential) => {
                const user = userCredential.user;
                setError('')
                const newUser = { email, displayName: name }
                setUser(newUser);
                // save user to the database > for email pass auth
                saveUser(email, name, 'POST');
                updateProfile(auth.currentUser, {
                    displayName: name
                }).then(() => {
                }).catch((error) => {
                });
                navigate('/')
            })
            .catch((error) => {
                const errorCode = error.code;
                setError(error.message);
                // ..
            });
    }

    // signin
    const loginAuth = (email, password, location, navigate) => {
        signInWithEmailAndPassword(auth, email, password)
            .then((userCredential) => {
                const destination = location?.state?.from || '/'
                navigate(destination)
                // Signed in 
                const user = userCredential.user;
                setError('')
            })
            .catch((error) => {
                const errorCode = error.code;
                setError(error.message);
            });
    }

    // login with google
    const loginUsingGoogle = (location, navigate) => {

        signInWithPopup(auth, googleProvider)
            .then((result) => {
                const user = result.user;
                // save user to the db > for google auth
                saveUser(user.email, user.displayName, 'PUT')
                const destination = location?.state?.from || '/';
                navigate(destination);
            }).catch((error) => {
                const errorCode = error.code;
                const errorMessage = error.message;
                const email = error.email;
                const credential = GoogleAuthProvider.credentialFromError(error);
            });
    }

    // update login history
    useEffect(() => {
        const unsubscribe = onAuthStateChanged(auth, (user) => {
            if (user) {
                setUser(user)
                const uid = user.uid;
            } else {
                setUser({});
            }
        });
        return () => unsubscribe;
    }, [])

    // save user
    const saveUser = (email, displayName, method) => {
        const user = { email, displayName };
        fetch('https://intense-springs-99541.herokuapp.com/inventorys', {
            method: method,
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(user)
        })
            .then()
    }

    // make admin ui
    // useEffect(() => {
    //     fetch(`https://intense-springs-99541.herokuapp.com/inventorys/${user.email}`)
    //         .then(res => res.json())
    //         .then(data => setAdmin(data.admin))
    // }, [user.email])

    // logout
    const logOut = () => {
        signOut(auth).then(() => {
        }).catch((error) => {
        });
    }

    return {
        loginUsingGoogle,
        user,
        admin,
        loginAuth,
        error,
        registerAuth,
        logOut
    }
}
export default useFirebase;