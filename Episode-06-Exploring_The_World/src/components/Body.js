import RestaurantCard from "./RestaurantCard";
import { useState, useEffect } from "react";
import Shimmer from "./Shimmer";

const Body = () => {
  // Local state
  const [listOfRestaurants, setListOfRestaurants] = useState([]);
  const [filteredRestaurants, setFilteredRestaurants] = useState([]);
  const [searchText, setSearchText] = useState("");

  useEffect(() => {
    console.log("useEffect called");
    fetchData();
  }, []);

  const fetchData = async () => {
    const data = await fetch(
      "https://www.swiggy.com/dapi/restaurants/list/v5?lat=12.9351929&lng=77.62448069999999&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING"
    );
    const json = await data.json();

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

  return (
    <div className="body">
      <div className="filter">
        <div className="search">
          <input
            type="text"
            className="search-box"
            value={searchText}
            onChange={(e) => {
              setSearchText(e.target.value);
              if (e.target.value === "") {
                setFilteredRestaurants(listOfRestaurants);
              }
            }}
          />
          <button
            className="search-btn"
            onClick={() => {
              console.log(searchText);

              const filteredList = listOfRestaurants.filter((item) =>
                item.data.name.toLowerCase().includes(searchText.toLowerCase())
              );
              setFilteredRestaurants(filteredList);
            }}
          >
            Search
          </button>
        </div>
        <button
          className="filter-btn"
          onClick={() => {
            filteredList = listOfRestaurants?.filter(
              (item) => item.data.avgRating > 4
            );
            sortedList = filteredList.sort(
              (a, b) => b.data.avgRating - a.data.avgRating
            );
            setListOfRestaurants(sortedList);
            console.log("filteredList :>> ", filteredList);
          }}
        >
          Top Rated Restaurants
        </button>
      </div>

      {listOfRestaurants?.length === 0 ? (
        <Shimmer />
      ) : (
        <div className="restro-container">
          {filteredRestaurants?.map((item) => (
            <RestaurantCard resData={item} key={item.data.id} />
          ))}
        </div>
      )}
    </div>
  );
};

export default Body;
