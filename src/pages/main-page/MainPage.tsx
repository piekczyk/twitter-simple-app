import React, {Suspense} from 'react';
import {Switch, Route} from 'react-router-dom';

import {NotFoundPage} from 'pages/not-found-page';
import {Dashboard} from 'views/dashboard';
import {Wall} from 'components/wall';
import {PostDetails} from 'components/post-details';

const MainPage: React.FC = () => {
  return (
    <Suspense fallback={<>Loading</>}>
      <Switch>
        <Route
          path="/"
          render={props => (
            <Dashboard {...props} render={dashboardProps => <Wall {...dashboardProps} />} />
          )}
          exact
        />
        <Route
          path="/post/:id"
          render={props => (
            <Dashboard {...props}>
              <PostDetails id={props.match.params.id} />
            </Dashboard>
          )}
        />
        <Route component={NotFoundPage} />
      </Switch>
    </Suspense>
  );
};

export default MainPage;
