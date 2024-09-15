import React from "react";

class UserClass extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      count: 0,
    };
    console.log(this.props.name +"Childern Constructor");
  }

  componentDidMount() {
    console.log(this.props.name +"Child Compoponent didMount");
  }

  render() {
    const { name, Location } = this.props;
    const { count, count1 } = this.state;
    console.log(this.props.name +"Child Renderer");

    return (
      <div className="user-card">
        <header>Class Based Component</header>

        <h1>Count: {count}</h1>
        <button
          onClick={() => {
            this.setState({
              count: count + 1,
            });
          }}
        >
          Touch Me 😘
        </button>
        <h1>Name: {name}</h1>
        <h2>Location: {Location}</h2>
        <p>Contact: musaleparm9541@gmail.com</p>
      </div>
    );
  }
}

export default UserClass;


/****
 *
 * --- MOUNTING ----
 *
 * Constructor (dummy)
 * Render (dummy)
 *      <HTML Dummy >
 * Component Did MOunt
 *      <API Call>
 *      <this.setState> -> State variable is updated
 *
 * ---- UPDATE
 *
 *      render(APi data)
 *      <HTML (new API data>)
 *      ccomponentDid Update
 */