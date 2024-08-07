import React from "react";

class UserClass extends React.Component {


    constructor(props){
        super(props)

        this.state={
          userInfo:{
            name: "Dummy",
            id: "Default",
          }
        }
    }

    async componentDidMount(){

      const data = await fetch("https://api.github.com/users/Adarsh-dev-z")
      const json = await data.json();
      this.setState({
        userInfo:json
      })

    }

  render() {

    const {name, id, avatar_url} = this.state.userInfo;
    return (
      <div className="user-card">
       
        <h2>Name: {name}</h2>
        <h2>Location: {id}</h2>
        <h2>Contact: @adarsh7013</h2>
        <img src={avatar_url}></img>
      </div>
    );
  }
}

export default UserClass