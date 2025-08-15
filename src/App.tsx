import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/home";
import Reglement from "./pages/wiki";

export default function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />   
        <Route path="/reglement" element={<Reglement />} />
      </Routes>
    </Router>
  );
}
