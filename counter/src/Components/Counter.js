import React, {useState} from "react";
import "./Counter.css";

const Counter = () => {
  const [Num, setNum] = useState(0);
  const Action = (act) => {
    if (act === "+") {
      return setNum(Num + 1);
    }
    if (Num > 0 && act === "-") {
      return setNum(Num - 1);
    }
    return setNum(Num);
  };
  return (
    <div className="container">
      <p className="count">{Num}</p>
      <div className="btn-wrapper">
        <button
          onClick={() => {
            Action("+");
          }}
        >
          +
        </button>
        <button
          onClick={() => {
            Action("-");
          }}
        >
          -
        </button>
      </div>
    </div>
  );
};

export default Counter;
