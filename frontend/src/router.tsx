/*
 * @Description:
 * @Author: Hexon
 * @Date: 2021-11-19 23:38:47
 * @LastEditors: Hexon
 * @LastEditTime: 2021-11-20 17:18:52
 */

import React from 'react';
import {
  Switch,
  Route,
  RouteProps,
} from 'react-router-dom';
import Home from '@/pages/Home';
import Counter from '@/pages/Counter';

import PipelineAll from '@/pages/Pipeline/All';
import PipelineMy from './pages/Pipeline/My';

// const PipelineAll = React.lazy(() => import('@/pages/Pipeline/All'));
// const PipelineMy = React.lazy(() => import('@/pages/Pipeline/My'));


const routes: RouteProps[] = [
  {
    path: '/',
    exact: true,
    component: Home
  },
  {
    path: '/pipeline/all',
    exact: true,
    component: PipelineAll,
  },
  {
    path: '/pipeline/my',
    exact: true,
    component: PipelineMy
  },
  {
    path: '/Counter',
    exact: true,
    component: Counter
  }
];

export default function RouteConfig(): React.ReactElement {
  return (
    <Switch>
      {
        routes.map((route, i) => {
          const Component = route.component as typeof React.Component;
          return (
            <Route key={i} {...route}>
              <Component></Component>
            </Route>
          );
        })
      }
    </Switch>
  );
}