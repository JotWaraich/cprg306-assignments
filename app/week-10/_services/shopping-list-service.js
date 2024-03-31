import { db } from "../_uttils/firebase";
import { collection, getDocs, addDoc, query } from "firebase/firestore";

export async function getItems(userId) {
  const items = [];
  const q = query(collection(db, `users/${userId}/items`));
  const querySnapshot = await getDocs(q);
  querySnapshot.forEach((doc) => {
    items.push(doc.data());
    console.log(doc.id, " => ", doc.data());
  });

  return items;
}

export async function addItem(userId, item) {
  const docRef = await addDoc(collection(db, `users/${userId}/items`), {
    id: item.id,
    name: item.name,
    category: item.category,
    quantity: item.quantity,
  });
  console.log("Item is created with ID: ", docRef.id);
}
