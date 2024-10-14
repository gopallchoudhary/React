import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";

function App() {
  console.log("App Rendered", Math.random());
  const [value, setValue] = useState([1, 2, 3]);
  const clickMe = () => {
    setValue([1, 2, 3]);
    console.log("logged");
  };

  // let multipliedValue = value * 5;
  // const multiplyBy5 = () => {
  //   setValue(value + 1);
  // };
  return (
    <>
      <h1>Main value: {value[1]}</h1>
      <button onClick={clickMe}>Click to multiply by 5</button>
      {/* <h2>Multiplied value: {multipliedValue} </h2> */}
    </>
  );
}

export default App;
