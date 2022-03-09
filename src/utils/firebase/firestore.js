import { collection, query, where, getDocs, doc, setDoc } from "firebase/firestore";

import firebase from "./firebase";

const find = async (
  collectionName,
  parameterName,
  condition,
  parameterValue
) => {
  const ref = collection(firebase.firestore(), collectionName);
  const q = query(ref, where(parameterName, condition, parameterValue));
  const snapshot = await getDocs(q);
  let data = [];
  snapshot.forEach((doc) => data.push(doc.data()));
  return data;
};

const createWithId = async (collectionName, id, data) => {
  const ref = doc(firebase.firestore(), collectionName, id);
  await setDoc(ref, data);
};

export default { find, createWithId };
