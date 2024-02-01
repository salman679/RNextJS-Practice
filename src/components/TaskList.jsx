/* eslint-disable react/prop-types */
import Task from "./Task";

export default function TaskList({ Tasks, onChangeText, onDeleteText }) {
  return (
    <ul>
      {Tasks.map((ITask) => (
        <Task
          key={ITask.id}
          task={ITask}
          onChangeText={onChangeText}
          onDeleteText={onDeleteText}
        />
      ))}
    </ul>
  );
}
