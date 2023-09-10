import RestaurantCard from "./RestaurantCard";
import resList from "../utils/mockData";
import { useState } from "react";

const Body = () => {
  // Local state
  const [listOfRestaurants, setListOfRestaurants] = useState(resList);
  return (
    <div className="body">
      {/* <div className="search">Search</div> */}
      <div className="filter">
        <button
          className="filter-btn"
          onClick={() => {
            filteredList = listOfRestaurants?.filter(
              (item) => item.data.avgRating > 4
            );
            setListOfRestaurants(filteredList);
            console.log("filteredList :>> ", filteredList);
          }}
        >
          Top Rated Restaurants
        </button>
      </div>
      <div className="restro-container">
        {listOfRestaurants.map((item) => (
          <RestaurantCard resData={item} key={item.data.id} />
        ))}
      </div>
    </div>
  );
};

export default Body;
