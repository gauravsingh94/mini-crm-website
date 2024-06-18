import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import AudiencePage from "./pages/AudiencePage";
import AudienceDetailPage from "./pages/AudienceDetailPage";
import MessageLogsPage from "./pages/MessageLogsPage";
import NavBar from "./components/NavBar";
import LoginRegisterPage from "./pages/LoginRegisterPage";

const App = () => {
  const isAuthenticated = !!localStorage.getItem("admin");
  return (
    <>
      <NavBar />
      <div className="container mx-auto">
        <Router>
          <Routes>
            <Route path="/login-register" element={<LoginRegisterPage />} />
            <Route
              path="/"
              element={<AudiencePage isAuthenticated={isAuthenticated} />}
            />
            <Route
              path="/:audienceId"
              element={<AudienceDetailPage isAuthenticated={isAuthenticated} />}
            />
            <Route
              path="/logs/:audienceId"
              element={<MessageLogsPage isAuthenticated={isAuthenticated} />}
            />
          </Routes>
        </Router>
      </div>
    </>
  );
};

export default App;
