import React from "react";
import Header from './Header'
import {Outlet} from 'react-router-dom'

function PageLayout() {
  return (
    <>
      <header className="page-header">
        <Header />
      </header>
      <main>
        <Outlet /> {/* This is where the router puts child content */}
      </main>
    </>
  );
}

export default PageLayout