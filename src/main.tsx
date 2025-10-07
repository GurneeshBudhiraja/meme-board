import { createRoot } from "react-dom/client";
import "./index.css";
import "tldraw/tldraw.css";
import App from "./App.tsx";
import ApplicationContextProvider from "./provider/ContextProvider.tsx";

createRoot(document.getElementById("root")!).render(
  <ApplicationContextProvider>
    <App />
  </ApplicationContextProvider>
);
