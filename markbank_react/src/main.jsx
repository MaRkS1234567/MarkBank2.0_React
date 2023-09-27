import React from "react";
import ReactDOM from "react-dom/client";
import "./assets/styles/index.scss";
import Home from "./components/screens/home/Home.jsx";
import { RouterProvider } from "react-router-dom";
import Router from "./routes/Routes";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";

const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      refetchOnWindowFocus: false,
    },
  },
});

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <QueryClientProvider client={queryClient}>
      <Router />
    </QueryClientProvider>
  </React.StrictMode>
);
