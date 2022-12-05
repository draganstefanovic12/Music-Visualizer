import { TokenContextProvider } from "./context/TokenContext";
import { QueryClient, QueryClientProvider } from "react-query";
import "./main.css";
import App from "./App";
import React from "react";
import ReactDOM from "react-dom/client";
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
