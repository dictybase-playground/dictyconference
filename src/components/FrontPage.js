import React, { Component } from "react";
import { Container, Division, Title, Button } from "./Styles";

class FrontPage extends Component {
  render() {
    return (
      <div>
        <Container>
          <Title>
            <center>Dictyostelium International Conference</center>
          </Title>
        </Container>
        <Container>
          <center>
            <Button>Home</Button>
            <Button>Venue</Button>
            <Button>Travel</Button>
            <Button>Registration</Button>
            <Button>Abstract</Button>
            <Button>Agenda</Button>
          </center>
        </Container>
      </div>
    );
  }
}

export default FrontPage;
