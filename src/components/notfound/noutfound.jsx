import React, { Fragment, memo, lazy, Suspense } from "react";

const NoSsr = lazy(() => import("@material-ui/core/NoSsr"));
const Grid = lazy(() => import("@material-ui/core/Grid"));

const Link = lazy(() =>
  import("react-router-dom").then((module) => ({
    default: module.Link,
  }))
);

/**
 * Component - 404 Not Found Page
 * @description
 * Component for Not Found Page
 */
const NotFoundPage = memo(() => {
  return (
    <Fragment>
      <NoSsr>
        <Suspense fallback={<Fragment>{"Loading..."}</Fragment>}>
          <Grid
            container
            direction="column"
            alignItems="center"
            justify="center"
            style={{ minHeight: "50vh" }}
          >
            <Grid item xs={8} lg={5} md={8} sm={8} xl={8}>
              <Grid
                container
                direction="row"
                justify="center"
                alignItems="center"
              >
                <h1 style={{ textAlign: "center" }}>
                  {"404 - Page Not Found"}
                </h1>
              </Grid>
              <Grid
                container
                direction="row"
                justify="center"
                alignItems="center"
              >
                <Link to="/">{"Click here to Navigate back to Main Page"}</Link>
              </Grid>
            </Grid>
          </Grid>
        </Suspense>
      </NoSsr>
    </Fragment>
  );
});

export default NotFoundPage;
