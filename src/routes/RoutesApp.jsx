// Router + menú superior + switch global
import { BrowserRouter as Router, Routes, Route, NavLink } from "react-router-dom";
import Home from "../pages/Home";
import Profile from "../pages/Profile";
import MyJob from "../pages/MyJob";
import Button from "../components/Button";

export default function RoutesApp() {
  return (
    <Router>
      <header className="site-header">
        <nav className="nav">
          <NavLink to="/" end className={({ isActive }) => isActive ? "link active" : "link"}>
            Home
          </NavLink>
          <NavLink to="/profile" className={({ isActive }) => isActive ? "link active" : "link"}>
            Profile
          </NavLink>
          <NavLink to="/myjob" className={({ isActive }) => isActive ? "link active" : "link"}>
            MyJob
          </NavLink>
        </nav>

        {/* Switch de tema a la derecha */}
        <div className="switch-wrap">
          <Button />
        </div>
      </header>

      <main className="site-main">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/profile" element={<Profile />} />
          <Route path="/myjob" element={<MyJob />} />
        </Routes>
      </main>

      <footer className="site-footer">
        Hecho con ❤️⚽ y useContext
      </footer>
    </Router>
  );
}