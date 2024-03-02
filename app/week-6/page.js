"use client";

import List from "./items.json";
import ItemList from "./item-list";
import Newitem from "./new-item";
import { useState } from "react";

const Page = () => {
  const [data, setData] = useState(List);
  const handleSubmit = (item) => {
    setData([...data, item]);
  };
  return (
    <div className="flex justify-center items-center flex-col gap-4 bg-[#020617] pb-20">
      <h1 className="text-5xl my-4">Shopping List</h1>
      <Newitem Submit={handleSubmit} />
      <ItemList List={data} />
    </div>
  );
};

export default Page;
