import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";

import { BrowserRouter, HashRouter } from "react-router-dom";

ReactDOM.createRoot(document.getElementById("root")).render(
  // <BrowserRouter basename="/Health-React-Node.js-project-">
  //   <App />
  // </BrowserRouter>

  <HashRouter>
    <App />
  </HashRouter>
);
