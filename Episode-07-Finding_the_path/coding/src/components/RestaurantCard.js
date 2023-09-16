import { CDN_URL } from "../utils/constants";
const RestaurantCard = ({ resData }) => {
  const { name, cuisines, avgRating, deliveryTime, cloudinaryImageId } =
    resData?.data;
  return (
    <div className="restro-card">
      <img className="restro-logo" src={CDN_URL + cloudinaryImageId} />
      <h3>{name}</h3>
      <h4>{cuisines.join(" , ")}</h4>
      <h4>{avgRating} stars</h4>
      <h4>{deliveryTime} Minutes</h4>
    </div>
  );
};

export default RestaurantCard;
