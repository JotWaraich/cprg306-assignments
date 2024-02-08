import Item from "./item";
// import {item1, item2, item3, item4, item5, item6, item7, item8, item9, item10, item11, item12} from "./item-list";
import object from "./item-list";

const page = () => {
  return (
    <div className="flex justify-center items-center flex-col gap-4">
      <h1 className="text-5xl my-4">Shopping List</h1>
      <div className="flex flex-col gap-4">
        {object.map((item, index) => {
          return (
            <Item
              key={index}
              name={item.name}
              quantity={item.quantity}
              category={item.category}
            />
          );
        })}
      </div>
    </div>
  );
};

export default page;
