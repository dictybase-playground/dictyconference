import React, { Component } from "react";
import scrollToComponent from "react-scroll-to-component";
import headerImage from "./Images/header_image_3.jpg";

import HomeBody from "./Version2Components/HomeBody";
import Venue from "./Version2Components/Venue";
import Travel from "./Version2Components/Travel";
import Registration from "./Version2Components/Registration";
import Abstract from "./Version2Components/Abstract";
import Agenda from "./Version2Components/Agenda";

import {
  Container,
  Body,
  Division,
  Header,
  Title,
  SubTitle,
  Details,
  Button,
  NavBar,
  ArrowDown1,
  ArrowDown2,
  ArrowDown3
} from "./Version2Styles";
import { BrowserRouter as Router, Route, Link, Switch } from 'react-router-dom';


import Grid from "material-ui/Grid";

const Version2 = () =>
  <div>
    <Container>
      <img src={headerImage} width="100%" alt="Header Image" />
      <NavBar>
        <center>
          <Grid container spacing={8}>
            <Grid item sm={2} xs={4}>
              <Button>Home</Button>
            </Grid>
            <Grid item sm={2} xs={4}>
              <Button>Venue</Button>
            </Grid>
            <Grid item sm={2} xs={4}>
              <Button>Travel</Button>
            </Grid>
            <Grid item sm={2} xs={4}>
              <Button>Registration</Button>
            </Grid>
            <Grid item sm={2} xs={4}>
              <Button>Abstract</Button>
            </Grid>
            <Grid item sm={2} xs={4}>
              <Button>Agenda</Button>
            </Grid>
          </Grid>
        </center>
      </NavBar>

      <Router>
        <div>
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
