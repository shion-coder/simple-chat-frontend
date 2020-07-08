import React, { FC, Suspense, lazy } from 'react';

import { Switch, Route } from 'react-router-dom';

import Loading from 'components/loading';

/* -------------------------------------------------------------------------- */

/**
 * Lazy loading components
 */

const Home = lazy(() => import('pages/home'));
const Chat = lazy(() => import('pages/chat'));

const App: FC = () => (
  <>
    <Suspense fallback={<Loading />}>
      <Switch>
        <Route exact path="/" component={Home} />
        <Route exact path="/chat" component={Chat} />
      </Switch>
    </Suspense>
  </>
);

export default App;
