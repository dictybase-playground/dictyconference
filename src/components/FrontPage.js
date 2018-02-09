import React, { Component } from "react";
import { Container, Division, Header, Title, SubTitle, Details, Button, NavBar } from "./Styles";

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
        <Container>

        </Container>
      </Container>
    );
  }
}

export default FrontPage;
