import { useParams } from "react-router-dom";
import Shimmer from "./Shimmer";
import useRestaurantMenu from "../utils/useRestaurantMenu";

const RestaurantMenu = () => {
  const { id } = useParams(); // Capture restaurant ID from URL

  const resInfo = useRestaurantMenu(id);

  if (!resInfo?.length) return <Shimmer />;

  return (
    <div className="p-10 max-w-4xl mx-auto bg-gray-100">
      <div className="bg-white shadow-lg rounded-lg overflow-hidden mb-6">
        <div className="p-6">
          <h1 className="text-3xl font-bold text-gray-800 mb-2">{resInfo[0]?.name}</h1>
          <p className="text-lg text-gray-600 mb-4">Cost for Two: ₹{resInfo[0]?.costForTwo / 100}</p>
          <h2 className="text-2xl font-semibold text-gray-800 mb-4">Menu</h2>
          <div className="space-y-4">
            {resInfo[0]?.menu.map((dish) => (
              <div key={dish.itemNumber} className="bg-gray-100 p-4 rounded-lg shadow-sm">
                <p className="text-lg font-medium text-gray-700">{dish.dishName}</p>
                <p className="text-md text-gray-500">₹{dish.price}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default RestaurantMenu;
