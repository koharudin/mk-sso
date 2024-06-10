import React from 'react';
import { BrowserRouter, Routes } from 'react-router-dom';

// auth provider

import routes, { renderAuthenticatedRoutes, renderRoutes, authenticatedRoutes } from './routes';
import { Suspense } from 'react';
import Loader from './components/Loader/Loader';

const App = () => {
  return (
    <React.Fragment>
      <BrowserRouter basename={process.env.REACT_APP_BASE_NAME}>
        <Suspense fallback={<Loader />}>
          {renderRoutes(routes)}
          {renderAuthenticatedRoutes(authenticatedRoutes)}
        </Suspense>
      </BrowserRouter>
    </React.Fragment>
  );
};

export default App;
