import React, {Component, useState} from "react";
import "./../styles/App.css";

function App() {
  const [para,setPara] = useState(false)
  return (
    <div id="main">
      <button id = "click" onClick={()=>{
        setPara(true)
      }}>Click</button>

      {/* <p id="para">{para}</p> */}
      {para && <p id="para">Hello, I've learnt to use the full-stack evaluation tool. This makes me so happy</p>}
    </div>
  );
}


export default App;
