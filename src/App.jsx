/* eslint-disable react/jsx-wrap-multilines */
import React from 'react';
import {
  BrowserRouter as Router,
  Route,
  Switch,
} from 'react-router-dom';
import Navbar from './components/Navbar';

const ListSneakers = React.lazy(() => import('./views/ListSneakers'));
const ViewSneakerDetails = React.lazy(() =>
  import('./views/ViewSneakerDetail'),
);
const ViewCart = React.lazy(() => import('./views/ViewCart'));
const FourOhFour = React.lazy(() => import('./views/404'));

const App = () => {
  return (
    <React.Suspense
      fallback={
        <div
          className="d-flex justify-content-center"
          style={{ marginTop: '40vh' }}
        >
          <div className="spinner-grow text-dark" role="status">
            <span className="sr-only">Loading...</span>
          </div>
        </div>
      }
    >
      <Router>
        <Navbar />
        <Switch>
          <Route exact path="/" render={() => <ListSneakers />} />
          <Route
            exact
            path="/sneakers/:id"
            render={() => <ViewSneakerDetails />}
          />
          <Route exact path="/cart" render={() => <ViewCart />} />
          <Route exact path="*" render={() => <FourOhFour />} />
        </Switch>
      </Router>
    </React.Suspense>
  );
};

export default App;
