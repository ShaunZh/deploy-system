import React, { Suspense } from 'react';
import './style';
import RouteConfig from './router';
import { HashRouter as Router } from 'react-router-dom';
import Layout from '@/components/Layout/Base';
import { Spin } from 'antd';

export default function App(): React.ReactElement {
  return (
    <Suspense fallback={<Spin />} >
      <Router>
        <Layout>
          <RouteConfig></RouteConfig>
        </Layout>
      </Router>
    </Suspense>
  );
}
