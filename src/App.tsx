import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/home";
import Reglement from "./pages/reglement";
import ReglementGlobal from "./pages/reglementGlobal";
import ReglementLegal from "./pages/reglementLegal";

export default function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />   
        <Route path="/reglement" element={<Reglement />} />
        <Route path="/reglement-global" element={<ReglementGlobal />} />
        <Route path="/reglement-legal" element={<ReglementLegal />} />
      </Routes>
    </Router>
  );
}
