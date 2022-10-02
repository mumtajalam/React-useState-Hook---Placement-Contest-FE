import "../styles/App.css";
import React, { useState } from "react";

export default function App() {
  //code here
  const [inputValue, setInput] = useState();
  const [text, setText] = useState([]);

  const changeInput = (e) => {
    setInput(e.target.value);
  };

  const buttonClick = () => {
    setText([...text, inputValue]);
    setInput("");
  };

  return (
    <div>
      <input id="input" value={inputValue} onChange={changeInput} />
      <p id="text">String Concate</p>
      {text &&
        text.map((item, index) => (
          <p key={item + index} id="intro">
            {item}
          </p>
        ))}

      <button id="button" onClick={buttonClick}>
        Click me
      </button>
    </div>
  );
}
