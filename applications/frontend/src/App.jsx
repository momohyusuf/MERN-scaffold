import { createBrowserRouter } from "react-router-dom";

// Import the Home and About components from their respective pages
import Home from "../pages/Home";

// Create a router using the createBrowserRouter function
const router = createBrowserRouter([
  {
    // Define a route for the home page
    path: "/",
    // Specify the Home component as the element to be rendered for this route
    element: <Home />,
  },
]);

// Export the router
export default router;
