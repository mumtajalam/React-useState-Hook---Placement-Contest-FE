import "../styles/App.css";
import React, { useState } from "react";

export default function App() {
  //code here
  const [inputValue, setInput] = useState("");
  const [text, setText] = useState([]);

  // const inputValue = { ...input, ...text };

  const changeInput = (e) => {
    setInput(e.target.value);
  };

  const buttonClick = () => {
    setText([...text, inputValue]);
  };

  return (
    <div>
      <input id="input" value={inputValue} onChange={changeInput} />
      {text &&
        text.map((item, index) => (
          <p key={item + index} id="intro">
            {item}
          </p>
          // <p id="text">
          //   {text}
          // </p>
        ))}

      <button id="button" onClick={buttonClick}>
        Click me
      </button>
    </div>
  );
}
