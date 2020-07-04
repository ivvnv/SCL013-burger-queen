import React from 'react';
import Header from '../Global/Header';
import Footer from '../Global/Footer';
import { Route } from "react-router-dom";

const Layout = ({path, component}) => {
  return (
    <>
    {path !== '/' ?  <Header title="Inicio" /> : null}
      <Route exact path={path} component={component}  />
      <Footer />
    </>
  );
}

export default Layout;
