/*
 * @Description:
 * @Author: Hexon
 * @Date: 2021-11-19 23:38:47
 * @LastEditors: Hexon
 * @LastEditTime: 2021-11-21 23:36:25
 */

import React from 'react';
import {
  Switch,
  Route,
  RouteProps,
} from 'react-router-dom';
import Home from '@/pages/Home';
import Counter from '@/pages/Counter';


const PipelineAll = React.lazy(() => import('@/pages/Pipeline/All'));
const PipelineMy = React.lazy(() => import('@/pages/Pipeline/My'));
const PipelineNew = React.lazy(() => import('@/pages/Pipeline/New'));


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
    path: '/pipeline/new',
    exact: true,
    component: PipelineNew
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