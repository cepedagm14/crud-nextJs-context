import React from "react";
import Layout from "../components/Layout";
import { useTask } from "../context/TaskContext";

const Index = () => {
  const { tasks } = useTask();
  console.log(tasks);
  return (
    <Layout>
      <div>Hola mundo</div>
    </Layout>
  );
};

export default Index;
