import { useState, useEffect } from "react";
import { MENU_API_URL } from "../utils/constant";
import { useParams } from "react-router-dom";

const RestaurantMenu = () => {
  const [resInfo, setResinfo] = useState([]);
  const { id } = useParams(); // Capture restaurant ID from URL

  useEffect(() => {
    fetchMenu();
  }, [id]);

  const fetchMenu = async () => {
    const data = await fetch(MENU_API_URL);
    const json = await data.json();

    const filterdata = json?.filter((res) => res?.restaurantId === id); // Filter by restaurant ID
    setResinfo(filterdata);
  };

  if (!resInfo.length) return <div>Loading...</div>;

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
