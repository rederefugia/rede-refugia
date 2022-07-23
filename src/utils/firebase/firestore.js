import {
  collection,
  query,
  where,
  getDocs,
  doc,
  setDoc,
  getDoc,
  updateDoc,
  deleteDoc,
  documentId,
  getFirestore,
} from "firebase/firestore";
import { v4 as uuidv4 } from "uuid";

import { app } from "./firebase";

const COLLECTIONS = {
  USERS: "users",
  OPPORTUNITIES: "opportunities",
};

const filter = (parameterName, condition, parameterValue, byId = false) => {
  return where(byId ? documentId() : parameterName, condition, parameterValue);
};

async function find(collectionName) {
  const ref = collection(getFirestore(app), collectionName);
  let args = Array.prototype.slice
    .call(arguments, 1)
    .filter((value) => value != null || value != undefined);
  const q = args.length > 0 ? query(ref, ...args) : query(ref);
  const snapshot = await getDocs(q);
  let data = [];
  snapshot.forEach((doc) => data.push({ id: doc.id, ...doc.data() }));
  return data;
}

const createWithId = async (collectionName, id, data) => {
  if (id == undefined || id == null) id = uuidv4();
  const ref = doc(getFirestore(app), collectionName, id);
  await setDoc(ref, data);
};

const getById = async (collectionName, id) => {
  const ref = doc(getFirestore(app), collectionName, id);
  const snapshot = await getDoc(ref);
  return snapshot.data();
};

const updateById = async (collectionName, id, data) => {
  const ref = doc(getFirestore(app), collectionName, id);
  await updateDoc(ref, data);
};

const deleteById = async (collectionName, id) => {
  const ref = doc(getFirestore(app), collectionName, id);
  await deleteDoc(ref);
};

export default {
  find,
  createWithId,
  getById,
  updateById,
  deleteById,
  filter,
  COLLECTIONS,
};
