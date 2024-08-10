import { useDispatch } from "react-redux";
import { CDN_URL } from "../utils/constants";
import { addItem } from "../utils/cartSlice";

const ItemLists = ({ items, dummy }) => {
  // console.log("items", items);

  console.log("dum", dummy);

  const dispatch = useDispatch();
  const handleAddItem = (item) => {
    console.log("item for cart:", item)
    dispatch(addItem(item));
  };

  return (
    <div>
      {items.map((item) => (
        <div
          key={item.card.info.id}
          className="p-2 m-2 border-gray-200 border-b-2 text-left flex justify-between"
        >
          <div>
            <div className="py-2">
              <span>{item.card.info.name}</span>
              <span> - ₹{item.card.info.price / 100}</span>
            </div>
            <p className="text-xs mx-3">{item.card.info.description}</p>
          </div>
          <div className="relative flex-shrink-0 w-32 h-32 py-4">
            <img
              src={CDN_URL + item.card.info.imageId}
              className="w-full h-full object-cover"
              alt={item.card.info.name}
            />
            <button
              className="p-2 bg-black text-white border border-solid border-gray-400 shadow-lg font-bold absolute bottom-4 "
              onClick={()=>handleAddItem(item)}
            >
              Add+
            </button>
          </div>
        </div>
      ))}
    </div>
  );
};

export default ItemLists;
