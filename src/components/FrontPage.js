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
          <Button selected>Home</Button>
          <Button>Venue</Button>
        </Container>
      </div>
    );
  }
}

export default FrontPage;
