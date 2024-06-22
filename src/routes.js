import React, { Suspense, Fragment, lazy } from 'react';
import { Routes, Route, Navigate } from 'react-router-dom';

import Loader from './components/Loader/Loader';
import AdminLayout from './layouts/AdminLayout';

import { BASE_URL } from './config/constant';
import AppApi from './Api/app_api';
export const renderRoutes = (routes = []) => (
  <Routes>
    {routes.map((route, i) => {
      const Guard = route.guard || Fragment;
      const Layout = route.layout || Fragment;
      const Element = route.element;
      return (
        <Route
          key={i}
          path={route.path}
          element={<Guard>{route.routes ? renderRoutes(route.routes) : <Element props={true} />}</Guard>}
        ></Route>
      );
    })}
  </Routes>
);
export const renderAuthenticatedRoutes = (routes = []) => (
  <Routes>
    {routes.map((route, i) => {
      const Guard = route.guard || Fragment;
      const Layout = AdminLayout;
      const Element = route.element;
      return (
        <Route
          key={i}
          path={route.path}
          element={
            <Guard>
              <Layout>
                {route.routes ? (
                  renderAuthenticatedRoutes(route.routes)
                ) : AppApi.isLogin() ? (
                  <Element props={true} />
                ) : (
                  <Navigate to="/login" />
                )}
              </Layout>
            </Guard>
          }
        ></Route>
      );
    })}
  </Routes>
);

export const authenticatedRoutes = [
  {
    exact: 'true',
    path: '/dashboard',
    element: lazy(() => import('./App/Dashboard'))
  }
];
const routes = [
  {
    exact: 'true',
    path: '/login',
    element: lazy(() => import('./App/Login'))
  },
  {
    exact: 'true',
    path: '/authorisasi',
    element: lazy(() => import('./App/Authorisasi'))
  }
];

export default routes;
