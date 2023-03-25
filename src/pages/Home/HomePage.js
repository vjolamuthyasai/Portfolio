import React, { Fragment, useEffect, useState } from 'react';
import NavBar from '../../components/NavBar';
import Preloader from '../../components/Preloader';
import ScrollToTop from '../../components/ScrollToTop';
import HomeContainer from '../../containers/HomeContainer';
import './Home.css';
const HomePage = () => {
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
        <HomeContainer />
      </div>
    </Fragment>
  );
};

export default HomePage;
