import { useState } from "react";
import { useTasks, useTasksDispatch } from "../contexts/TaskContext";
import { getNextId } from "../utils/getNextId";

export default function AddTask() {
  const [text, setText] = useState("");
  const tasks = useTasks();
  const dispatch = useTasksDispatch();

  const handleChangeText = (e) => {
    setText(e.target.value);
  };

  return (
    <div>
      <input placeholder="Add task" value={text} onChange={handleChangeText} />
      <button
        onClick={() => {
          dispatch({
            type: "added",
            id: getNextId(tasks),
            text,
          });
          setText("");
        }}
      >
        Add
      </button>
    </div>
  );
}
