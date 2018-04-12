import React from 'react';
import Loadable from 'react-loadable';

const Loading = () => <div className="page-loading">Loading...</div>;

export const createRoutes = () => {
  const home = {
    path: '/',
    component: Loadable({
      loader: () => import('./containers/Home'),
      loading: Loading,
    }),
    exact: true,
  };
  const tagPost = {
    path: '/works',
    component: Loadable({
      loader: () => import('./containers/Works'),
      loading: Loading,
    }),
    exact: true,
  };
  const article = {
    path: '/articles',
    component: Loadable({
      loader: () => import('./containers/Article'),
      loading: Loading,
    }),
    exact: true,
  };
  return [home, tagPost, article];
};