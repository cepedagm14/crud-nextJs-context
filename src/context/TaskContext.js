import { createContext, useContext, useState } from "react";

// creador del contexto
export const TaskContext = createContext();

// creando custom hook del contexto
export const useTask = () => {
  return useContext(TaskContext);
};

export const TaskProvider = ({ children }) => {
  const [tasks, setTasks] = useState([
    {
      id: 1,
      title: "primera tarea",
      description: "descripcion prueba",
    },
  ]);

  return (
    //el contexto se expande por toda la app, y cada valor, estado o funcion se pasa en el value
    <TaskContext.Provider value={{ tasks }}>{children}</TaskContext.Provider>
  );
};
