import firebase_app from "../config";
import { getFirestore, doc, getDoc } from "firebase/firestore";

const db = getFirestore(firebase_app);
export const getOneData = async (id) => {
  let docRef = doc(db, "posts", id);

  try {
    const docSnapshot = await getDoc(docRef);

    if (docSnapshot.exists()) {
      const documentData = docSnapshot.data();
      console.log("Document data:", documentData);
      return documentData;
    } else {
      console.log("Document does not exist");
      return null;
    }
  } catch (error) {
    console.error("Error getting document:", error);
    return null;
  }
};
