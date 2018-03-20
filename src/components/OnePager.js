import React, { Component } from "react";
import scrollToComponent from 'react-scroll-to-component';

import PropTypes from "prop-types";
import { withStyles } from "material-ui/styles";

import Button from "material-ui/Button";
import AppBar from "material-ui/AppBar";
import Toolbar from "material-ui/Toolbar";
import Typography from "material-ui/Typography";

import { Container, Container2, Container3, HeaderContainer, Division, Header, Title, SubTitle, Details } from "./OnePageStyles";

import Top from "./OnePagerSections/Top";
import Venue from "./OnePagerSections/Venue";
import Travel from "./OnePagerSections/Travel";
import Registration from "./OnePagerSections/Registration";
import Abstract from "./OnePagerSections/Abstract";
import Agenda from "./OnePagerSections/Agenda";

const styles = theme => ({
  button: {
    margin: 5,
    border: "2px solid #011f4b",
    color: "#011f4b",
    '&:hover': {
      cursor: "pointer",
      background: "#011f4b",
      color: "white",
    }
  },
  button2: {
    margin: 5,
    border: "2px solid white",
    color: "white",
    '&:hover': {
      cursor: "pointer",
      background: "white",
      color: "#011f4b",
    }
  },
  leftIcon: {
    marginRight: theme.spacing.unit,
  },
  flex: { /* For spacing of the menubar */
    flex: 1,
  },
})


const OnePager = (props) => (
    <div>
      <AppBar position="sticky" color="default">
        <Toolbar>
          <Typography variant="title" color="inherit" className={props.classes.flex}>
            dicty 2018
          </Typography>

          <Button className={props.classes.button} onClick={() => scrollToComponent(this.Home, { offset: 0, align: 'top', duration: 1000})}>Home</Button>
          <Button className={props.classes.button} onClick={() => scrollToComponent(this.Venue, { offset: 0, align: 'top', duration: 1000})}>Venue</Button>
          <Button className={props.classes.button} onClick={() => scrollToComponent(this.Travel, { offset: 0, align: 'top', duration: 1500})}>Travel</Button>
          <Button className={props.classes.button} onClick={() => scrollToComponent(this.Registration, { offset: 0, align: 'top', duration: 1500})}>Register</Button>
          <Button className={props.classes.button} onClick={() => scrollToComponent(this.Abstract, { offset: 0, align: 'top', duration: 1500})}>Abstract</Button>
          <Button className={props.classes.button} onClick={() => scrollToComponent(this.Agenda, { offset: 0, align: 'top', duration: 1500})}>Agenda</Button>
        </Toolbar>
      </AppBar>

      <Container className="Home" ref={(section) => {this.Home = section; }}>
        <Top/>
        <center>
          <Button className={props.classes.button2} onClick={() => scrollToComponent(this.Venue, { offset: 0, align: 'top', duration: 1000})}>
Venue</Button>
          <Button className={props.classes.button2} onClick={() => scrollToComponent(this.Travel, { offset: 0, align: 'top', duration: 1500})}>Travel</Button>
          <Button className={props.classes.button2} onClick={() => scrollToComponent(this.Registration, { offset: 0, align: 'top', duration: 1500})}>Register</Button>
          <Button className={props.classes.button2} onClick={() => scrollToComponent(this.Abstract, { offset: 0, align: 'top', duration: 1500})}>Abstract</Button>
          <Button className={props.classes.button2} onClick={() => scrollToComponent(this.Agenda, { offset: 0, align: 'top', duration: 1500})}>Agenda</Button>
        </center>
      </Container>

      <Container3 className="Venue" ref={(section) => { this.Venue = section; }}>
        <Venue />
      </Container3>


      <Container2 dark className="Travel" ref={(section) => { this.Travel = section; }}>
        <Travel />
      </Container2>

      <Container3 dark className="Registration" ref={(section) => { this.Registration = section; }}>
        <Registration />
      </Container3>


      <Container dark className="Abstract" ref={(section) => { this.Abstract = section; }}>
        <Abstract />
      </Container>

      <Container2 dark className="Agenda" ref={(section) => { this.Agenda = section; }}>
        <Agenda />
      </Container2>

    </div>
)

OnePager.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(OnePager);
