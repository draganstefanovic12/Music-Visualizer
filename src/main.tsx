import React from "react";
import ReactDOM from "react-dom/client";
import "./App.css";
import { TokenContextProvider } from "./context/TokenContext";
import BrowserRouter from "./routes";

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
  <React.StrictMode>
    <TokenContextProvider>
      <BrowserRouter />
    </TokenContextProvider>
  </React.StrictMode>
);
