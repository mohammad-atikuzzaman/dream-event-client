import {
  createUserWithEmailAndPassword,
  GoogleAuthProvider,
  onAuthStateChanged,
  signInWithEmailAndPassword,
  signInWithPopup,
  signOut,
  updateProfile,
} from "firebase/auth";
import { createContext, useEffect, useState } from "react";
import auth from "../firebase.init";
import axios from "axios";
import { toast } from "react-toastify";

export const AuthContext = createContext(null);

const googleProvider = new GoogleAuthProvider();

const AuthContextProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [admin, setAdmin] = useState(false);
  const [loading, setLoading] = useState(false);

  const registerWithEmailPass = (email, password) => {
    return createUserWithEmailAndPassword(auth, email, password);
  };
  const logInWithEmailPass = (email, password) => {
    return signInWithEmailAndPassword(auth, email, password);
  };
  const logInWithGoogle = () => {
    return signInWithPopup(auth, googleProvider);
  };
  const updateUserProfile = (name, photo) => {
    return updateProfile(auth.currentUser, {
      displayName: name,
      photoURL: photo,
    });
  };
  const logOut = () => {
    setLoading(true);
    return signOut(auth);
  };
  useEffect(() => {
    const unSubscribe = onAuthStateChanged(auth, (currentUser) => {
      setUser(currentUser);
      axios(
        `https://dream-event-back-end.vercel.app/api/users/isadmin?emailId=${currentUser?.email}`
      )
        .then((res) => setAdmin(res.data === "admin"))
        .catch(() =>
          toast.warn("Only admin Access", {
            theme: "colored",
          })
        );
      setLoading(false);
    });

    return () => unSubscribe();
  }, [user]);

  const contexts = {
    registerWithEmailPass,
    logInWithEmailPass,
    logInWithGoogle,
    updateUserProfile,
    logOut,
    loading,
    setLoading,
    admin,
    user,
  };
  return (
    <AuthContext.Provider value={contexts}>{children}</AuthContext.Provider>
  );
};

export default AuthContextProvider;
