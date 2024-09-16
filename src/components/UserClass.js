import React from "react";
import { GITHUB_API_URL } from "../utils/constant.js";

class UserClass extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      userInfo: {
        name: "Dummy",
        location: "default",
        email: "dummy@gmail.com",
        avatar_url: "",
      },
    };
  }

  async componentDidMount() {
    try {
      const data = await fetch(GITHUB_API_URL);
      const json = await data.json();
      this.setState({ userInfo: json });
    } catch (error) {
      console.error("Error fetching user info:", error);
    }
  }

  render() {
    const { name, location, email, avatar_url } = this.state.userInfo;

    return (
      <div className="bg-white shadow-md rounded-lg p-6 max-w-sm mx-auto my-4 border border-gray-200">
        <header className="text-xl font-semibold mb-4">Class Based Component</header>
        <img
          src={avatar_url}
          alt="User Avatar"
          className="w-24 h-24 rounded-full mx-auto mb-4 border border-gray-300"
        />
        <h1 className="text-2xl font-bold mb-2">Name: {name}</h1>
        <h2 className="text-xl text-gray-600 mb-2">Location: {location}</h2>
        <p className="text-gray-800">Email: {email}</p>
      </div>
    );
  }
}

export default UserClass;
