import ReactDOM from "react-dom/client"; // Import the ReactDOM library from the react-dom/client module.

import "./index.css"; // Import the stylesheet file for the application.

import { RouterProvider } from "react-router-dom"; // Import the RouterProvider component from the react-router-dom library.

import router from "./App"; // Import the router configuration from the App component.

// Create a ReactDOM root element and render the RouterProvider component.
ReactDOM.createRoot(document.getElementById("root")).render(
  <RouterProvider router={router} />
);
