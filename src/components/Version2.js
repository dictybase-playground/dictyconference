import React, { Component } from "react";
import scrollToComponent from 'react-scroll-to-component';

import { Container, Container2, Container3, Division, Header, Title, SubTitle, Details, Button, NavBar, ArrowDown1, ArrowDown2, ArrowDown3 } from "./OnePageStyles";

const Version2 = () => (
    <div>
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
      <Container>
      </Container>
      <Container className="Home" ref={(section) => { this.Home = section; }}>
        <Header>
          <Title>Dicty 2018</Title>
          <SubTitle>Annual International Dictyostelium Conference</SubTitle>
          <Details>August 12 to August 16, 2018, The Netherlands</Details>
          <Details>Egmond aan Zee</Details>
        </Header>
      </Container>

      <Container className="Venue" ref={(section) => { this.Venue = section; }}>

        <center>
          <Title>Venue</Title>
          <Details>Information about venue (to be added)</Details>
        </center>
      </Container>


      <Container2 dark className="Travel" ref={(section) => { this.Travel = section; }}>
        <center>
          <Container />
          <Title>Travel</Title>
          <Details>Information about venue (to be added)</Details>
        </center>
      </Container2>

      <Container3 dark className="Registration" ref={(section) => { this.Registration = section; }}>
        <center>
          <Container />
          <Title>Registration</Title>
          <Details>Information about registration</Details>
        </center>
      </Container3>


      <Container className="Abstract" ref={(section) => { this.Abstract = section; }}>
        <center>
          <Container />
          <Title>Abstract</Title>
          <Details>The abstract (to be added)</Details>
        </center>
      </Container>

      <Container2 dark className="Agenda" ref={(section) => { this.Agenda = section; }}>
        <center>
          <Container />
          <Title>Agenda</Title>
          <Details>Information about agenda (to be added)</Details>
        </center>
      </Container2>

    </div>
)

export default Version2;
