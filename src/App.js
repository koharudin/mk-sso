import React from 'react';
import { BrowserRouter, Routes,Switch } from 'react-router-dom';

// auth provider

import routes, { renderAuthenticatedRoutes, renderRoutes, authenticatedRoutes } from './routes';
import { Suspense } from 'react';
import Loader from './components/Loader/Loader';

const App = () => {
  return (
    <React.Fragment>
      
      <Suspense fallback={<Loader />}>
      <BrowserRouter basename={process.env.REACT_APP_PUBLIC_URL}>
        <Switch>
          {renderRoutes(routes)}
          {renderAuthenticatedRoutes(authenticatedRoutes)}
          </Switch>
      </BrowserRouter>
      </Suspense>
    </React.Fragment>
  );
};

export default App;
