import React, { Fragment, lazy, Suspense, memo } from "react";
import "./App.css";

const NoSsr = lazy(() => import("@material-ui/core/NoSsr"));
const TableBoard = lazy(() => import("../tablegrid/tablegrid.jsx"));
const NotFoundPage = lazy(() => import("../notfound/noutfound.jsx"));

const Switch = lazy(() =>
  import("react-router-dom").then((module) => ({
    default: module.Switch,
  }))
);

const Route = lazy(() =>
  import("react-router-dom").then((module) => ({
    default: module.Route,
  }))
);

const Redirect = lazy(() =>
  import("react-router-dom").then((module) => ({
    default: module.Redirect,
  }))
);

/**
 * Component - App
 * @description
 * Component for Main Page
 */
const App = memo(() => {
  return (
    <Fragment>
      <Suspense fallback={<Fragment>{"Loading..."}</Fragment>}>
        <NoSsr>
          <Switch>
            <Route path="/" exact component={TableBoard} />
            <Route path="/NotFound" component={NotFoundPage} />
            <Redirect to="/NotFound" />
          </Switch>
        </NoSsr>
      </Suspense>
    </Fragment>
  );
});

export default App;
