import HomePage from "./pages/HomePage";
import TaskPage from "./pages/TaskPage";
import { BrowserRouter, Routes, Route } from "react-router-dom";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/tasks" element={<TaskPage />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
