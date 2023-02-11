import React, { useState } from "react";

function Counter() {
  const [count, func] = useState(0);
  const learn = useState("Mustafa", Text);

  console.log(learn);
  function Text() {
    console.log("Hello World");
    let hone = document.getElementById("hone");
    hone.textContent = "Hello EveryOne here my name is Mustafa.";
  }

  function Text1() {
    console.log("Hello World Blah Blah");
  }

  const [isGoingOut, SetIsgoingOut] = useState(true);

  const [object, functio] = useState({
    myName: "John",
    lastName: "NAiby",
    PhonNumber: "023043034504",
    Country: "Afghanistan",
  });
  console.log(object);
  function ChangeMind() {
    SetIsgoingOut((preAnswer) => !preAnswer);
  }
  return (
    <>
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

      <button onMouseOver={Text} onClick={Text1} className="btn -btn-primary">
        Click me
      </button>
      <h1 id="hone"></h1>

      <div className="box">
        <h2>Do I fell like Going Out?</h2>
        <div onClick={ChangeMind} className="answer">
          {" "}
          <h1>{isGoingOut == true ? "Yes" : "No"}</h1>
        </div>
      </div>

      <div className="boxName">
        <h1>
          Welcome {object.myName} {object.lastName}
        </h1>
        <h2>
          your Phon Number is {object.PhonNumber} and you are from{" "}
          {object.Country}
        </h2>
      </div>
    </>
  );
}

export default Counter;

// function Counter() {
//   // Declare a new state variable, which we'll call "count"
//   const [count, setCount] = useState(0);
//   return (
//     <div>
//       <p>You clicked {count} times</p>
//       <button onClick={() => setCount(count + 1)}>Click me</button>
//     </div>
//   );
// }
