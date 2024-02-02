import ReactDOM from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
import { Router } from "./router";
import { Theme } from "@radix-ui/themes";
import "@radix-ui/themes/styles.css";

import "./index.css";
import { Navbar } from "./Navbar.tsx";

ReactDOM.createRoot(document.getElementById("root")!).render(
  <Theme>
    <BrowserRouter>
      <Navbar />
      <Router />
    </BrowserRouter>
  </Theme>
);
