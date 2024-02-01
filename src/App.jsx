import { useReducer } from "react";
import "./App.css";
import taskReducer from "./Reducers/taskReducer";
import AddTask from "./components/AddTask";
import TaskList from "./components/TaskList";
import { initialTasks } from "./data/data";

function App() {
  const [Tasks, dispatch] = useReducer(taskReducer, initialTasks);

  const getNextId = (data) => {
    const maxId = data.reduce((prev, current) =>
      prev && prev > current.id ? prev : current.id
    );

    return maxId + 1;
  };

  // handlers
  // handleAddTask
  const handleAddTask = (text) => {
    dispatch({
      type: "added",
      id: getNextId(Tasks),
      text,
    });
  };

  // handleChangeTask
  const handleChangeTask = (task) => {
    dispatch({
      type: "changed",
      task,
    });
  };

  // handleDeleteTask
  const handleDeleteTask = (taskId) => {
    dispatch({
      type: "deleted",
      id: taskId,
    });
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
