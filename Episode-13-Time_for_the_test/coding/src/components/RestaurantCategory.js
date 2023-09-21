import React, { useState } from "react";
import ItemList from "./ItemList";

const RestaurantCategory = ({ data, showItem, setShowItem }) => {
  return (
    <div className="w-1/2 p-4 rounded-md bg-gray-100 shadow-lg m-2">
      <div
        className="flex justify-between cursor-pointer"
        onClick={() => {
          setShowItem(data.title);
        }}
      >
        <span className="font-bold text-lg">
          {data.title} ({data?.itemCards?.length})
        </span>
        <span>{showItem ? "⬆️" : "⬇️"} </span>
      </div>
      {showItem && <ItemList items={data?.itemCards} />}
    </div>
  );
};

export default RestaurantCategory;
