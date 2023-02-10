import React from "react";
import Counter from "./Components/counter";

function App() {
  return (
    <>
      <div className="e">
        <div className="conain">
          <h2>This is Header Box</h2>
        </div>
        <div className="conain">
          <h2>This is Main box</h2>
        </div>
        <div className="conain">
          <h2>This is footer box</h2>
        </div>
      </div>
      <Counter />
    </>
  );
}
export default App;
