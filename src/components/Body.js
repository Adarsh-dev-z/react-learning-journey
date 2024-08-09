import RestaurantCard from "./RestaurantCard";
import { useState, useEffect } from "react";
import Shimmer from "./Shimmer";
import {Link} from "react-router-dom"
import useOnlinStatus from "./useOnlineStatus";


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
    // console.log(json);
    setResList(
      json?.data?.cards[4]?.card?.card?.gridElements?.infoWithStyle?.restaurants
    );
    setFilteredResList(json?.data?.cards[4]?.card?.card?.gridElements?.infoWithStyle?.restaurants)
    console.log("restaurants", json?.data?.cards[4]?.card?.card?.gridElements?.infoWithStyle?.restaurants);    
  };

  const onlineStatus = useOnlinStatus()
  if(onlineStatus===false) return (<h1>Looks Like You Are Offline!! Please Check Your Interner Connection</h1>) 

  return listofRes.length === 0 ? (
    <Shimmer />
  ) : (
    <div className="body">
      <div className="filter flex items-center justify-between">
        <div className="search m-2 p-2">
          <input
            type="text"
            className="search-box border border-solid border-gray-400 p-2 "
            value={searchText}
            onChange={(e) => {
              setSearchText(e.target.value);
            }}
          ></input>
          <button className="p-2 bg-orange-200 m-4 rounded-sm"
            onClick={() => {
              console.log(searchText);
              const filteredRes = listofRes.filter((res) => res.info.name.toLowerCase().includes(searchText.toLowerCase()));
              setFilteredResList(filteredRes)
            }}
          >
            Search
          </button>
        </div>
       <div>
       <button
          className="p-2 bg-orange-200 rounded-sm m-5"
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
      </div>
      {console.log("flr",filteredListofRes)}
      <div className="flex flex-wrap">
        {filteredListofRes.map((restaurant) => (
          <Link key={restaurant.info.id} to={`/restaurants/${restaurant.info.id}`}><RestaurantCard key={restaurant.info.id} resData={restaurant} /></Link>
        ))}
      </div>
    </div>
  );
};

export default Body;
