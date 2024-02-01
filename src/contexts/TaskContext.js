import { createContext, useContext } from "react";
import { useImmerReducer } from "use-immer";
import taskReducers from "../Reducers/taskReducer";
import { initialTasks } from "../data/data";

export const TaskContext = createContext(null);
export const TaskDispatchContext = createContext(null);

export default function TasksProvider({ children }) {
  const [Tasks, dispatch] = useImmerReducer(taskReducers, initialTasks);

  return (
    <TaskContext.Provider value={Tasks}>
      <TaskDispatchContext.Provider value={dispatch}>
        {children}
      </TaskDispatchContext.Provider>
    </TaskContext.Provider>
  );
}

export function useTasks() {
  return useContext(TaskContext);
}

export function useTasksDispatch() {
  return useContext(TaskDispatchContext);
}
