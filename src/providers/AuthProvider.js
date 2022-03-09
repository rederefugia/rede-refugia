import React, { useEffect, useState } from "react";
import firebase from "../utils/firebase/firebase";
import firestore from "../utils/firebase/firestore";

export const AuthContext = React.createContext({});

export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [loadingAuthState, setLoadingAuthState] = useState(true);
  const [authError, setAuthError] = useState(null);

  useEffect(() => {
    const unregisterAuthObservable = firebase
      .auth()
      .onAuthStateChanged((user) => {
        setUser(user);
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
              await firestore.createWithId('users', userCredentials.user.uid, userData);
            console.log(userCredentials, userData);
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
