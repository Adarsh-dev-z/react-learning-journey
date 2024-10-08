import { useState, useEffect } from "react";
import Shimmer from "./Shimmer";
import { useParams } from "react-router-dom";
import { MENU_API } from "../utils/constants";
import useRestaurantMenu from "../utils/useRestaurantMenu";
import RestaurantCategory from "./RestaurantCategory";

const RestaurantMenu = () => {
  const { resId } = useParams();
  const dummy = "dummy";
  const resInfo = useRestaurantMenu(resId);

  const [showIndex, setShowIndex] = useState(null);

  if (resInfo === null) {
    return <Shimmer />;
  }

  const { name, cuisines, costForTwoMessage } =
    resInfo?.data?.cards[2]?.card?.card?.info;
  const { itemCards } =
    resInfo?.data?.cards?.[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards?.[2]
      ?.card?.card;
  // console.log("item cards",itemCards);
  console.log(
    "all items in a restaurant",
    resInfo?.data?.cards?.[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards
  );

  const categories =
    resInfo?.data?.cards?.[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards.filter(
      (c) =>
        c?.card?.card?.["@type"] ===
        "type.googleapis.com/swiggy.presentation.food.v2.ItemCategory"
    );
  // console.log("categories", categories);
  return (
    <div className="text-center">
      <h1 className="text-2xl font-bold m-4">{name}</h1>
      <h4 className="font-bold text-lg">
        {cuisines?.join(", ")} - {costForTwoMessage}
      </h4>
      {categories.map((category,index) => (
        <RestaurantCategory
          key={category.card.card.tiltle}
          data={category?.card?.card}
          showItems={index === showIndex?true:false}
          setShowIndex = {()=>setShowIndex(index)}
          dummy ={dummy}
        />
      ))}
    </div>
  );
};

export default RestaurantMenu;
