import RestaurantCard from "./RestaurantCard";
import { useState, useEffect } from "react";
import Shimmer from "./Shimmer";
import {Link} from "react-router-dom"
const Body = () => {
  const [listofRes, setResList] = useState([]);
  const [filteredListofRes, setFilteredResList] = useState([]);

  const [searchText, setSearchText] = useState("");

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    const data = await fetch(
      "https://www.swiggy.com/dapi/restaurants/list/v5?lat=12.9352403&lng=77.624532&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING"
    );
    const json = await data?.json();
    console.log(json);
    setResList(
      json?.data?.cards[4]?.card?.card?.gridElements?.infoWithStyle?.restaurants
    );
    setFilteredResList( json?.data?.cards[4]?.card?.card?.gridElements?.infoWithStyle?.restaurants)
    // console.log(json?.data?.cards[4]?.card?.card?.gridElements?.infoWithStyle?.restaurants);
  };

  return listofRes.length === 0 ? (
    <Shimmer />
  ) : (
    <div className="body">
      <div className="filter">
        <div className="search">
          <input
            type="text"
            className="search-box"
            value={searchText}
            onChange={(e) => {
              setSearchText(e.target.value);
            }}
          ></input>
          <button
            onClick={() => {
              console.log(searchText);
              const filteredRes = listofRes.filter((res) => res.info.name.toLowerCase().includes(searchText.toLowerCase()));
              setFilteredResList(filteredRes)
            }}
          >
            Search
          </button>
        </div>
        <button
          className="filter-btn"
          onClick={() => {
            const filteredList = listofRes.filter(
              (item) => item.info.avgRating > 4.4
            );
            setResList(filteredList);
          }}
        >
          Top rated restaurant
        </button>
      </div>
      {console.log("flr",filteredListofRes)}
      <div className="res-container">
        {filteredListofRes.map((restaurant) => (
          <Link key={restaurant.info.id} to={`/restaurants/${restaurant.info.id}`}><RestaurantCard key={restaurant.info.id} resData={restaurant} /></Link>
        ))}
      </div>
    </div>
  );
};

export default Body;
