import React, { Fragment, memo, lazy, Suspense, useState } from "react";
import { GET_Request } from "../../service/service";

import "./tablegrid.css";

const NoSsr = lazy(() => import("@material-ui/core/NoSsr"));
const Grid = lazy(() => import("@material-ui/core/Grid"));
const Button = lazy(() => import("@material-ui/core/Button"));

/**
 * Component - Grid Table
 * @description
 * Component for Grid Table
 */
const TableBoard = memo(() => {
 
  const position = [{
   "0": [{"x": 0,"y": 0,"direction": ""},{"x": 0,"y": 0,"direction": ""},{"x": 0,"y": 0,"direction": ""},{"x": 0,"y": 0,"direction": ""},{"x": 0,"y": 0,"direction": ""}],
   "1": [{"x": 1,"y": 0,"direction": ""},{"x": 1,"y": 0,"direction": ""},{"x": 1,"y": 0,"direction": ""},{"x": 1,"y": 0,"direction": ""},{"x": 1,"y": 0,"direction": ""}],
   "2": [{"x": 2,"y": 0,"direction": ""},{"x": 2,"y": 0,"direction": ""},{"x": 2,"y": 0,"direction": ""},{"x": 2,"y": 0,"direction": ""},{"x": 2,"y": 0,"direction": ""}],
   "3": [{"x": 3,"y": 0,"direction": ""},{"x": 3,"y": 0,"direction": ""},{"x": 3,"y": 0,"direction": ""},{"x": 3,"y": 0,"direction": ""},{"x": 3,"y": 0,"direction": ""}],
   "4": [{"x": 4,"y": 0,"direction": ""},{"x": 4,"y": 0,"direction": ""},{"x": 4,"y": 0,"direction": ""},{"x": 4,"y": 0,"direction": ""},{"x": 4,"y": 0,"direction": ""}],
  }]

  const [state, setState] = useState(position);

  const OnExecute = async () => {
    const GetDirections = await GET_Request();
  };

  const OnReset = () => {
    setState(position)
  };

  return (
    <Fragment>
      <Suspense fallback={<Fragment>{"Loading..."}</Fragment>}>
        <NoSsr>
          <Grid
            container
            direction="column"
            alignItems="center"
            justify="center"
            style={{ minHeight: "70vh" }}
          >
            <table>
              <tbody>
                {state.map((row)=>(
                <tr>
                  <td>&nbsp;</td>
                  <td>&nbsp;</td>
                  <td>&nbsp;</td>
                  <td>&nbsp;</td>
                  <td>&nbsp;</td>
                </tr>
                ))}
              </tbody>
            </table>
            <Grid item xs={8} lg={5} md={8} sm={8} xl={8}></Grid>
            <Grid item xs={8} lg={5} md={8} sm={8} xl={8}>
              <Grid
                container
                direction="row"
                justify="center"
                alignItems="center"
              >
                <div style={{ marginTop: "16px" }}>
                  <Button
                    variant="contained"
                    color="primary"
                    style={{ marginRight: "16px" }}
                    onClick={() => OnExecute()}
                  >
                    Execute
                  </Button>
                  <Button
                    variant="contained"
                    color="secondary"
                    onClick={() => OnReset()}
                  >
                    Reset
                  </Button>
                </div>
              </Grid>
            </Grid>
          </Grid>
        </NoSsr>
      </Suspense>
    </Fragment>
  );
});

export default TableBoard;
