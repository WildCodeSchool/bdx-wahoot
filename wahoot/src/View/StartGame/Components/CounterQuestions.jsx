import { useEffect, useState } from "react";

const CounterQuestions = () => {
  const [count, setCount] = useState(1);
  useEffect(() => {
    console.log("je compte");
  });
  return (
    <div>
      <p onClick={() => setCount((old) => old + 1)} style={{ color: "red" }}>
        {count}
      </p>
    </div>
  );
};

export default CounterQuestions;
