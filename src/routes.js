import React from 'react';
import { useRoutes } from 'react-router-dom';
import HomePage from './pages/Home/HomePage';
export const Router = () => {
  const routes = useRoutes([
    {
      path: '/',
      element: <HomePage />,
      children: [],
    },
  ]);
  return routes;
};
