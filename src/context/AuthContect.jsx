import React, { useState, useEffect, useContext, createContext } from "react";
import { auth, db } from "../firebase";
import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  signOut,
  onAuthStateChanged,
} from "firebase/auth";
import { setDoc, doc } from "firebase/firestore";

export const AuthContext = createContext(null);

const AuthContect = (props) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const [user, setUser] = useState([]);

  useEffect(() => {
    const subuser = onAuthStateChanged(auth, (currentuser) => {
      setUser(currentuser);
    });

    return () => {
      subuser();
    };
  }, []);

  function createAccount(email, password) {
    createUserWithEmailAndPassword(auth, email, password);
    const refdoc = doc(db, "users", email);
    setDoc(refdoc, {
      savedMovies: [],
    });
  }

  function loginAccount(email, password) {
    return signInWithEmailAndPassword(auth, email, password);
  }
  function logOut() {
    return signOut(auth);
  }

  const info = {
    createAccount,
    loginAccount,
    logOut,
    email,
    user,
    setEmail,
    password,
    setPassword,
    error,
    setError,
  };

  return (
    <AuthContext.Provider value={info}>{props.children}</AuthContext.Provider>
  );
};

export default AuthContect;

export function UserInfo() {
  return useContext(AuthContext);
}
