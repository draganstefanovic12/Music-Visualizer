import Homepage from "./pages/Homepage/Homepage";
import SpotifyLogin from "./components/SpotifyLogin/SpotifyLogin";
import { useToken } from "./context/TokenContext";

const App = () => {
  const { token } = useToken();

  return token ? <Homepage /> : <SpotifyLogin />;
};

export default App;
