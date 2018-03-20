import React, { Component } from "react";
import scrollToComponent from "react-scroll-to-component";

import PropTypes from "prop-types";
import { withStyles } from "material-ui/styles";
import Button from "material-ui/Button";

import {
  Container,
  Container2,
  Container3,
  Division,
  Header,
  Title,
  SubTitle,
  Details
} from "../OnePageStyles";

const styles = theme => ({
  button: {
    margin: 5,
    padding: "10px 10px",
    border: "2px solid #011f4b",
    color: "#011f4b",
    '&:hover': {
      cursor: "pointer",
      background: "#011f4b",
      color: "white",
    }
  },
})

const Top = () =>
  <Header>
    <Title>Dicty 2018</Title>
    <SubTitle>Annual International Dictyostelium Conference</SubTitle>
    <Details>August 12 to August 16, 2018, The Netherlands</Details>
    <Details>Egmond aan Zee</Details>
  </Header>;

export default Top;
