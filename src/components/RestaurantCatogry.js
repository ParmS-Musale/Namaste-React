import { useState } from "react";
import ItemList from "./ItemList";

const RestaurantCategory = ({ data }) => {

    const [showItem , setShowItem ] = useState(false);

    const handleOnClick = () => {
        setShowItem(!showItem);
        
    }
  return (
    <div className="bg-white shadow-md rounded-lg p-4 my-4 max-w-3xl mx-auto border border-gray-200">
      {/* Header */}
      <div className="flex justify-between items-center border-b pb-2 mb-4" onClick={handleOnClick}>
        <span className="text-lg font-bold text-gray-800 cursor-pointer" >
          {data.title} ({data?.itemCards?.length})
        </span>
        <span className="cursor-pointer text-gray-600 hover:text-gray-800 transition duration-300">
          ⬇️
        </span>
      </div>
      {/* Item List */}
      {showItem && <ItemList items={data.itemCards} />}
    </div>
  );
};

export default RestaurantCategory;
