import React, { useState, useEffect } from "react";
import Layout from "../components/Layout";
import { useTask } from "../context/TaskContext";
import { useRouter } from "next/router";

const TaskFormPage = () => {
  const { createTask, updateTask, tasks } = useTask();
  const [task, setTask] = useState({
    title: "",
    description: "",
  });

  const { push, query } = useRouter();
  console.log(query);

  const handleChange = (e) => {
    setTask({ ...task, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!query.id) {
      createTask(task.title, task.description);
    } else {
      updateTask(query.id, task);
    }
    push("/");
  };

  useEffect(() => {
    if (query.id) {
      const taskFound = tasks.find((task) => task.id === query.id);
      setTask({ title: taskFound.title, description: taskFound.description });
      console.log(taskFound);
    }
  }, []);

  return (
    <Layout>
      <div className="flex justify-center items-center h-full">
        <form onSubmit={handleSubmit} className="bg-gray-700 p-10 h-2/4">
          <h1 className="text-3xl mb-7">{query.id ? "Update a Task" : "Create a Task"}</h1>
          <input
            type="text"
            name="title"
            placeholder="write a title"
            className="bg-gray-800 focus:text-gray-100 focus:outline-none w-full py-3 px-4 mb-5"
            onChange={handleChange}
            value={task.title}
          />
          <textarea
            rows="2"
            name="description"
            placeholder="write a description"
            className="bg-gray-800 focus:text-gray-100 focus:outline-none w-full py-3 px-4 mb-5"
            onChange={handleChange}
            value={task.description}
          ></textarea>
          <button
            className="bg-green-500 hover:bg-green-400 px-4 py-2 rounded-sm disabled:opacity-50"
            disabled={!task.title}
          >
            Save
          </button>
        </form>
      </div>
    </Layout>
  );
};

export default TaskFormPage;
