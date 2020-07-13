import React, {lazy, Suspense} from 'react';
import {Switch, Route, BrowserRouter as Router} from 'react-router-dom';

import {PrivateRoute} from 'components/private-route';

const LoginPage = lazy(() => import('./pages/login'));
const MainPage = lazy(() => import('./pages/main-page'));

const App = () => {
  return (
    <Router>
      <div className="container">
        <Suspense fallback={<>loading</>}>
          <Switch>
            <Route path="/login" component={LoginPage} exact />
            <PrivateRoute path="/">
              <MainPage />
            </PrivateRoute>
          </Switch>
        </Suspense>
      </div>
    </Router>
  );
};

export default App;
