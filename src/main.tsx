import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { QueryClientProvider } from "@tanstack/react-query";
import "./index.css";
import App from "./App.tsx";
import queryClient from "./api/queryClient.ts";
import PreferenceProvider from "./contexts/PreferenceContext.tsx";

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <PreferenceProvider>
      <QueryClientProvider client={queryClient}>
        <App />
      </QueryClientProvider>
    </PreferenceProvider>
  </StrictMode>
);
