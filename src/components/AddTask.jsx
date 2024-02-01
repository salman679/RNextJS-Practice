/* eslint-disable react/prop-types */
import { useState } from "react";

export default function AddTask({ onAdd }) {
  const [task, setTask] = useState("");

  const handleChangeText = (e) => {
    setTask(e.target.value);
  };

  return (
    <div>
      <input placeholder="Add task" value={task} onChange={handleChangeText} />
      <button
        onClick={() => {
          onAdd(task);
          setTask("");
        }}
      >
        Add
      </button>
    </div>
  );
}
