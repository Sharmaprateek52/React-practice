import { useState } from "react";

function App() {
  const [count, setCount] = useState(1);
  const [values, setValues] = useState([0]);

  function addCounter() {
    setCount((prev) => prev + 1);
    setValues((prev) => [...prev, 0]);
  }

  const updateValue = (index: number, delta: number) => {
    const newValues = [...values];
    if (newValues[index] + delta < 0) {
      return;
    }
    newValues[index] += delta;
    setValues(newValues);
  };

  const total = values.reduce((acc, curr) => acc + curr, 0);

  return (
    <>
      <div style={{ padding: "20px" }}>
        <div className="main-control">
          <h2>Total Counters: {count}</h2>
          <button onClick={addCounter}>Add Counter</button>
        </div>
        <hr />
        <div className="counters-list">
          {values.map((val, index) => (
            <div key={index} className="counter" style={{ padding: "10px" }}>
              <span>
                Counter {index + 1}: <strong>{val}</strong>{" "}
              </span>
              <button onClick={() => updateValue(index, 1)}>+</button>
              <button onClick={() => updateValue(index, -1)}>-</button>
            </div>
          ))}
        </div>
        <hr />
        <div className="total">
          <h3>Grand Total: {total}</h3>
        </div>
      </div>
    </>
  );
}

export default App;
