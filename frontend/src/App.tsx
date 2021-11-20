import React from 'react';
import './style';
import RouteConfig from './router';
import { HashRouter as Router } from 'react-router-dom';
import Layout from '@/components/Layout/Base';

export default function App(): React.ReactElement {
  return (
    <Router>
      <Layout>
        <RouteConfig></RouteConfig>
      </Layout>
    </Router>
  );
}
