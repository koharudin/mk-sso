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
    path: '/usulan-ku/daftar-usulan',
    element: lazy(() => import('./Pelayanan/GridUsulanLayanan'))
  },
  {
    exact: 'true',
    path: '/verifikasi-usulan',
    element: lazy(() => import('./Pelayanan/VerifikasiUsulanLayanan'))
  },
  {
    exact: 'true',
    path: '/verifikasi-usulan/:uuid_usulan/detail',
    element: lazy(() => import('./Pelayanan/DetailVerifikasiUsulan'))
  },
  {
    exact: 'true',
    path: '/usulan-ku/buat-baru',
    element: lazy(() => import('./Pelayanan/WizardUsulan'))
  },
  {
    exact: 'true',
    path: '/usulan-ku/daftar-usulan/:kategori_layanan/baru',
    element: lazy(() => import('./Pelayanan/BuatUsulan'))
  },
  {
    exact: 'true',
    path: '/daftar-usulan/:uuid_usulan/detail',
    element: lazy(() => import('./Pelayanan/DetailUsulan'))
  },
  {
    exact: 'true',
    path: '/usulan-ku/daftar-usulan/:id_usulan/edit',
    element: lazy(() => import('./Pelayanan/EditUsulan'))
  },
  {
    exact: 'true',
    path: '/dashboard',
    element: lazy(() => import('./Pelayanan/Dashboard'))
  },
  {
    exact: 'true',
    path: '/basic/button',
    element: lazy(() => import('./views/ui-elements/basic/BasicButton'))
  },
  {
    exact: 'true',
    path: '/basic/badges',
    element: lazy(() => import('./views/ui-elements/basic/BasicBadges'))
  },
  {
    exact: 'true',
    path: '/basic/breadcrumb',
    element: lazy(() => import('./views/ui-elements/basic/BasicBreadcrumb'))
  },
  {
    exact: 'true',
    path: '/basic/pagination',
    element: lazy(() => import('./views/ui-elements/basic/BasicPagination'))
  },
  {
    exact: 'true',
    path: '/basic/collapse',
    element: lazy(() => import('./views/ui-elements/basic/BasicCollapse'))
  },
  {
    exact: 'true',
    path: '/basic/tabs-pills',
    element: lazy(() => import('./views/ui-elements/basic/BasicTabsPills'))
  },
  {
    exact: 'true',
    path: '/basic/typography',
    element: lazy(() => import('./views/ui-elements/basic/BasicTypography'))
  },
  {
    exact: 'true',
    path: '/forms/form-basic',
    element: lazy(() => import('./views/forms/FormsElements'))
  },
  {
    exact: 'true',
    path: '/tables/bootstrap',
    element: lazy(() => import('./views/tables/BootstrapTable'))
  },
  {
    exact: 'true',
    path: '/charts/nvd3',
    element: lazy(() => import('./views/charts/nvd3-chart'))
  },
  {
    exact: 'true',
    path: '/maps/google-map',
    element: lazy(() => import('./views/maps/GoogleMaps'))
  },
  {
    exact: 'true',
    path: '/sample-page',
    element: lazy(() => import('./views/extra/SamplePage'))
  }
];
const routes = [
  {
    exact: 'true',
    path: '/login',
    element: lazy(() => import('./Pelayanan/Login'))
  },
  {
    exact: 'true',
    path: '/test',
    element: lazy(() => import('./Pelayanan/Test'))
  },
  {
    exact: 'true',
    path: '/',
    element: (lazy(() => import('./Pelayanan/Homepage')))
  }
];

export default routes;
