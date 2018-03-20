import React, { Component } from "react";
import scrollToComponent from "react-scroll-to-component";
import headerImage from "./Images/header_image_3.jpg";

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
      <Body>
        <Title>Dicty 2018</Title>
        <SubTitle>Annual International Dictyostelium Conference</SubTitle>
        <Details>August 12 to August 16, 2018, The Netherlands</Details>
        <Details>Egmond aan Zee</Details>
      </Body>
    </Container>
  </div>;

export default Version2;
