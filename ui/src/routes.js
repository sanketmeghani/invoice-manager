import React from 'react';
import Invoice from './components/Invoice';
import Preview from './components/Preview';

const routes = [{
  path: '/',
  exact: true,
  component: () => <Invoice />
}, {
  path: '/preview',
  exact: true,
  component: () => <Preview />
}];

export default routes;