import { BrowserRouter, Routes, Route } from "react-router-dom";
import Dashboard from '../pages/Dashboard';
import Admin from "../pages/Admin";
import LoginDash from "../pages/LoginDash";



function App() {
    return (
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Dashboard />} />
          <Route path="/login" element={<LoginDash />} />
          <Route path="/admin" element={<Admin />} />
        </Routes>
      </BrowserRouter>
    );
}

export default App;