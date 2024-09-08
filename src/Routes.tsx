import { createBrowserRouter } from "react-router-dom";
import App from "./App";
import Video from "./pages/Video";
import Gpt from "./pages/Gpt";

export const APP_ROUTES = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        path: "browse",
        element: <Video videoId="oelsxH0orHI"/>
      },
      {
        path: "search",
        element: <Gpt/>
      },
    ],
  },

])