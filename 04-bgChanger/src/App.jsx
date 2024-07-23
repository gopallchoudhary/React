import { useState } from "react";
function App() {
  const [color, setColor] = useState("olive");
  return (
    <div
      className="w-full h-screen duration-900"
      style={{ backgroundColor: color }}
    >
      <div className="fixed flex flex-wrap bottom-12 inset-x-0 justify-center py-3 px-2">
        <div className="flex flex-wrap justify-center gap-3 rounded-3xl px-3 py-2 bg-white shadow-lg">
          <button
            className="px-4 py-1  rounded-full outline-none shadow-lg text-white"
            style={{ backgroundColor: "red" }}
            onClick={() => setColor("red")}
          >
            Red
          </button>

          <button
            className="px-4 py-1  rounded-full outline-none shadow-lg text-white"
            style={{ backgroundColor: "green" }}
            onClick={() => setColor("green")}
          >
            Green
          </button>
          <button
            className="outline-none px-3 py-2 text-white shadow-lg rounded-full"
            style={{ backgroundColor: "blue" }}
            onClick={() => setColor("blue")}
          >
            Blue
          </button>
          <button
            className="outline-none px-3 py-2 text-white shadow-lg rounded-full"
            style={{ backgroundColor: "yellow" }}
            onClick={() => setColor("yellow")}
          >
            Yellow
          </button>
          <button
            className="outline-none px-3 py-2 text-white shadow-lg rounded-full bg-orange-500"
            // style={{ backgroundColor: "red" }}
            onClick={() => setColor("orange")}
          >
            Orange
          </button>
          <button
            className="outline-none px-3 py-2 text-white shadow-lg rounded-full"
            style={{ backgroundColor: "olive" }}
            onClick={() => setColor("olive")}
          >
            Olive
          </button>
          <button
            className="outline-none px-3 py-2 text-white shadow-lg rounded-full"
            style={{ backgroundColor: "grey" }}
            onClick={() => setColor("grey")}
          >
            Grey
          </button>
          <button
            className="outline-none px-3 py-2 text-white shadow-lg rounded-full"
            style={{ backgroundColor: "salmon" }}
            onClick={() => setColor("salmon")}
          >
            Salmon
          </button>
          <button
            className="outline-none px-3 py-2 text-white shadow-lg rounded-full"
            style={{ backgroundColor: "black" }}
            onClick={() => setColor("black")}
          >
            Black
          </button>
          <button
            className="outline-none px-3 py-2 text-white shadow-lg rounded-full"
            style={{ backgroundColor: "purple" }}
            onClick={() => setColor("purple")}
          >
            Purple
          </button>
          <button
            className="outline-none px-3 py-2 text-white shadow-lg rounded-full"
            style={{ backgroundColor: "aqua" }}
            onClick={() => setColor("aqua")}
          >
            Aqua
          </button>
        </div>
      </div>
    </div>
  );
}
export default App;
