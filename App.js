import React from "react";
import ReactDOM from "react-dom/client";
//JSX => Babel transpiles JSX to React.createElement => ReactElement - JS Object => HTML Element (render)
// const jsxHeading = (
//   <h1 id="heading" className="head" tabIndex="1">
//     React using JSX
//   </h1>
// );
// const root = ReactDOM.createRoot(document.getElementById("root"));
// root.render(jsxHeading);
/**
 * This is equivalent to the below code without JSX
 * const heading = React.createElement("h1", {id: "heading"}, "React using JSX");
 * React.createElement("h1", {id: "heading"}, "React using JSX"); is an object which is called React Element and this is rendered as HTML element
 * JSX code is converted to React.createElement calls by Babel compiler and read as HTML elements by the browser
 * heading and jsxHeading are same if we console log them
 */

// const HeadingComponent = () => {
//   return <h1>Functional Component Heading</h1>;
// };
const Title = function () {
  return (
    <h1 className="head" tabIndex="5">
      Hello I am Sharmi
    </h1>
  );
};
const number = 10000;
const ttt = (
  <h1 className="head2" tabIndex="5">
    Hello
  </h1>
);
const HeadingComponent = () => (
  <div id="container">
    <Title />
    <h2>{number}</h2>
    <h2>{number + 1000}</h2>
    <h2>{59999}</h2>
    <h2>{console.log(number)}</h2>
    {ttt}
    <h1 className="heading">Functional Component Heading</h1>
  </div>
);
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<HeadingComponent />);

/**
 * Both are same and similar to the egs given below for arrow functions
 */
// const fn = () => true;
// const fn2 = () => {return true};
/**
 * Both are same. If there is only one expression, we can skip the return keyword and the curly braces
 */
