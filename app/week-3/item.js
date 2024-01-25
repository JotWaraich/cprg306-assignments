import React from "react";

const Item = ({ name, quantity, category }) => {
  return (
    <div className="flex flex-col border rounded-lg p-4 gap-4 px-44 bg-blue-950">
      <h3>{name}</h3>
      <p>Quantity: {quantity}</p>
      <p>Category: {category}</p>
    </div>
  );
};

export default Item;
