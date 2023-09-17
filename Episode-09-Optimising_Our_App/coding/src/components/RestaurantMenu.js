import React from "react";
import Shimmer from "./Shimmer";
import { useParams } from "react-router-dom";
import { CDN_URL } from "../utils/constants";
import useRestaurantMenu from "../utils/useRestaurantMenu";

function RestaurantMenu() {
  const { resId } = useParams();
  const resInfo = useRestaurantMenu(resId);
  if (resInfo === null) {
    return <Shimmer />;
  }

  const { name, cuisines, costForTwoMessage } =
    resInfo?.cards[0]?.card?.card?.info;

  const { itemCards } =
    resInfo?.cards[2]?.groupedCard?.cardGroupMap?.REGULAR?.cards[2]?.card?.card;

  return (
    <div className="menu">
      <h1>{name}</h1>
      <p>
        {cuisines.join(", ")} - {costForTwoMessage}
      </p>
      <h2>Menu</h2>
      <div className="restro-container">
        {itemCards?.map((item, index) => (
          <div className="restro-card" key={index}>
            <img
              className="restro-logo"
              src={CDN_URL + item?.card?.info?.imageId}
            />
            <h3>
              {item?.card?.info?.name} - Rs.
              {item?.card?.info?.price / 100 ||
                item?.card?.info?.defaultPrice / 100}
            </h3>
            <h4>{item?.card?.info?.description}</h4>
          </div>
        ))}
      </div>
    </div>
  );
}

export default RestaurantMenu;
