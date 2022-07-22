import React, { useEffect, useState } from "react";
import firebase from "../utils/firebase/firebase";
import firestore from "../utils/firebase/firestore";

export const AuthContext = React.createContext({});

export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [cnpj, setCnpj] = useState("");
  const [loadingAuthState, setLoadingAuthState] = useState(true);
  const [authError, setAuthError] = useState(null);

  const deleteUserOpportunities = async () => {
    const opts = await firestore.find(
      firestore.COLLECTIONS.OPPORTUNITIES,
      firestore.filter("owner", "==", user.uid)
    );
    await Promise.all(
      opts.map(
        async (opportunity) =>
          await firestore.deleteById(
            firestore.COLLECTIONS.OPPORTUNITIES,
            opportunity.id
          )
      )
    );
  };

  const mergeUserData = (authData, userData) => {
    if (authData.phoneNumber) userData.phoneNumber = authData.phoneNumber;
    else if (!userData.phoneNumber) userData.phoneNumber = "";
    userData.photoURL = authData.photoURL ? authData.photoURL : "";
    userData.uid = authData.uid ? authData.uid : "";
    userData.email = authData.email ? authData.email : "";
    userData.birthday = userData.birthday ? userData.birthday : "";
    userData.zipCode = userData.zipCode ? userData.zipCode : "";
    userData.state = userData.state ? userData.state : "";
    userData.city = userData.city ? userData.city : "";
    userData.neighborhood = userData.neighborhood ? userData.neighborhood : "";
    userData.street = userData.street ? userData.street : "";
    userData.landLine = userData.landLine ? userData.landLine : "";
    userData.gender = userData.gender ? userData.gender : "";
    userData.status = userData.status ? userData.status : "";
    userData.motive = userData.motive ? userData.motive : "";
    userData.country = userData.country ? userData.country : "";
    return userData;
  };

  useEffect(() => {
    const unregisterAuthObservable = firebase
      .auth()
      .onAuthStateChanged(async (user) => {
        if (user) {
          let userData = await firestore.getById(
            firestore.COLLECTIONS.USERS,
            user.uid
          );
          userData = mergeUserData(user, userData);
          setUser(userData);
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
        deleteAccount: async () => {
          await deleteUserOpportunities();
        },
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};
