import React from "react";

const Item = ({ name, quantity, category }) => {
  return (
    <div className="flex flex-col px-32 bg-[#0f172a] items-center">
      <h1 className="text-xl">{name}</h1>
      <p>
        Buy {quantity} in {category}
      </p>
    </div>
  );
};

export default Item;
