import Layout from "./components/Layout";
import Dashboard from "./components/Dashboard";
import TaskTable from "./components/taskTable";
import { BrowserRouter, Routes, Route } from "react-router-dom";

function App() {
  return (
    <BrowserRouter>
      <Layout>
        <Routes>
          <Route path="/" element={<Dashboard />} />
          <Route path="/tasks" element={<TaskTable />} />
        </Routes>
      </Layout>
    </BrowserRouter>
  );
}

export default App;
