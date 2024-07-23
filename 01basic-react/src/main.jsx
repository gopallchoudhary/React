import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import Chai from "./Chai.jsx";

function MyApp() {
  return (
    <div>
      <h1>My custom App !</h1>
    </div>
  );
}

// var reactElement = {
//   type: "a",
//   props: {
//     href: "https://google.com",
//     target: "__blank",
//   },
//   children: "click to visit Google",
// };

const anotherElement = (
  <a href="https://google.com" target="__blank">
    Visit Google
  </a>
);

const anotherUser = " Here is Gopal";

let reactElement = React.createElement(
  "a",
  { href: "https://google.com", target: "__blank" },
  "click me to visit google",
  anotherUser
);

ReactDOM.createRoot(document.getElementById("root")).render(reactElement);
