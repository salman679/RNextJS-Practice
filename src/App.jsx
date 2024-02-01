import "./App.css";
import AddTask from "./components/AddTask";
import TaskList from "./components/TaskList";
import TasksProvider from "./contexts/TaskContext";

function App() {
  return (
    <>
      <TasksProvider>
        <div className="margin">
          <h1>Prague itinerary</h1>
          <AddTask />
          <TaskList />
        </div>
      </TasksProvider>
    </>
  );
}

export default App;
