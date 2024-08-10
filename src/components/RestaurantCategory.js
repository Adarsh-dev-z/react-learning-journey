import ItemLists from "./ItemLists";
import { useState } from "react";

const RestaurantCategory = ({data, showItems, setShowIndex, dummy})=>{

    const handleClick=()=>{
        setShowIndex()
    };

    console.log(data)
    return(
        <div>
            <div className="bg-gray-100 shadow-lg p-4 my-4 m-4 w-6/12 mx-auto">
            <div className="flex justify-between font-bold cursor-pointer " onClick={handleClick}>
                <span>{data.title } ({data.itemCards.length})</span>
                <span>+</span>
            </div>
            { showItems && <ItemLists items={data.itemCards} dummy={dummy}/>}
            </div>
        </div>
    )
}

export default RestaurantCategory   