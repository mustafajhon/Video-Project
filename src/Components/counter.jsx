import React, { useState } from "react";

function Counter() {
  const [count, func] = useState(0);

  function Welcom() {
    let head = document.getElementById("head");
    head.textContent = "Goals is for Men, Dreams is for Kids.";
  }

  return (
    <>
      <h1 id="head"></h1>

      <div className="container1">
        <div className="box1 left">
          <div className="red">
            <div className="span">
              <span>Goals</span>
            </div>
          </div>
        </div>

        <div className="btn">
          <button onClick={Welcom}>Click Here</button>
        </div>

        <div className="box1 right">
          <div className="red">
            <div className="span">
              <span>Dreams</span>
            </div>
          </div>
        </div>
      </div>

      <div className="container">
        <button
          onClick={() => func(count - 1)}
          className="btn btn-sm btn-primary"
        >
          Decreament
        </button>
        <button
          onClick={() => func(count == 0)}
          className="btn lg btn-sm btn-primary"
        >
          <span>{count}</span>
        </button>

        <button
          onClick={() => func(count + 1)}
          className="btn btn-sm btn-primary"
        >
          Increament
        </button>
      </div>
    </>
  );
}

export default Counter;
