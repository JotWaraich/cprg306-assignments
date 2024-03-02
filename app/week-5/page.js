import ItemList from "./item-list";

const page = () => {
  return (
    <div className="flex justify-center items-center flex-col gap-4 bg-[#020617] pb-20">
      <h1 className="text-5xl my-4">Shopping List</h1>
      <div className="flex flex-col gap-4">{<ItemList />}</div>
    </div>
  );
};

export default page;
