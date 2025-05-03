import { createRoot } from 'react-dom/client';
import './index.css'
import React from 'react';
import App from './App';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import Projects from './Sections/Projects/Projects';
import ProjectDetails from './Sections/Projects/ProjectDetails';
import AchievementDetails from './Sections/Achievement/AchievementDetails';

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
  },
  {
    path: "/projects",
    element: <Projects/>,
  },
  {
    path: "/projects/:projectId",
    element: <ProjectDetails />,
  },
  {
    path: "/achievements/:id",
    element: <AchievementDetails />,
  },
]);

const root = createRoot(document.getElementById('root'));

root.render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
