import { useState } from "react";

const User = (props) => {
  const [count, setCount] = useState(0);

  return (
    <div className="user-card">
        <header>Function Based Component</header>
      <h1>Count :{count}</h1>
      <button
        onClick={() => {
          setCount(count + 1);
        }}
      >
        CLick Me 😘
      </button>
      <h1>Name : {props.name}</h1>
      <h2>Location : {props.Location}</h2>
      <p>Contact : musaleparm9541@gmail.com.</p>
    </div>
  );
};
export default User;
