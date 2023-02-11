import React, { useState } from "react";

function Counter() {
  const [count, func] = useState(0);
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
    </>
  );
}

export default Counter;
