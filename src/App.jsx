import { useState } from "react";

const App = () => {
  const [value, setValue] = useState(0);
  const handlePlus = () => {
    setValue(value + 1);
  };
  const handleMinus = () => {
    setValue(value - 1);
  };
  return (
    <div>
      <h1>Header</h1>
      <p>Paragraph {value}</p>
      <button onClick={handlePlus}>+1</button>
      <button onClick={handleMinus}>-1</button>
    </div>
  );
};

export default App;
