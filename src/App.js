import "./styles.css";
import { Routes, Route } from "react-router-dom";
import Login from "./pages/Auth/Login.jsx";

export default function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Login />} />
      </Routes>
    </div>
  );
}
