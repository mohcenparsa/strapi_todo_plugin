/**
 *
 * This component is the skeleton around the actual pages, and should only
 * contain code that should be seen on all pages. (e.g. navigation bar)
 *
 */

import React from 'react';
import { Switch, Route } from 'react-router-dom';
import { AnErrorOccurred } from '@strapi/helper-plugin';
import {
  QueryClient,
  QueryClientProvider,
} from '@tanstack/react-query'
import { ReactQueryDevtools } from '@tanstack/react-query-devtools'
import pluginId from '../../pluginId';
import HomePage from '../HomePage';

const queryClient = new QueryClient()

const App = () => {
  return (
    <div>
      <QueryClientProvider client={queryClient}>
        <Switch>
          <Route path={`/plugins/${pluginId}`} component={HomePage} exact />
          <Route component={AnErrorOccurred} />
        </Switch>
        <ReactQueryDevtools />
      </QueryClientProvider>
    </div>
  );
};

export default App;
