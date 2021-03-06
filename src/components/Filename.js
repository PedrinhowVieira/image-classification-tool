import React, { Component, Fragment } from "react";
import { Button, Grid } from '@material-ui/core/';
import { withGlobalState } from 'react-globally'

class Filename extends Component {
  changeState = (i) => {
    this.props.setGlobalState({
      filename: {
        done: true,
        data: [i],
      }
    });
  }

  render() {
    return (
      <Fragment>
        <div>
          Global State {this.props.globalState.filename.data}
        </div>
        <Grid container spacing={8}>
          <Grid container item xs={12} spacing={8}>
            <Grid item xs={6}>
              <Button variant="contained" onClick={() => this.changeState(1)}>
                <img src={require('./../Images/gallery3.jpg')} height="300rem" width="600rem" alt="" />
              </Button>
            </Grid>
            <Grid item xs={6}>
              <Button variant="contained" onClick={() => this.changeState(2)}>
                <img src={require('./../Images/gallery3.jpg')} height="300rem" width="600rem" alt="" />
              </Button>
            </Grid>
          </Grid>
          <Grid container item xs={12} spacing={8}>
            <Grid item xs={6}>
              <Button variant="contained" onClick={() => this.changeState(3)}>
                <img src={require('./../Images/gallery3.jpg')} height="300rem" width="600rem" alt="" />
              </Button>
            </Grid>
            <Grid item xs={6}>
              <Button variant="contained" onClick={() => this.changeState(4)}>
                <img src={require('./../Images/gallery3.jpg')} height="300rem" width="600rem" alt="" />
              </Button>
            </Grid>
          </Grid>
        </Grid>
      </Fragment>
    );
  }
}

export default withGlobalState(Filename);