import { useState, useEffect } from "react";
import RestaurantCard, { withPromotedLabel } from "./RestaurantCard";
import { RESTAURANTLIST_URL } from "../utils/constant";
import Shimmer from "./Shimmer";
import { Link } from "react-router-dom";
import useOnlineStatus from "../utils/useOnlineStatus";

const Body = () => {
  // Local State Variables
  const [listOfRestaurants, setListOfRestaurants] = useState([]);
  const [filteredRestaurants, setFilteredRestaurants] = useState([]);
  const [searchText, setSearchText] = useState("");

  const RestaurantCardPromoted = withPromotedLabel(RestaurantCard);

  useEffect(() => {
    fetchData();
  }, []);

  // Function to fetch data
  const fetchData = async () => {
    try {
      const data = await fetch(RESTAURANTLIST_URL);
      const json = await data.json();

      setListOfRestaurants(json);
      setFilteredRestaurants(json);
    } catch (error) {
      console.error("Error fetching data: ", error);
    }
  };

  const onlineStatus = useOnlineStatus();

  if (onlineStatus === false)
    return (
      <h1 className="text-center text-red-600 text-2xl">
        Looks Like You Are Offline..!! Please Check Your Internet Connection
      </h1>
    );

  const handleSearch = () => {
    const filteredList = listOfRestaurants.filter((res) =>
      res.name.toLowerCase().includes(searchText.toLowerCase())
    );
    setFilteredRestaurants(filteredList);
  };

  const handleTopRatedFilter = () => {
    const filteredList = listOfRestaurants.filter(
      (res) => res.avgRating > 4
    );
    setFilteredRestaurants(filteredList);
  };

  return filteredRestaurants.length === 0 ? (
    <Shimmer />
  ) : (
    <div className="body bg-gray-100">
      {/* Search and Filter Section */}
      <div className="flex justify-between items-center py-4 px-6 bg-gray-100">
        <div className="search flex items-center space-x-4">
          <input
            type="text"
            className="border border-gray-400 px-4 py-2 rounded-lg"
            placeholder="Search restaurants..."
            value={searchText}
            onChange={(e) => {
              setSearchText(e.target.value);
            }}
          />
          <button
            className="bg-orange-600 text-white px-4 py-2 rounded-lg hover:bg-orange-400"
            onClick={handleSearch}
          >
            Search
          </button>
        </div>

        <button
          className="bg-orange-600 text-white px-4 py-2 rounded-lg hover:bg-orange-400"
          onClick={handleTopRatedFilter}
        >
          Top Rated Restaurants
        </button>
      </div>

      {/* Restaurant Cards Section */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 p-6">
        {filteredRestaurants.map((restaurant) => (
          <Link
            key={restaurant.id}
            to={"/restaurant/" + restaurant.id}
            className="block transform transition duration-300 hover:scale-105"
          >
            {restaurant.promoted ? (
              <RestaurantCardPromoted
                key={restaurant.id}
                resData={restaurant}
              />
            ) : (
              <RestaurantCard key={restaurant.id} resData={restaurant} />
            )}
          </Link>
        ))}
      </div>
    </div>
  );
};

export default Body;
