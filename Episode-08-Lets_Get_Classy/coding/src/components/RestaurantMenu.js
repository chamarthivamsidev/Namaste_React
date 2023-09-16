import React, { useEffect, useState } from "react";
import Shimmer from "./Shimmer";
import { useParams } from "react-router-dom";
import { MENU_URL, CDN_URL } from "../utils/constants";

function RestaurantMenu() {
  const [resInfo, setResInfo] = useState(null);
  const { resId } = useParams();

  console.log("resId", resId);

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    const data = await fetch(MENU_URL + resId);
    const json = await data.json();
    console.log(json, "json");

    setResInfo(json.data);
  };

  if (resInfo === null) {
    return <Shimmer />;
  }

  const { name, cuisines, costForTwoMessage } =
    resInfo?.cards[0]?.card?.card?.info;

  const { itemCards } =
    resInfo?.cards[2]?.groupedCard?.cardGroupMap?.REGULAR?.cards[2]?.card?.card;

  console.log("itemCards", itemCards);
  return (
    <div className="menu">
      <h1>{name}</h1>
      <p>
        {cuisines.join(", ")} - {costForTwoMessage}
      </p>
      <h2>Menu</h2>
      <div className="restro-container">
        {itemCards?.map((item, index) => (
          <div className="restro-card">
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
