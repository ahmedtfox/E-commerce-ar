import { Container } from "react-bootstrap";
import HomePage from "./Page/Home/HomePage";
import { Route, BrowserRouter, Routes } from "react-router-dom";
import NavBarLogin from "./components/utility/NavBarLogin";
import Footer from "./components/utility/Footer";
import Login from "./Page/Auth/Login";
import Register from "./Page/Auth/Register";
// Type rfce and then press Tab.

function App() {
  return (
    <div className="font">
      <NavBarLogin />
      <Routes>
        <Route index element={<HomePage />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
