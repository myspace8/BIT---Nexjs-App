import { getFirestore, collection, addDoc } from "firebase/firestore";
import firebase_app from "../config";

// Obtain Firestore instance
const db = getFirestore(firebase_app);
export default async function addToData(data) {
  let result = null;
  let error = null;
  const collectionRef = collection(db, "posts");

  try {
    const result = await addDoc(collectionRef, data);
    console.log("Document added with ID: ", result.id);
  } catch (e) {
    error = e;
  }
  return { result, error };
}
