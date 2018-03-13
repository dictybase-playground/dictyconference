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

const Venue = () =>
  <div>
    <center>
      <Title>Venue</Title>
      <Details>
        <p>The <b>Dictyostelium International Conference 2018</b> will take place in
        Egmond aan Zee, conveniently located about 40 kilometers from Amsterdam
        International airport Schiphol.</p>
        <p>The Hotel Zuiderduin is located close to
        the beach, offering opportunities to swim, walk and enjoy the sunset.
        The hotel has a <b>WELLNESS CENTER with Swimming pool, Whirlpool and
        saunas, sport facilities for BOWLING, SQUASH COURT and FITNESS ROOM.</b></p>
        <p>You can rent bicycles in the hotel to enjoy the village and the dunes.</p>
      </Details>
    </center>
  </div>;

export default Venue;
