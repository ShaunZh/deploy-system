import React, { Suspense } from 'react';
import './style';
import RouteConfig from './router';
import { HashRouter as Router } from 'react-router-dom';
import Layout from '@/components/Layout/Base';
import { Spin } from 'antd';

export default function App(): React.ReactElement {
  return (
    <Router>
      <Layout>
        <Suspense fallback={<Spin />} >
          <RouteConfig></RouteConfig>
        </Suspense>
      </Layout>
    </Router>
  );
}
