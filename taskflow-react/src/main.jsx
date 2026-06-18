import ReactDOM from "react-dom/client";

import App from "./App";

import { TaskProvider } from "./context/TaskContext";

import "./styles/style.css";

ReactDOM.createRoot(
  document.getElementById("root")
).render(

  <TaskProvider>
    <App />
  </TaskProvider>

);