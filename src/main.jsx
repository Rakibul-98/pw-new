import { createRoot } from 'react-dom/client';
import './index.css'
import React from 'react';
import App from './App';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
  },
  {
    path: "/project",
    element: <div>hello projects</div>,
  },
]);

const root = createRoot(document.getElementById('root'));

root.render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
