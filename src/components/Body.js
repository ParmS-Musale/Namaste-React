import { useState, useEffect } from "react";
import RestaurantCard from "./RestaurantCard";
import { RESTAURANTLIST_URL } from "../utils/constant";
import Shimmer from "./Shimmer";
import { Link } from "react-router-dom";

const Body = () => {
  // Local State Variable - Super powerful variable
  const [listOfRestaurants, setListOfRestaurants] = useState([]);
  const [filteredRestaurants, setFilteredRestaurants] = useState([]);

  const [searchText, setSearchText] = useState("");

  useEffect(() => {
    fetchData();
  }, []);

  // Function to fetch data
  const fetchData = async () => {
    try {
      const data = await fetch(RESTAURANTLIST_URL);

      const json = await data.json();
      console.log(json);

      setListOfRestaurants(json);
      setFilteredRestaurants(json);
    } catch (error) {
      console.error("Error fetching data: ", error);
    }
  };

  return listOfRestaurants.length === 0 ? (
    <Shimmer />
  ) : (
    <div className="body">
      <div className="filter">
        <div className="search">
          <input
            type="text"
            className="search-box"
            value={searchText}
            onChange={(e) => {
              setSearchText(e.target.value);
            }}
          />
          <button
            onClick={() => {
              console.log(searchText);
              const filteredRestaurant = listOfRestaurants?.filter((res) =>
                res?.name.toLowerCase().includes(searchText.toLowerCase())
              );
              setListOfRestaurants(filteredRestaurant);
            }}
          >
            Search
          </button>
        </div>
        <button
          className="filter-btn"
          onClick={() => {
            const filteredList = listOfRestaurants?.filter(
              (res) => res?.avgRating > 4
            );
            setListOfRestaurants(filteredList);
          }}
        >
          Top Rated Restaurant
        </button>
      </div>
      <div className="res-container">
        {filteredRestaurants?.map((restaurant) => (
          <Link key={restaurant?.id} to={"/restaurant/" + restaurant?.id}>
            <RestaurantCard key={restaurant?.id} resData={restaurant} />
          </Link>
        ))}
      </div>
    </div>
  );
};

export default Body;
