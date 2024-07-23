import { useState } from "react";
import "./App.css";
import Card from "./components/Card";

function App() {
  return (
    <>
      <Card
        username="Delba"
        btnText="Contact Me"
        imgSrc="https://images.unsplash.com/photo-1546961329-78bef0414d7c?ixlib=rb-4.0.3&amp;ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTB8fHVzZXJ8ZW58MHx8MHx8&amp;auto=format&amp;fit=crop&amp;w=800&amp;q=60"
      />
      <Card
        username="Elsa"
        btnText="visit me"
        imgSrc="https://images.pexels.com/photos/2176593/pexels-photo-2176593.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
      />
    </>
  );
}

export default App;
