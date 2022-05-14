import { AiOutlinePlusCircle } from "react-icons/ai";
import Link from "next/link";
import { useRouter } from "next/router";
import { useTask } from "../context/TaskContext";

const Layout = ({ children }) => {
  const router = useRouter();
  const { tasks } = useTask();
  return (
    <div className="h-screen bg-gray-900 text-white">
      <header className="flex bg-gray-800 px-28 py-5 items-center">
        <Link href="/">
          <a>
            <h1 className="font-black text-lg">Task APP</h1>
          </a>
        </Link>
        <span className="ml-2 text-gray-400 font-bold">
          Total Task: {tasks.length}
        </span>
        <div className="flex-grow text-right">
          <button
            className="bg-green-500 hover:bg-green-400 px-5 py-2 text-gray-100 rounded-sm inline-flex items-center"
            onClick={() => router.push("/new")}
          >
            <AiOutlinePlusCircle className="mr-2" />
            Añadir Tarea
          </button>
        </div>
      </header>
      <main className="px-28 py-10">{children}</main>
    </div>
  );
};

export default Layout;
