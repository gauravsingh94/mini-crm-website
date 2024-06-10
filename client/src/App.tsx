import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import AudiencePage from "./pages/AudiencePage";
import AudienceDetailPage from "./pages/AudienceDetailPage";
import MessageLogsPage from "./pages/MessageLogsPage";

const App = () => {
  return (
    <div className="container mx-auto">
      <Router>
        <Routes>
          <Route path="/" element={<AudiencePage />} />
          <Route path="/:audienceId" element={<AudienceDetailPage />} />
          <Route path="/logs/:audienceId" element={<MessageLogsPage />} />
        </Routes>
      </Router>
    </div>
  );
};

export default App;
