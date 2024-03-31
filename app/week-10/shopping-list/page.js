"use client";

import { useEffect, useState } from "react";
import ItemList from "./item-list";
import NewItem from "./new-item";
import MealIdeas from "./meal-ideas";
import { getItems, addItem } from "../_services/shopping-list-service";

export default function Page({ signOut, user }) {
  const [item, setItemList] = useState([]);
  const [selectedItemName, setSelectedItemName] = useState(null);

  function handleAddItem(newItem) {
    setItemList([...item, newItem]);
    addItem(user.uid, newItem);
  }

  const selectItem = (itemName) => {
    if (typeof itemName === "string") {
      const cleanedItemName = itemName
        .replace(
          /,.*|[\u2700-\u27BF]|[\uE000-\uF8FF]|�[�-�]|�[�-�]|[\u2011-\u26FF]|�[�-�]|\p{Emoji}/gu,
          ""
        )
        .trim();
      setSelectedItemName(cleanedItemName);
    } else {
      console.error("Wrong item name:", itemName);
    }
  };

  async function loadItems() {
    setItemList(await getItems(user.uid));
  }

  useEffect(() => {
    loadItems();
    console.log(item);
  }, []);

  return (
    <main>
      <h1 className="text-3xl font-bold m-2">Shopping List</h1>
      <div className="flex">
        <div className="flex-1 max-w-sm m-2">
          <NewItem onAddItem={handleAddItem} />
          <ItemList items={item} onItemSelect={selectItem} />
        </div>
        <div className="flex-1 max-w-sm m-2 p-3">
          <h3 className="text-xl font-bold">Meal Ideas</h3>
          <MealIdeas ingredient={selectedItemName} />
        </div>
        <div>
          <button
            onClick={signOut}
            className="fixed top-2 right-2 rounded-lg bg-blue-500 p-3"
          >
            Sign out
          </button>
        </div>
      </div>
    </main>
  );
}
