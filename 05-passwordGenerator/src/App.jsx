import { useCallback, useEffect, useRef, useState } from "react";

import "./App.css";

function App() {
  const [length, setLength] = useState(6);
  const [numberAllowed, setNumberAllowed] = useState(false);
  const [charAllowed, setCharAllowed] = useState(false);
  const [password, setPassword] = useState("");

  //useRef hook

  const passwordRef = useRef(null);

  const passwordGenerator = useCallback(() => {
    let pass = "";
    let str = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz";

    if (numberAllowed) str += "0123456789";
    if (charAllowed) str += "!@#$%^&*~()<>?/";

    for (let i = 1; i <= length; i++) {
      let char = Math.floor(Math.random() * str.length + 1);
      pass += str.charAt(char);
    }

    setPassword(pass);
  }, [length, numberAllowed, charAllowed, setPassword]);

  //*copy-to-clipboard
  const copyToClipboard = useCallback(() => {
    passwordRef.current?.select(password);
    passwordRef.current?.setSelectionRange(0, 5);
    window.navigator.clipboard.writeText(password);
  }, [password]);

  useEffect(() => {
    passwordGenerator();
  }, [length, numberAllowed, charAllowed, passwordGenerator]);

  //!--> cannot pass the passwordGenerator functioon directly because of the re-render limits in REACT (i.e. passwordGenerator())

  return (
    <>
      <div className="w-full max-w-md mx-auto text-orange-500 bg-gray-800 rounded-lg px-4 my-8 py-4">
        <h1 className="text-center text-white my-3">Password Generator</h1>
        <div className="flex shadow mb-4 rounded-lg overflow-hidden">
          <input
            type="text"
            value={password}
            placeholder="Password"
            className="py-1 px-3 w-full outline-none"
            readOnly
            ref={passwordRef}
          />
          <button
            className="bg-blue-700 text-white px-3 py-3 shrink-0 outline-none hover:bg-blue-900"
            onClick={copyToClipboard}
          >
            Copy
          </button>
        </div>
        <div className="flex text-sm gap-x-1">
          <div className="flex gap-x-2">
            <input
              type="range"
              min={6}
              max={50}
              value={length}
              onChange={(e) => {
                setLength(e.target.value);
              }}
            />
            <label>Length: {length}</label>
          </div>
          <div className="flex items-center gap-x-2">
            <input
              className="ml-2"
              type="checkbox"
              id="numberInput"
              defaultChecked={numberAllowed}
              onChange={() => {
                setNumberAllowed((prev) => !prev);
              }}
            />
            <label className="">Numbers</label>
          </div>
          <div className="flex items-center gap-x-2">
            <input
              className="ml-2"
              type="checkbox"
              id="charInput"
              defaultChecked={charAllowed}
              onChange={() => {
                setCharAllowed((prev) => !prev);
              }}
            />
            <label>Characters</label>
          </div>
        </div>
      </div>
    </>
  );
}
export default App;
