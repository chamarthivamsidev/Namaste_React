import React, { useState, useEffect } from "react";
import { MENU_URL } from "./constants";

// Responsible to fetch the restaurant menu data
const useRestaurantMenu = (resId) => {
  const [resInfo, setResInfo] = useState(null);

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    const data = await fetch(MENU_URL + resId);
    const json = await data.json();
    console.log(json, "json");
    setResInfo(json.data);
  };

  return resInfo;
};

export default useRestaurantMenu;
