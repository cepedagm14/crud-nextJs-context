import { createContext, useContext, useState } from "react";
import { v4 as uuid } from "uuid";
// creador del contexto
export const TaskContext = createContext();

// creando custom hook del contexto
export const useTask = () => {
  return useContext(TaskContext);
};

export const TaskProvider = ({ children }) => {
  const [tasks, setTasks] = useState([]);

  const createTask = (title, description) => {
    setTasks([...tasks, { title, description, id: uuid() }]);
  };

  const updateTask = (id, updatedTask) => {
    setTasks([
      ...tasks.map((task) =>
        task.id === id ? { ...task, ...updatedTask } : task
      ),
    ]);
  };

  const deleteTask = (id) => {
    setTasks([...tasks.filter((task) => task.id !== id)]);
  };

  //
  return (
    //el contexto se expande por toda la app, y cada valor, estado o funcion se pasa en el value
    <TaskContext.Provider value={{ tasks, createTask, updateTask, deleteTask }}>
      {children}
    </TaskContext.Provider>
  );
};
