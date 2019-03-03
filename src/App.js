import React, { useState, Fragment } from 'react';

import { ThemeProvider } from 'styled-components';
import theme from './utils/theme';
import GlobalStyles from './utils/GlobalStyles';

import Splash from './components/Splash';
import About from './components/About';
import SpecializationsHeading from './components/SpecializationsASCII';
import MongoPanel from './components/MongoPanel';
import ExpressPanel from './components/ExpressPanel';
import ReactPanel from './components/ReactPanel';
import NodePanel from './components/NodePanel';
import MetricsHeading from './components/MetricsHeading';
import MetricsPanel from './components/MetricsPanel';

const App = () => {

  return (
    <Fragment>
      <GlobalStyles />

      <ThemeProvider theme={ theme }>
        <Fragment>
          <Splash />
          <About />
          <SpecializationsHeading />
          <MongoPanel />
          <ExpressPanel />
          <ReactPanel />
          <NodePanel />
          <MetricsHeading />
          <MetricsPanel />
        </Fragment>
      </ThemeProvider>
    </Fragment>
  )
}

export default App;
