import { TokenContextProvider } from "./context/TokenContext";
import { QueryClient, QueryClientProvider } from "react-query";
import "./main.css";
import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";

const queryClient = new QueryClient();

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
  <React.StrictMode>
    <TokenContextProvider>
      <QueryClientProvider client={queryClient}>
        <App />
      </QueryClientProvider>
    </TokenContextProvider>
  </React.StrictMode>
);
