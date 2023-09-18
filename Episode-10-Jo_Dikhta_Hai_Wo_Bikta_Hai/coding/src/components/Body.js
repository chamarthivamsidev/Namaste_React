import RestaurantCard from "./RestaurantCard";
import { useState, useEffect } from "react";
import Shimmer from "./Shimmer";
import { Link } from "react-router-dom";
import useOnlineStatus from "../utils/useOnlineStatus";

const Body = () => {
  // Local state
  const [listOfRestaurants, setListOfRestaurants] = useState([]);
  const [filteredRestaurants, setFilteredRestaurants] = useState([]);
  const [searchText, setSearchText] = useState("");

  const onlineStatus = useOnlineStatus();

  useEffect(() => {
    console.log("useEffect called");
    fetchData();
  }, []);

  const fetchData = async () => {
    const data = await fetch(
      "https://www.swiggy.com/dapi/restaurants/list/v5?lat=12.9351929&lng=77.62448069999999&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING"
    );
    const json = await data.json();
    console.log(json, "json");

    let temp =
      json?.data?.cards[2]?.card?.card?.gridElements?.infoWithStyle
        ?.restaurants;
    let filteredData = temp?.map((item) => {
      return { data: item.info };
    });
    console.log(temp, "temp");
    setListOfRestaurants(filteredData);
    setFilteredRestaurants(filteredData);
  };

  if (onlineStatus === false) {
    return (
      <div>
        Looks like you are offline, Please check your internet connection
      </div>
    );
  }

  return (
    <div className="body">
      {listOfRestaurants?.length === 0 ? (
        <Shimmer />
      ) : (
        <div>
          <div className="flex flex-col justify-center items-center">
            <div className="p-4 mt-6">
              <input
                type="text"
                className="border border-solid border-black mr-4 rounded-md pl-2"
                value={searchText}
                onChange={(e) => {
                  setSearchText(e.target.value);
                  if (e.target.value === "") {
                    setFilteredRestaurants(listOfRestaurants);
                  }
                }}
              />
              <button
                className="bg-blue-500 p-[1.5px] pl-2 pr-2 rounded-md text-white"
                onClick={() => {
                  console.log(searchText);

                  const filteredList = listOfRestaurants.filter((item) =>
                    item.data.name
                      .toLowerCase()
                      .includes(searchText.toLowerCase())
                  );
                  setFilteredRestaurants(filteredList);
                }}
              >
                Search
              </button>
            </div>
            <button
              className="bg-blue-500 p-[1.5px] pl-2 pr-2 rounded-md text-white"
              onClick={() => {
                filteredList = listOfRestaurants?.filter(
                  (item) => item.data.avgRating > 4
                );
                sortedList = filteredList.sort(
                  (a, b) => b.data.avgRating - a.data.avgRating
                );
                setFilteredRestaurants(sortedList);
                console.log("filteredList :>> ", filteredList);
              }}
            >
              Top Rated Restaurants
            </button>
          </div>
          <div className="flex flex-wrap gap-10 justify-center mt-8">
            {filteredRestaurants?.map((item) => (
              <Link
                to={"/restaurants/" + item.data.id}
                key={item.data.id}
                className="menu_link"
              >
                <RestaurantCard resData={item} />
              </Link>
            ))}
          </div>
        </div>
      )}
    </div>
  );
};

export default Body;
