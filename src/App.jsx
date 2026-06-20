import { BrowserRouter, Routes, Route, useLocation, useNavigate } from "react-router-dom";
import UserListPage from "./pages/UserListPage";
import CreateUserPage from "./pages/CreateUserPage";
import EditUserPage from "./pages/EditUserPage";
import "./App.css";

function AppHeader() {
  const navigate = useNavigate();
  const location = useLocation();

  return (
    <header className="app-header">
      <div className="header-content">
        <h1 className="app-title" onClick={() => navigate("/")} style={{ cursor: "pointer", margin: 0 }}>
          🚀 User Service
        </h1>
        <nav className="app-nav">
          <button
            className={location.pathname === "/" ? "nav-active" : ""}
            onClick={() => navigate("/")}
          >
            👥 Users
          </button>
          <button
            className={location.pathname === "/create" ? "nav-active" : ""}
            onClick={() => navigate("/create")}
          >
            ✨ Create
          </button>
        </nav>
      </div>
    </header>
  );
}

export default function App() {
  return (
      <BrowserRouter>
        <div className="app-container">
          <AppHeader />
          <main className="app-main">
            <Routes>
              <Route path="/" element={<UserListPage />} />
              <Route path="/create" element={<CreateUserPage />} />
              <Route path="/edit/:id" element={<EditUserPage />} />
            </Routes>
          </main>
          <footer className="app-footer">
            <p>© 2026 User Service. Made with ❤️</p>
          </footer>
        </div>
      </BrowserRouter>
  );
}