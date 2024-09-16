import { MENU_API_URL } from "../utils/constant";
import { useState, useEffect } from "react";

const useRestaurantMenu = (id) => {
  const [resInfo, setResinfo] = useState([]);

  useEffect(() => {
    fetchMenu();
  }, [id]);

  const fetchMenu = async () => {
    const data = await fetch(MENU_API_URL);
    const json = await data.json();

    const filterdata = json?.filter((res) => res?.restaurantId === id); // Filter by restaurant ID
    setResinfo(filterdata);
  };

  return resInfo;
};

export default useRestaurantMenu;
