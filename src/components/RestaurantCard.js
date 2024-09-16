import { CDN_URL } from "../utils/constant";

const RestaurantCard = (props) => {
    const { resData } = props;
  
    const {
      cloudinaryImageId,
      name,
      avgRating,
      cuisines,
      // costForTwo,
      deliveryTime,
    } = resData;
  
    return (
      <div className="bg-gray-100 shadow-lg rounded-lg overflow-hidden mb-6">
        <img
          className="w-full h-48 object-cover"
          alt="res-logo"
          src={CDN_URL + cloudinaryImageId}
        />
        <div className="p-4">
          <h3 className="text-xl font-semibold text-gray-800 mb-2">{name}</h3>
          <h4 className="text-md text-gray-600 mb-1">{cuisines.join(", ")}</h4>
          <h4 className="text-md text-gray-600 mb-1">{avgRating} stars</h4>
          {/* <h4 className="text-md text-gray-600 mb-1">{costForTwo / 100} for Two</h4> */}
          <h4 className="text-md text-gray-600">{deliveryTime} minutes </h4>
        </div>
      </div>
    );
};

export default RestaurantCard;
