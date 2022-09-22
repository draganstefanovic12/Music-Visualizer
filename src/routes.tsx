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
          path="Genrefy/"
          element={token ? <Homepage /> : <Navigate to="Genrefy/login" />}
        />
        <Route
          path="Genrefy/login"
          element={token ? <Navigate to="Genrefy/" /> : <Login />}
        />
      </Routes>
    </Router>
  );
};

export default BrowserRouter;
