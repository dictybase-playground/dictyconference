import React, { Component } from "react";
import { Container, Division, Title, Button, NavBar } from "./Styles";

class FrontPage extends Component {
  render() {
    return (
      <div>
        <Container top>
          <Title>
            <center>Dictyostelium International Conference</center>
          </Title>
        </Container>
        <Container>
          <NavBar>
            <Button>Home</Button>
            <Button>Venue</Button>
            <Button>Travel</Button>
            <Button>Registration</Button>
            <Button>Abstract</Button>
            <Button>Agenda</Button>
          </NavBar>
        </Container>
        <Container>

        </Container>
      </div>
    );
  }
}

export default FrontPage;
