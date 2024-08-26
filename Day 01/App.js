{
  /*
     <div id="parent">
    <div id ="child">
        <h1>Hello Parm Dev From Nested react..!!</h1>
        <h2>Hello Parm Dev From Nested 2 react..!!</h2>
    </div>
</div> 
*/
}

// How WE Create using Ract This Structure

const heading = React.createElement(
  "div",
  { id: "parent" },
  React.createElement(
    "div",
    { id: "child" },
    [React.createElement("h1", {}, "Parm Dev From Nested React") ,React.createElement("h1", {}, "Parm Dev From Nested React") ]
  )
);

// const heading = React.createElement(
//   "h1",
//   { id: "heading" },
//   "Hello Parm Dev From React..!!"
// );

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(heading);
