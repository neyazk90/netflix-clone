import { createBrowserRouter } from "react-router-dom";
import App from "./App";
import Video from "./pages/Video";
import Gpt from "./pages/Gpt";
import Home from "./pages/Home";
import TypeAHead from "./components/system-design/TypeAHead";
import FolderExplore from "./components/system-design/FolderExplore";
import { explorer } from "./utils/constants";

export const APP_ROUTES = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        index: true,
        element: <Home/>
      },
      {
        path: "browse",
        element: <Video videoId="oelsxH0orHI"/>
      },
      {
        path: "search",
        element: <Gpt/>
      },
      {
        path: "type-ahead",
        element: <TypeAHead/>
      },
      {
        path: "explorer",
        element: <FolderExplore explorer={explorer} />
      },
    ],
  },

])