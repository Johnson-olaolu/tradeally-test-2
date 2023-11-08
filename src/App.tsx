import SideMenu from "./components/SideMenu";
import Task from "./components/Task";
import TaskDone from "./components/TaskDone";
import TopCards from "./components/TopCards";
import Layout from "./components/layout";

function App() {
  return (
    <Layout>
      <div className="flex h-full ">
        <div className="flex-grow py-8 px-10 space-y-8 overflow-auto custom-scrollbar" style={{ height: "calc(100vh - 80px)" }}>
          <TopCards />
          <TaskDone />
          <Task />
        </div>
        <SideMenu />
      </div>
    </Layout>
  );
}

export default App;
