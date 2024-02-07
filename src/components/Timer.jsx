import {
  useEffect,
  experimental_useEffectEvent as useEffectEvent,
  useState,
} from "react";

export default function Timer() {
  const [count, setCount] = useState(0);
  const [increment, setIncrement] = useState(1);

  const onTik = useEffectEvent(() => {
    setCount(count + increment);
  });

  useEffect(() => {
    const ClearInterval = setInterval(onTik, 1000);

    return () => clearInterval(ClearInterval);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <>
      <h1>
        Counter: {count}
        <button onClick={() => setCount(0)}>Reset</button>
      </h1>
      <hr />
      <p>
        Every second, increment by:
        <button
          disabled={increment === 0}
          onClick={() => setIncrement((i) => i - 1)}
        >
          -
        </button>
        <b>{increment}</b>
        <button onClick={() => setIncrement((i) => i + 1)}>+</button>
      </p>
    </>
  );
}
