import useCounter from "./hooks/UseCounter";

function App() {
  const {
    count: firstCount,
    increment: incrementFirst,
    reset: resetFirst,
  } = useCounter(0);

  // Second counter instance (starts at 10)
  const {
    count: secondCount,
    increment: incrementSecond,
    reset: resetSecond,
  } = useCounter(10);

  return (
    <div>
      <div>
        <h3>First Counter: {firstCount}</h3>
        <button onClick={incrementFirst}>Increment First</button>
        <button onClick={resetFirst}>Reset First</button>
      </div>

      <hr />

      <div>
        <h3>Second Counter: {secondCount}</h3>
        <button onClick={incrementSecond}>Increment Second</button>
        <button onClick={resetSecond}>Reset Second</button>
      </div>
    </div>
  );
}

export default App;
