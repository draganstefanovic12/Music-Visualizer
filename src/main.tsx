import { TokenContextProvider } from "./context/TokenContext";
import { QueryClient, QueryClientProvider } from "react-query";
import "./main.css";
import App from "./App";
import React from "react";
import ReactDOM from "react-dom/client";
import spotifyLogo from "./assets/images/spotify.svg";
const queryClient = new QueryClient();

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
  <React.StrictMode>
    <TokenContextProvider>
      <QueryClientProvider client={queryClient}>
        <img src={spotifyLogo} alt="spotify-logo" className="logo" />
        <App />
      </QueryClientProvider>
    </TokenContextProvider>
  </React.StrictMode>
);
