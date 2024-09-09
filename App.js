import React from "react";
import ReactDOM from "react-dom/client";

// Using React
const heading = React.createElement(
  "h1",
  { id: "heading" },
  " Hello Parm Dev..!!"
);

// using jsx
const jsxheading = <h1 id="heading">Hello Parm Dev from Jsx</h1>;

// React Element
const heading2 = <h1 className="header">Parm Dev From React Element</h1>;
// Tiitle Component
const Tiittle = () => {
  return <h1 className="head">Hello Parm Dev from Title Component</h1>;
};

// React functional Componenets
const HeadingComponnent = () => (
    <div>
      <Tiittle />
      <h1>Hello Parm Dev from Functional Component</h1>
    </div>
  );

const root = ReactDOM.createRoot(document.getElementById("root"));
// root.render(heading);
// root.render(jsxheading); // This  is For the Element

root.render(<HeadingComponnent />); // This  is For the Functional Component
