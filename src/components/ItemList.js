import { CDN_URL } from "../utils/constant";

const ItemList = ({ items }) => {
  console.log("items", items);
  return (
    <div className="max-w-3xl mx-auto">
      {items?.map((item) => (
        <div
          key={item?.card?.info?.id}
          className="p-4 m-2 border-b border-gray-300 flex justify-between items-center bg-white shadow-sm rounded-lg"
        >
          {/* Left Section: Item Info */}
          <div className="w-8/12">
            <div className="text-left py-2">
              <span className="text-lg font-semibold text-gray-900">
                {item?.card?.info?.name}
              </span>
              <span className="text-gray-900 ml-2 font-semibold">
                - ₹
                {(item?.card?.info?.price || item?.card?.info?.defaultPrice) /
                  100}
              </span>
            </div>
            <p className="text-sm text-gray-600">
              {item?.card?.info?.description}
            </p>
          </div>
          
          <div className="w-3/12 p-2 relative">
            <img
              src={CDN_URL + item?.card?.info?.imageId}
              alt={item?.card?.info?.name}
              className="w-full rounded-lg object-cover"
            />
            <div className="absolute bottom-2 right-2 ">
              <button className="bg-gray-600 text-white py-1 px-2 rounded hover:bg-orange-500 ">
                Add +
              </button>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default ItemList;
