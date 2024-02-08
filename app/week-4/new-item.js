"use client";

import React, { useState } from "react";

const Newitem = () => {
  const [name, setName] = useState("");
  const [quantity, setQuantity] = useState(1);
  const [category, setCategory] = useState("product");

  const handleSubmit = (e) => {
    e.preventDefault();
    alert(`Name: ${name} Quantity: ${quantity} Catagory: ${category}`);
    setName("");
    setQuantity(1);
    setCategory("product");
  };
  const values = (e) => {
    if (e.target.value > 99) {
      alert("Please enter a number less than 100");
      setQuantity(99);
    }
  };

  return (
    <div className="mt-5 bg-gradient-to-t">
      <form
        onSubmit={handleSubmit}
        className="flex justify-center items-center flex-col gap-4"
      >
        <div className="border-gray-700 px-16 py-6 rounded-md border-4 bg-[#0f172a]">
          <div className="min-w-96 mb-5">
            <input
              type="text"
              placeholder="Name"
              className="text-white w-full rounded-md p-2 text-sm ring-1 ring-slate-900/10 shadow-sm  focus:outline-none focus:ring-2 focus:ring-pink-500 caret-pink-500 dark:bg-slate-800 dark:ring-0 dark:highlight-white/5 dark:focus:ring-2 dark:focus:ring-pink-500 dark:focus:bg-slate-900f"
              value={name}
              onChange={(e) => setName(e.target.value)}
              required
            />
          </div>
          <div className="flex flex-row justify-between min-w-96 mb-5">
            <div className="flex justify-between">
              <input
                type="number"
                placeholder="Quantity"
                className="text-white w-20 rounded-md p-2 text-sm ring-1 ring-slate-900/10 shadow-sm  focus:outline-none focus:ring-2 focus:ring-pink-500 caret-pink-500 dark:bg-slate-800 dark:ring-0 dark:highlight-white/5 dark:focus:ring-2 dark:focus:ring-pink-500 dark:focus:bg-slate-900f"
                value={quantity}
                onChange={(e) => setQuantity(e.target.value) || values(e)}
                max={99}
                required
              />
            </div>
            <div className="">
              <select
                value={category}
                onChange={(e) => setCategory(e.target.value)}
                className="text-white  rounded-md p-2 text-sm ring-1 ring-slate-900/10 shadow-sm  focus:outline-none focus:ring-2 focus:ring-pink-500 caret-pink-500 dark:bg-slate-800 dark:ring-0 dark:highlight-white/5 dark:focus:ring-2 dark:focus:ring-pink-500 dark:focus:bg-slate-900f"
              >
                <option value="category" disabled>
                  Category
                </option>
                <option value="product">Product</option>
                <option value="dairy">Dairy</option>
                <option value="bakery">Bakery</option>
                <option value="meat">Meat</option>
                <option value="frozenfood">Frozen Food</option>
                <option value="cannedfood">Canned Food</option>
                <option value="drygoods">Dry Goods</option>
                <option value="beverages">Beverages</option>
                <option value="snacks">Snacks</option>
                <option value="household">Household</option>
                <option value="other">Other</option>
              </select>
            </div>
          </div>
          <div className="flex justify-center min-w-96">
            <button
              type="submit"
              className="border rounded-md border-transparent bg-blue-600 p-2 w-full"
            >
              +
            </button>
          </div>
        </div>
      </form>
    </div>
  );
};

export default Newitem;
