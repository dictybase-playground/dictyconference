import React, { Component } from "react";
import { Container, Container2, Container3, Division, Header, Title, SubTitle, Details, Button, NavBar, ArrowDown1, ArrowDown2, ArrowDown3 } from "./Styles";

class FrontPage extends Component {
  render() {
    return (
      <div>
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
        <Container>
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
          <center>
            <ArrowDown1 />
          </center>

          <center>
            <Title>Venue</Title>
            <Details>Information about venue (to be added)</Details>
          </center>
        </Container>


        <Container2 dark>
          <center>
            <ArrowDown2 />
            <Container />
            <Title>Travel</Title>
            <Details>Information about venue (to be added)</Details>
          </center>
        </Container2>

        <Container3 dark>
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

export default FrontPage;
