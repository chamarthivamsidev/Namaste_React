import { CDN_URL } from "../utils/constants";
const RestaurantCard = ({ resData }) => {
  const { name, cuisines, avgRating, sla, cloudinaryImageId } = resData?.data;
  return (
    <div
      data-testid="resCard"
      className="w-72 h-[440px] rounded-lg bg-gray-300 p-4 "
    >
      <img
        className="w-[100%] h-60 rounded-sm"
        src={CDN_URL + cloudinaryImageId}
      />
      <h3>{name}</h3>
      <h4>{cuisines.join(" , ")}</h4>
      <h4>{avgRating} stars</h4>
      <h4>{sla.deliveryTime} Minutes</h4>
    </div>
  );
};

// Higher Order Component

// Which takes component as input and returns another component by enhancing few things

export const withPromotedLabel = (RestaurantCard) => {
  return (props) => {
    return (
      <div className="relative">
        <label className="absolute left-2 top-2 bg-black text-white p-2 rounded-md">
          Promoted
        </label>
        <RestaurantCard {...props} />
      </div>
    );
  };
};

export default RestaurantCard;
