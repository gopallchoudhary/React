import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";

function App() {
  const [value, setValue] = useState(1);
  let multipliedValue = value * 5;
  const multiplyBy5 = () => {
    setValue(value + 1);
  };
  return (
    <>
      <h1>Main value: {value}</h1>
      <button onClick={multiplyBy5}>Click to multiply by 5</button>
      <h2>Multiplied value: {multipliedValue} </h2>
    </>
  );
}

export default App;
