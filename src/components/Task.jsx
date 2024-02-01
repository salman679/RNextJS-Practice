import { useState } from "react";
import { useTasksDispatch } from "../contexts/TaskContext";

export default function Task({ task }) {
  const [isEditing, setEdit] = useState(false);
  const dispatch = useTasksDispatch();

  let taskEdit;

  if (isEditing) {
    taskEdit = (
      <>
        <input
          value={task.text}
          onChange={(e) =>
            dispatch({
              type: "changed",
              task: {
                ...task,
                text: e.target.value,
              },
            })
          }
        />
        <button onClick={() => setEdit(false)}>Save</button>
      </>
    );
  } else {
    taskEdit = (
      <>
        {task.text}
        <button onClick={() => setEdit(true)}>Edit</button>
      </>
    );
  }

  return (
    <li>
      <label>
        <input
          type="checkbox"
          checked={task.done}
          onChange={(e) =>
            dispatch({
              type: "changed",
              task: {
                ...task,
                done: e.target.checked,
              },
            })
          }
        />
        {taskEdit}
        <button
          onClick={() =>
            dispatch({
              type: "deleted",
              id: task.id,
            })
          }
        >
          Delete
        </button>
      </label>
    </li>
  );
}
