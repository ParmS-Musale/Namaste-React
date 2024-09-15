import React from "react";

class UserClass extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      userInfo: {
        name: "Dummy",
        location: "default",
        email: "dummy@gmail.com",
      },
    };

    // console.log(this.props.name + "Childern Constructor");
  }

  async componentDidMount() {
    // console.log(this.props.name + "Child Compoponent didMount");
    const data = await fetch("https://api.github.com/users/ParmS-Musale");
    const json = await data.json();
    console.log(json);

    this.setState({ userInfo: json });
  }

  render() {
    // console.log(this.props.name + "Child Renderer");
    const { name, location, email, avatar_url } = this.state.userInfo;

    return (
      <div className="user-card">
        <header>Class Based Component</header>
        <img src={avatar_url} alt="" />
        <h1>Name: {name}</h1>
        <h2>Location: {location}</h2>
        <p>Email: {email}</p>
      </div>
    );
  }
}

export default UserClass;
