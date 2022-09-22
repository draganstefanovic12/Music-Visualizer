import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate,
} from "react-router-dom";
import Login from "./pages/Login/Login";
import Homepage from "./pages/Homepage/Homepage";
import { useToken } from "./context/TokenContext";

const BrowserRouter = () => {
  const { token } = useToken();

  return (
    <Router>
      <Routes>
        <Route
          path="/"
          element={token ? <Homepage /> : <Navigate to="/login" />}
        />
        <Route
          path="/login"
          element={token ? <Navigate to="/" /> : <Login />}
        />
        <Route path="*" element={token ? <Login /> : <Navigate to="/" />} />
      </Routes>
    </Router>
  );
};

export default BrowserRouter;
