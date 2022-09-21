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
          path="/Spotify-visualizer/login"
          element={!token ? <Login /> : <Navigate to="/Spotify-visualizer/" />}
        />
        <Route
          path="/Spotify-visualizer/"
          element={
            token ? <Homepage /> : <Navigate to="/Spotify-visualizer/login" />
          }
        />
        <Route path="*" element={<Navigate to="/Spotify-visualizer/login" />} />
      </Routes>
    </Router>
  );
};

export default BrowserRouter;
