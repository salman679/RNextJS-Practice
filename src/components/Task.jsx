import { useState } from "react";

/* eslint-disable react/prop-types */
export default function Task({ task, onChangeText, onDeleteText }) {
  const [isEditing, setEdit] = useState(false);

  let taskEdit;

  if (isEditing) {
    taskEdit = (
      <>
        <input
          value={task.text}
          onChange={(e) =>
            onChangeText({
              ...task,
              text: e.target.value,
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
            onChangeText({
              ...task,
              done: e.target.checked,
            })
          }
        />
        {taskEdit}
        <button onClick={() => onDeleteText(task.id)}>Delete</button>
      </label>
    </li>
  );
}
