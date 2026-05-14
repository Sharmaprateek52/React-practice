import { useState } from "react";

function App() {
  // Main state: number of counters
  const [count, setCount] = useState(1);

  // State to hold the values of all individual counters
  // Initialized as [0] because count starts at 1
  const [values, setValues] = useState([0]);

  // Handler to add a new counter
  const addCounter = () => {
    setCount((prev) => prev + 1);
    setValues((prev) => [...prev, 0]); // Add a new 0 to the array
  };

  // Handler to update a specific counter's value
  const updateValue = (index: number, delta: number) => {
    const newValues = [...values];
    if (newValues[index] + delta < 0) {
      return;
    }
    newValues[index] += delta;
    setValues(newValues);
  };

  // Calculate total by summing the array
  const total = values.reduce((acc, curr) => acc + curr, 0);

  return (
    <div style={{ padding: "20px" }}>
      <div className="main-control">
        <h2>Total Counters: {count}</h2>
        <button onClick={addCounter}>Add Counter</button>
      </div>

      <hr />

      <div className="counters-list">
        {values.map((val, index) => (
          <div key={index} className="counter" style={{ margin: "10px 0" }}>
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
  );
}

export default App;
