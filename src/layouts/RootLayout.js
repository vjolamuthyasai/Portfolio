import React, { Fragment, useEffect, useState } from 'react';
import { Outlet } from 'react-router-dom';
import NavBar from '../components/NavBar/Navbar';
import Preloader from '../components/Preloader';
import ScrollToTop from '../components/ScrollToTop';

const RootLayout = () => {
  const [load, updateLoad] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      updateLoad(false);
    }, 1200);

    return () => clearTimeout(timer);
  }, []);
  return (
    <Fragment>
      <Preloader />
      <div className="App" id={load ? 'no-scroll' : 'scroll'}>
        <NavBar />
        <ScrollToTop />
        <Outlet />
      </div>
    </Fragment>
  );
};

export default RootLayout;
