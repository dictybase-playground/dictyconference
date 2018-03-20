import React, { Component } from "react";
import scrollToComponent from "react-scroll-to-component";
import headerImage from "./Images/header_image_3.jpg";

import {
  Container,
  Container2,
  Container3,
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

const Version2 = () =>
  <div>
    <Container>
      <img src={headerImage} width="100%" alt="Header Image" />
      <NavBar>
        <center>
          <Button onClick={() => scrollToComponent(this.Home, { offset: 0, align: 'top', duration: 1000})}>Home</Button>
          <Button onClick={() => scrollToComponent(this.Venue, { offset: 0, align: 'top', duration: 1000})}>Venue</Button>
          <Button onClick={() => scrollToComponent(this.Travel, { offset: 0, align: 'top', duration: 1500})}>Travel</Button>
          <Button onClick={() => scrollToComponent(this.Registration, { offset: 0, align: 'top', duration: 1500})}>Registration</Button>
          <Button onClick={() => scrollToComponent(this.Abstract, { offset: 0, align: 'top', duration: 1500})}>Abstract</Button>
          <Button onClick={() => scrollToComponent(this.Agenda, { offset: 0, align: 'top', duration: 1500})}>Agenda</Button>
        </center>
      </NavBar>
      <Header>
        <Title>Dicty 2018</Title>
        <SubTitle>Annual International Dictyostelium Conference</SubTitle>
        <Details>August 12 to August 16, 2018, The Netherlands</Details>
        <Details>Egmond aan Zee</Details>
      </Header>
    </Container>
  </div>;

export default Version2;
