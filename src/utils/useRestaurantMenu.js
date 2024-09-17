import { MENU_API_URL } from "../utils/constant";
import { useState, useEffect } from "react";

const useRestaurantMenu = (id) => {
  const [resInfo, setResinfo] = useState([]);

  useEffect(() => {
    fetchMenu();
  }, [id]);

  const fetchMenu = async () => {
    try {
      const response = await fetch(`https://www.swiggy.com/dapi/menu/pl?page-type=REGULAR_MENU&complete-menu=true&lat=18.61610&lng=73.72860&restaurantId=${id}&catalog_qa=undefined&submitAction=ENTER`);
      const data = await response.json(); // Corrected line

      console.log(data);
      console.log(data?.data?.cards);

      setResinfo(data);
    } catch (error) {
      console.error("Error fetching menu data:", error);
    }
  };

  return resInfo;
};

export default useRestaurantMenu;
