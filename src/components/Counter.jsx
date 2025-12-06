import { useState } from "react";

export const Counter = () => {
  const [count, setCount] = useState(0);

  const handlePlus = () => {
    setCount(count + 1);
  };
  const handleMinus = () => {
    return setCount(count - 1);
  };
  return (
    <div>
      <h1>Count: {count}</h1>
      <button onClick={handlePlus}>+1</button>
      <button onClick={handleMinus}>-1</button>
    </div>
  );
};
