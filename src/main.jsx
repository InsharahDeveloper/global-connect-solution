import { createRoot } from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
import { HelmetProvider } from "react-helmet-async";

import "./index.css";
import App from "./App.jsx";
import "remixicon/fonts/remixicon.css";
import { Toaster } from "react-hot-toast";

createRoot(document.getElementById("root")).render(
    <HelmetProvider>
      <BrowserRouter>
        <App />
        <Toaster position="top-center" />
      </BrowserRouter>
    </HelmetProvider>
);