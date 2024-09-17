import { useParams } from "react-router-dom";
import Shimmer from "./Shimmer";
import useRestaurantMenu from "../utils/useRestaurantMenu";
import RestaurantCard from "./RestaurantCard";
import RestaurantCatogry from "./RestaurantCatogry";

const RestaurantMenu = () => {
  const { id } = useParams(); // Capture restaurant ID from URL

  const resInfo = useRestaurantMenu(id);

  if (!resInfo.data?.cards?.length) return <Shimmer />;

  const data = resInfo?.data?.cards[2]?.card?.card?.info;
  console.log("Menu", data);
  const filterData =
    resInfo?.data?.cards[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards?.filter(
      (c) =>
        c.card?.card?.["@type"] ==
        "type.googleapis.com/swiggy.presentation.food.v2.ItemCategory"
    );

  console.log("filter", filterData);

  return (
    <div className="p-10 max-w-4xl mx-auto bg-gray-100">
      <div className="bg-white shadow-lg rounded-lg overflow-hidden mb-6">
        <div className="p-6">
          <h1 className="text-3xl font-bold text-gray-800 mb-2">
            {data?.name}
          </h1>
          <p className="text-lg text-gray-600 mb-1">{data?.locality}</p>
          <p className="text-lg text-gray-600 mb-4">
            {data?.costForTwoMessage}
          </p>

          {filterData?.map((category) => {
            return <RestaurantCatogry data={category?.card?.card} />;
          })}
        </div>
      </div>
    </div>
  );
};

export default RestaurantMenu;
