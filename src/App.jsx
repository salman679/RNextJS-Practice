import { useState } from "react";
import AddTask from "./components/AddTask";
import TaskList from "./components/TaskList";
import { initialTasks } from "./data/data";
import "./index.css";

function App() {
  const [Tasks, setTasks] = useState(initialTasks);

  const getNextId = (data) => {
    const maxId = data.reduce((prev, current) =>
      prev && prev > current.id ? prev : current.id
    );

    return maxId + 1;
  };

  // handlers

  // handleAddTask
  const handleAddTask = (text) => {
    setTasks([
      ...Tasks,
      {
        id: getNextId(Tasks),
        text: text,
        done: false,
      },
    ]);
  };

  // handleChangeTask
  const handleChangeTask = (task) => {
    console.log(task);
    const nextTask = Tasks.map((t) => {
      if (t.id === task.id) {
        return task;
      } else {
        return t;
      }
    });

    setTasks(nextTask);
  };

  // handleDeleteTask
  const handleDeleteTask = (taskId) => {
    setTasks(Tasks.filter((t) => t.id !== taskId));
  };

  return (
    <>
      <div className="margin">
        <h1>Prague itinerary</h1>
        <AddTask onAdd={handleAddTask} />
        <TaskList
          Tasks={Tasks}
          onChangeText={handleChangeTask}
          onDeleteText={handleDeleteTask}
        />
      </div>
    </>
  );
}

export default App;
