import { createBrowserRouter } from "react-router-dom";
import App from "./App";

export const APP_ROUTES = createBrowserRouter([
    {
        path: "/",
        element: <App />,
        children: [
            {
              path: "browse",
              element: <h1> Browse Page</h1>
            },
          ],
    },
    
])