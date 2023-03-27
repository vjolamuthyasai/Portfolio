import React from 'react';
import { useRoutes } from 'react-router-dom';
import AboutContainer from './containers/About/AboutContainer';
import HomeContainer from './containers/Home/HomeContainer';
import ResumeContainer from './containers/Resume/ResumeContainer';
import RootLayout from './layouts/RootLayout';

export const Router = () => {
  const routes = useRoutes([
    {
      path: '/',
      element: <RootLayout />,
      children: [
        { path: '/', element: <HomeContainer /> },
        { path: '/about', element: <AboutContainer /> },
        { path: '/resume', element: <ResumeContainer /> },
      ],
    },
  ]);
  return routes;
};
