import React from "react";

class UserClass extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
         userInfo : {
           name : "Dummy name",
           location : "Dummy location",
           avatar_url : "https://dummy-photo.com",
          }
    };
   console.log(this.props.name +" Child Constructor");
  }

  async componentDidMount() {
    console.log(this.props.name +" Child ComponentDidMount");
    

    const data = await fetch("https://api.github.com/users/ibrangrd");
    const json = await data.json();
    
    this.setState({
      userInfo : json,
    })
    
    console.log(json);
  }
  
  componentDidUpdate(prevProps, prevState) {

  }

  componentWillUnmount() {
    
    console.log("Component Will Unmount");
  }

  render() {
    console.log(this.props.name + "Child Render");
    const {userInfo} = this.state;

    return (
      <div className="userCard m-4 p-4 bg-grey-50 rounded-lg">
        <img src = {userInfo.avatar_url}/>
        <h2>Name : {userInfo.name}</h2>
        <h3>Location : {userInfo.location}</h3>
        <h3>Age : 22</h3>
      </div>
    );
  }
}

export default UserClass;
