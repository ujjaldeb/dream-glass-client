import { useState } from "react";
import {
  getAuth,
  createUserWithEmailAndPassword,
  signOut,
} from "firebase/auth";
import initializeFirebase from "../Pages/Login/Firebase/fiebase.init";

initializeFirebase();

const useFirebase = () => {
  const [user, setUser] = useState({});
  const [authError, setAuthError] = useState("");
  const [loading, setloading] = useState(true);

  const auth = getAuth();

  // User Register method
  const registerUser = (email, password, history) => {
    setloading(true);
    createUserWithEmailAndPassword(auth, email, password)
      .then((result) => {
        setAuthError("");
        setUser(result.user);
        history.push("/");
        console.log(result);
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

  return {
    registerUser,
    user,
    authError,
    loading,
    logOut,
  };
};

export default useFirebase;
