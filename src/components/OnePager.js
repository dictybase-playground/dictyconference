import React, { Component } from "react";
import scrollToComponent from 'react-scroll-to-component';

import { Container, Container2, Container3, Division, Header, Title, SubTitle, Details, Button, NavBar, ArrowDown1, ArrowDown2, ArrowDown3 } from "./Styles";

class OnePager extends Component {
  render() {
    return (
      <div>
        <NavBar>
          <center>
            <Button onClick={() => scrollToComponent(this.Home, { offset: 0, align: 'top', duration: 1000})}>Home</Button>
            <Button onClick={() => scrollToComponent(this.Venue, { offset: 0, align: 'top', duration: 1000})}>Venue</Button>
            <Button onClick={() => scrollToComponent(this.Travel, { offset: 0, align: 'top', duration: 1500})}>Travel</Button>
            <Button onClick={() => scrollToComponent(this.Registration, { offset: 0, align: 'top', duration: 1500})}>Registration</Button>
            <Button>Abstract</Button>
            <Button>Agenda</Button>
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
            <ArrowDown1 />
          </center>

          <center>
            <Title>Venue</Title>
            <Details>Information about venue (to be added)</Details>
          </center>
        </Container>


        <Container2 dark className="Travel" ref={(section) => { this.Travel = section; }}>
          <center>
            <ArrowDown2 />
            <Container />
            <Title>Travel</Title>
            <Details>Information about venue (to be added)</Details>
          </center>
        </Container2>

        <Container3 dark className="Registration" ref={(section) => { this.Registration = section; }}>
          <center>
            <ArrowDown3 />
            <Container />
            <Title>Registration</Title>
            <Details>Information about registration</Details>
          </center>
        </Container3>

      </div>
    );
  }
}

export default OnePager;
