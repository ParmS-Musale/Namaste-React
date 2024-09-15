import { useEffect, useState } from "react";

const User = (props) => {

    useEffect(() => {
        // Api Call
    },[]);
    
  return (
    <div className="user-card">
        <header>Function Based Component</header>
      <h1>Name : {props.name}</h1>
      <h2>Location : {props.Location}</h2>
      <p>Contact : musaleparm9541@gmail.com.</p>
    </div>
  );
};
export default User;
