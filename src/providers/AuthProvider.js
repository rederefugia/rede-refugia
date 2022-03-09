import React, { useEffect, useState } from "react";
import firebase from "../utils/firebase/firebase";
import firestore from "../utils/firebase/firestore";

export const AuthContext = React.createContext({});

export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [cnpj, setCnpj] = useState("");
  const [loadingAuthState, setLoadingAuthState] = useState(true);
  const [authError, setAuthError] = useState(null);

  useEffect(() => {
    const unregisterAuthObservable = firebase
      .auth()
      .onAuthStateChanged(async (user) => {
        if (user) {
          let userData = await firestore.getById("users", user.uid);
          userData.photoURL = user.photoURL ? user.photoURL : '';
          userData.phoneNumber = user.phoneNumber ? user.phoneNumber : '';
          setUser({ ...user, ...userData });
        } else setUser(user);
        setLoadingAuthState(false);
      });
    return () => unregisterAuthObservable();
  }, []);

  return (
    <AuthContext.Provider
      value={{
        user,
        authenticated: user !== null,
        setUser,
        loadingAuthState,
        authError,
        cnpj,
        setCnpj,
        login: async (email, password) => {
          try {
            await firebase.auth().signInWithEmailAndPassword(email, password);
          } catch (e) {
            console.error(e);
            setAuthError(e.message);
          }
        },
        logout: async () => {
          try {
            await firebase.auth().signOut();
          } catch (e) {
            console.error(e);
          }
        },
        signup: async (userData, password) => {
          try {
            const userCredentials = await firebase
              .auth()
              .createUserWithEmailAndPassword(userData.email, password);
            let data = {
              ...user,
              ...userData,
            };
            if (cnpj.length > 0) data.cnpj = cnpj;
            await firestore.createWithId(
              "users",
              userCredentials.user.uid,
              data
            );
          } catch (e) {
            console.error(e);
            setAuthError(e.message);
          }
        },
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};
