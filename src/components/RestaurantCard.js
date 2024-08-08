import { CDN_URL } from "../utils/constants";

const RestaurantCard = (props) => {
    const { resData } = props;
    const { cloudinaryImageId, name, cuisines, avgRating, costForTwo, deliveryTime } =
      resData.info;
    return (
      <div className="m-2 p-4 w-[264px] rounded-md bg-slate-50 hover:bg-gray-100 shadow-lg">
        <img
          className="rounded-md "
          alt="card-image"
          src={
            CDN_URL +
            cloudinaryImageId
          }
        />
        <h3 className="font-bold py-3 text-lg">{name}</h3>
        <h4>{cuisines.join(", ")}</h4>
        <h4>{avgRating}</h4>
        <h4>{costForTwo}</h4>
        <h4>{costForTwo}</h4>
        <h4>{deliveryTime}</h4>
  
      </div>
    );
  };


  export default RestaurantCard;