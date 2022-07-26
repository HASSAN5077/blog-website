import Home from "./pages/Home";
import Topbar from "./components/Topbar";
import { Routes, Route } from "react-router-dom";
import "./App.css";
function App() {
  return (
    <>
      <Topbar />
      <Routes>
        <Route path="/" element={<Home />} />
      </Routes>
    </>
  );
}

export default App;
