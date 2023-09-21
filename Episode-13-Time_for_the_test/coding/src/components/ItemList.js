import React from "react";
import { CDN_URL } from "../utils/constants";
import { addItem } from "../utils/cartSlice";
import { useDispatch } from "react-redux";

const ItemList = ({ items }) => {
  const dispatch = useDispatch();

  const handleAddItem = (item) => {
    dispatch(addItem(item));
  };
  return (
    <div>
      {items.map((item, index) => (
        <div
          key={index}
          className="p-2 m-2  border-b-4 border-gray-200 flex justify-between "
          data-testid="foodItems"
        >
          <div className="w-[80%]">
            <p className="text-sm">
              {item?.card?.info?.itemAttribute?.vegClassifier === "VEG"
                ? "VEG 🟢"
                : "NONVEG 🔴"}{" "}
            </p>
            <p className="text-lg font-semibold">
              {item?.card?.info?.name} - ₹
              {item?.card?.info?.price / 100 ||
                item?.card?.info?.defaultPrice / 100}
            </p>
            {/* <p>₹{item?.card?.info?.price / 100}</p> */}
            <p className="text-xs mt-2">{item?.card?.info?.description}</p>
          </div>
          <div className="relative w-[20%] h-24 ml-12">
            <img
              className="w-28 h-20 rounded-md"
              src={CDN_URL + item?.card?.info?.imageId}
            />
            <div
              className="absolute bottom-4 left-6"
              onClick={() => {
                handleAddItem(item);
              }}
            >
              <button className=" bg-black px-2 rounded-md text-white">
                Add +
              </button>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default ItemList;
