import React, { Fragment } from 'react';
import NavBar from '../../components/NavBar';
import ScrollToTop from '../../components/ScrollToTop';
import HomeContainer from '../../containers/HomeContainer';

const HomePage = () => {
  return (
    <Fragment>
      <NavBar />
      <ScrollToTop />
      <HomeContainer />
    </Fragment>
  );
};

export default HomePage;
