import { useTasks } from "../contexts/TaskContext";
import Task from "./Task";

export default function TaskList() {
  const tasks = useTasks();
  return (
    <ul>
      {tasks.map((ITask) => (
        <Task key={ITask.id} task={ITask} />
      ))}
    </ul>
  );
}
