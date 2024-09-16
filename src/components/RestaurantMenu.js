import { useParams } from "react-router-dom";
import Shimmer from "./Shimmer";
import useRestaurantMenu from "../utils/useRestaurantMenu";

const RestaurantMenu = () => {
  const { id } = useParams(); // Capture restaurant ID from URL

  const resInfo = useRestaurantMenu(id);

  if (!resInfo?.length) return <Shimmer />;

  return (
    <div>
      <h1>{resInfo[0]?.name}</h1>
      <p>Cost for Two: {resInfo[0]?.costForTwo}</p>
      <h2>Menu</h2>

      {resInfo[0]?.menu.map((dish) => (
        <div key={dish.itemNumber}>
          <p>
            {dish.dishName} = {dish.price}
          </p>
        </div>
      ))}
    </div>
  );
};

export default RestaurantMenu;
