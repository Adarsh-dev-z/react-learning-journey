import { useState } from "react";
const User = (props)=>{
    const [count, setCount] = useState(0)
    const [count2] = useState(2)

    return (
        <div className="user-card">
            <h1>count: {count}</h1>
            <h1>count2: {count2}</h1>

            <h2>Name: {props.name}</h2>
            <h2>Loaction: Kannur</h2>
            <h2>Contact: @adarsh7013</h2>


        </div>
    )
}

export default User;