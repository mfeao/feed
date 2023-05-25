import React from 'react';
import type { RouteObject } from 'react-router-dom';
import { Layout } from '~/layouts';
import { Feed, Post } from '~/pages';

const routes: RouteObject[] = [
  {
    path: 'feed',
    element: React.createElement(Layout),
    children: [
      {
        index: true,
        element: React.createElement(Feed),
      },
      {
        path: ':postSlug',
        element: React.createElement(Post),
      },
    ],
  },
];

export default routes;
