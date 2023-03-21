import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import { InformationContextProvider } from "./context/informationContext";
import "./index.css";

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
  <React.StrictMode>
    <InformationContextProvider>
      <App />
    </InformationContextProvider>
  </React.StrictMode>
);
