import React from "react";
import headerImage from "./Images/header_image_3.jpg";

import HomeBody from "./Version2Components/HomeBody";
import Venue from "./Version2Components/Venue";
import Travel from "./Version2Components/Travel";
import Registration from "./Version2Components/Registration";
import Abstract from "./Version2Components/Abstract";
import Agenda from "./Version2Components/Agenda";

import { Container, Button, NavBar } from "./Version2Styles";
import { BrowserRouter as Router, Route, Link, Switch } from "react-router-dom";

import Grid from "material-ui/Grid";

const Version2 = () =>
  <div>
    <Container>
      <img src={headerImage} width="100%" alt="Header background" />

      <Router>
        <div>
          <NavBar>
            <center>
              <Grid container spacing={8}>
                <Grid item sm={2} xs={4}>
                  <Link to="/version2">
                    <Button>Home</Button>
                  </Link>
                </Grid>
                <Grid item sm={2} xs={4}>
                  <Link to="/version2/venue">
                    <Button>Venue</Button>
                  </Link>
                </Grid>
                <Grid item sm={2} xs={4}>
                  <Link to="/version2/travel">
                    <Button>Travel</Button>
                  </Link>
                </Grid>
                <Grid item sm={2} xs={4}>
                  <Link to="/version2/registration">
                    <Button>Registration</Button>
                  </Link>
                </Grid>
                <Grid item sm={2} xs={4}>
                  <Link to="/version2/abstract">
                    <Button>Abstract</Button>
                  </Link>
                </Grid>
                <Grid item sm={2} xs={4}>
                  <Link to="/version2/agenda">
                    <Button>Agenda</Button>
                  </Link>
                </Grid>
              </Grid>
            </center>
          </NavBar>

          <Route exact path="/version2" component={HomeBody} />
          <Switch>
            <Route path="/version2/venue" component={Venue} />
            <Route path="/version2/travel" component={Travel} />
            <Route path="/version2/registration" component={Registration} />
            <Route path="/version2/abstract" component={Abstract} />
            <Route path="/version2/agenda" component={Agenda} />
          </Switch>
        </div>
      </Router>
    </Container>
  </div>;

export default Version2;
