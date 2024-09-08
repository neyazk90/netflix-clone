import React, { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'

import './index.css'
import { RouterProvider } from 'react-router-dom'
import { APP_ROUTES } from './Routes.tsx'
import { Provider } from 'react-redux'
import { store } from './store/store.ts'



createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
     <Provider store={store}>
      <RouterProvider router={APP_ROUTES} />
      </Provider>
  </React.StrictMode>
);