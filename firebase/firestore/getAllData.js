import { getFirestore, collection, getDocs } from "firebase/firestore";
import firebase_app from "../config";

// Obtain Firestore instance
const db = getFirestore(firebase_app);

export default async function getAllData() {
  let documentsData;
  // Specify the collection from which you want to fetch documents
  const collectionRef = collection(db, "posts");

  // Fetch all documents in the collection
  try {
    const querySnapshot = await getDocs(collectionRef);

    documentsData = querySnapshot.docs.map((doc) => ({
      id: doc.id,
      data: doc.data(),
    }));
  } catch (error) {
    console.error("Error fetching documents: ", error);
  }
  return documentsData;
}
