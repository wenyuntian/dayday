import React from 'react';
import Loadable from 'react-loadable';
import Loading from './components/Loading';

const Loadible = () => <Loading></Loading>

export const createRoutes = () => {
  const home = {
    path: '/',
    component: Loadable({
      loader: () => import('./containers/Home'),
      loading: Loadible,
    }),
    exact: true,
  };
  const works = {
    path: '/works',
    component: Loadable({
      loader: () => import('./containers/Works'),
      loading: Loadible,
    }),
    exact: true,
  };
  const article = {
    path: '/article/:postName',
    component: Loadable({
      loader: () => import('./containers/Article'),
      loading: Loadible,
    }),
    exact: true,
  };
  const archive = {
    path: '/archive',
    component: Loadable({
      loader: () => import('./containers/Archive'),
      loading: Loadible,
    }),
    exact: true,
  };
  return [home, works, article, archive];
};