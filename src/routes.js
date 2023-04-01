import React from 'react';
import { useRoutes } from 'react-router-dom';
import AboutContainer from './containers/About/AboutContainer';
import HomeContainer from './containers/Home/HomeContainer';
import ProjectContainer from './containers/Project/ProjectsContainer';
import ResumeContainer from './containers/Resume/ResumeContainer';
import RootLayout from './layouts/RootLayout';
export const Router = () => {
  const routes = useRoutes([
    {
      path: '/',
      element: <RootLayout />,
      children: [
        { index: true, element: <HomeContainer /> },
        { path: '/about', element: <AboutContainer /> },
        { path: '/resume', element: <ResumeContainer /> },
        { path: '/project', element: <ProjectContainer /> },
      ],
    },
  ]);
  return routes;
};
