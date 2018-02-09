import React, { Component } from "react";
import { Container, Division, Header, Title, SubTitle, Details, Button, NavBar, ArrowDown1, ArrowDown2 } from "./Styles";

class FrontPage extends Component {
  render() {
    return (
      <Container>
        <Container>
          <NavBar>
            <center>
              <Button>Home</Button>
              <Button>Venue</Button>
              <Button>Travel</Button>
              <Button>Registration</Button>
              <Button>Abstract</Button>
              <Button>Agenda</Button>
            </center>
          </NavBar>
        </Container>
        <Container>
          <Header>
            <Title>Dicty 2018</Title>
            <SubTitle>Annual International Dictyostelium Conference</SubTitle>
            <Details>August 12 to August 16, 2018, The Netherlands</Details>
            <Details>Egmond aan Zee</Details>
          </Header>
        </Container>

        <center>
          <ArrowDown1 />
        </center>

        <Container>
          <center>
            <Title>Venue</Title>
            <Details dark>Information about venue (to be added)</Details>
          </center>
        </Container>


        <Container>
          <center>
            <ArrowDown2 />
          </center>
          
          <center>
            <Title>Venue</Title>
            <Details dark>Information about venue (to be added)</Details>
          </center>
        </Container>

      </Container>
    );
  }
}

export default FrontPage;
