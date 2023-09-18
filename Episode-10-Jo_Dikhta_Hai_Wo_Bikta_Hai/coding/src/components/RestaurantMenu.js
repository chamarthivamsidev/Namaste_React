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
      <div className="mt-10 bg-black text-white h-28 flex justify-center items-center flex-col">
        <h1 className="text-center text-xl">{name}</h1>
        <p className="text-center text-xl">
          {cuisines.join(", ")} - {costForTwoMessage}
        </p>
      </div>

      <div className="flex flex-wrap gap-10 justify-center mt-8 mb-10 ">
        {itemCards?.map((item, index) => (
          <div
            className="w-72 h-[440px] rounded-lg bg-gray-300 p-4"
            key={index}
          >
            <img
              className="w-[100%] h-60 rounded-md"
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
