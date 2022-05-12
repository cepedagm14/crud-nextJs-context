import React from "react";

const Layout = ({ children }) => {
  return (
    <div className="h-screen bg-gray-900 text-white">
      <header className="flex bg-gray-800 px-28 py-5">
        <h1 className="font-black text-lg">Task APP</h1>
        <div className="flex-grow text-right">
          <button className="bg-green-300 px-3 py-2">Añadir Tarea</button>
        </div>
      </header>
      <main className="px-28 ">{children}</main>
    </div>
  );
};

export default Layout;
