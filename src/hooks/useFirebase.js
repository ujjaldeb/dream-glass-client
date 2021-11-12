import { useEffect, useState } from "react";
import {
  getAuth,
  createUserWithEmailAndPassword,
  signOut,
  onAuthStateChanged,
  signInWithEmailAndPassword,
  updateProfile,
} from "firebase/auth";
import initializeFirebase from "../Pages/Login/Firebase/fiebase.init";

initializeFirebase();

const useFirebase = () => {
  const [user, setUser] = useState({});
  const [authError, setAuthError] = useState("");
  const [loading, setloading] = useState(true);
  const auth = getAuth();
  
  // User Register method
  const registerUser = (email, password, name, history) => {
    setloading(true);
    createUserWithEmailAndPassword(auth, email, password)
      .then((result) => {
        const updateUser = { email: email, displayName: name };
        setUser(updateUser);

        // user save in database
        saveUser(email, name, 'subscriber');

        // update the user displayName
        updateProfile(auth.currentUser, {
          displayName: name,
        })
          .then(() => {
            // Profile updated!
            // ...
          })
          .catch((error) => {
            // An error occurred
            // ...
          });
        setAuthError("");
        //console.log(result.user);
        history.push("/");
      })
      .catch((error) => {
        setAuthError(error.message);
      })
      .finally(() => setloading(false));
  };

  // observer user this.state
  useEffect(() => {
    const unsubscribed = onAuthStateChanged(auth, (user) => {
      if (user) {
        setUser(user);
      } else {
        setUser({});
      }
      setloading(false);
    });
    return () => unsubscribed;
  }, [auth]);

  // login User with email and password
  const loginUser = (email, password, location, history) => {
    setloading(true);
    signInWithEmailAndPassword(auth, email, password)
      .then((result) => {
        const destination = location?.state?.from || "/";
        history.push(destination);
        setAuthError("");
      })
      .catch((error) => {
        setAuthError(error.message);
      })
      .finally(() => setloading(false));
  };

  // user logout menthod
  const logOut = () => {
    setloading(true);
    signOut(auth)
      .then(() => {
        // Sign-out successful.
      })
      .catch((error) => {
        // An error happened.
      })
      .finally(() => setloading(false));
  };

  // save user to database
  const saveUser = (email, displayName, role) => {
    const user = { email, displayName, role: role };
    fetch("http://localhost:5000/users", {
      method: 'POST',
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(user),
    }).then();
  };


  

  return {
    registerUser,
    user,
    authError,
    loading,
    loginUser,
    logOut,
  };
};

export default useFirebase;
