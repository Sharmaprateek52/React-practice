import { useState } from "react";

function useCounter(val = 0) {
  const [count, setCount] = useState(val);

  const increment = () => {
    setCount((prev) => prev + 1);
  };

  const decrement = () => {
    setCount((prev) => prev - 1);
  };

  const reset = () => {
    setCount(val);
  };

  return { count, increment, decrement, reset };
}

export default useCounter;
