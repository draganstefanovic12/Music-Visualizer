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
          path="Genrefy/login"
          element={!token ? <Login /> : <Navigate to="/" />}
        />
        <Route
          path="/"
          element={token ? <Homepage /> : <Navigate to="Genrefy/login" />}
        />
        <Route path="*" element={<Navigate to="Genrefy/login" />} />
      </Routes>
    </Router>
  );
};

export default BrowserRouter;
