import React, { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'

import './index.css'
import { RouterProvider } from 'react-router-dom'
import { APP_ROUTES } from './Routes.tsx'



createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <RouterProvider router={APP_ROUTES} />
  </React.StrictMode>
);