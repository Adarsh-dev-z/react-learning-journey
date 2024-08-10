import User from "./User";
import UserClass from "./UserClass";
import React from "react";
import UserContext from "../utils/UserContext";


class About extends React.Component{
    constructor(props){
        super(props);

        this.state={};
    }

    componentDidMount(){
        
    }
    render(){
        return(
            <div>
                <h1>This is About Class Component</h1>
                <div>
                    Logged User : 
                    <UserContext.Consumer>
                    {({loggedInUser})=>(
                        <h1>{loggedInUser}</h1>
        )}
                    </UserContext.Consumer>
                </div>

    
                <UserClass name={"adarsh class"}/>
            </div>
        )
    }
}

// const About = ()=>{
    
//     return(
//         <div>
//             <h1>This is About Page</h1>
//             {/* <User name={"adarsh function"}/> */}

//             <UserClass name={"adarsh class"}/>
//         </div>
//     )
// }

export default About;