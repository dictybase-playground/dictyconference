import React, { Component } from "react";
import scrollToComponent from "react-scroll-to-component";

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
} from "../OnePageStyles";

const Travel = () =>
  <div>
    <center>
      <Title>Travel</Title>
    </center>
      <Details>
        <p>The <b>Dictyostelium International Conference 2018</b> will take place in
        Egmond aan Zee, conveniently located about 40 kilometers from Amsterdam
        International airport Schiphol.</p>
        <p>By Public Transportation (about 1:20
        hours, €12). Follow the link and fill in the date and time of travel:
        <p>
        <a>https://9292.nl/en/journeyadvice/station-schiphol-airport/egmond-aan-zee_1931vl/departure</a></p></p>
        In the airport take the train to Castricum (switch trains in Amsterdam
        Sloterdijk) and take the bus to 1931vl Egmonds aan Zee
        <p>By taxi (about 45 minutes, €120).</p>
        <p>By shuttle from the hotel (about xx, €xx). Link will
        follow</p>
      </Details>
  </div>;

export default Travel;