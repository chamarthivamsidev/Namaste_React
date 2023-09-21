import React, { useState } from "react";
import Shimmer from "./Shimmer";
import { useParams } from "react-router-dom";
import { CDN_URL } from "../utils/constants";
import useRestaurantMenu from "../utils/useRestaurantMenu";
import RestaurantCategory from "./RestaurantCategory";

function RestaurantMenu() {
  const [showItem, setShowItem] = useState("");
  const handleClick = (title) => {
    showItem === title ? setShowItem("") : setShowItem(title);
  };
  const { resId } = useParams();
  const resInfo = useRestaurantMenu(resId);
  if (resInfo === null) {
    return <Shimmer />;
  }

  const { name, cuisines, costForTwoMessage } =
    resInfo?.cards[0]?.card?.card?.info;

  const { itemCards } =
    resInfo?.cards[2]?.groupedCard?.cardGroupMap?.REGULAR?.cards[2]?.card?.card;

  const categories =
    resInfo?.cards[2]?.groupedCard?.cardGroupMap?.REGULAR?.cards.filter(
      (c) =>
        c?.card?.card?.["@type"] ===
        "type.googleapis.com/swiggy.presentation.food.v2.ItemCategory"
    );

  console.log("categories", categories);

  return (
    <div className="menu">
      <div className="mt-10 bg-black text-white h-28 flex justify-center items-center flex-col mb-10">
        <h1 className="text-center text-3xl font-bold ">{name}</h1>
        <p className="text-center text-xl font-bold">
          {cuisines.join(", ")} - {costForTwoMessage}
        </p>
      </div>

      <div className="flex justify-center flex-col items-center">
        {categories.map((category, index) => (
          <RestaurantCategory
            key={category?.card?.card?.title}
            data={category?.card?.card}
            showItem={showItem === category?.card?.card?.title ? true : false}
            setShowItem={handleClick}
          />
        ))}
      </div>

      {/* <div className="flex flex-wrap gap-10 justify-center mt-8 mb-10 ">
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
      </div> */}
    </div>
  );
}

export default RestaurantMenu;
