import React from 'react';
import { useRoutes } from 'react-router-dom';
import AboutPage from './pages/About/About';
import HomePage from './pages/Home/HomePage';
import RootLayout from './pages/RootLayout';

export const Router = () => {
  const routes = useRoutes([
    {
      path: '/',
      element: <RootLayout />,
      children: [
        { path: '/', element: <HomePage /> },
        { path: '/about', element: <AboutPage /> },
      ],
    },
  ]);
  return routes;
};
