import {
  collection,
  query,
  where,
  getDocs,
  doc,
  setDoc,
  getDoc,
  updateDoc,
} from "firebase/firestore";
import { v4 as uuidv4 } from "uuid";

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
  if (id == undefined || id == null) id = uuidv4();
  const ref = doc(firebase.firestore(), collectionName, id);
  await setDoc(ref, data);
};

const getById = async (collectionName, id) => {
  const ref = doc(firebase.firestore(), collectionName, id);
  const snapshot = await getDoc(ref);
  return snapshot.data();
};

const updateById = async (collectionName, id, data) => {
  const ref = doc(firebase.firestore(), collectionName, id);
  await updateDoc(ref, data);
};

export default { find, createWithId, getById, updateById };
