import React from "react";
import scrollToComponent from "react-scroll-to-component";
import { withStyles } from "material-ui/styles";
import Button from "material-ui/Button";
import AppBar from "material-ui/AppBar";
import Toolbar from "material-ui/Toolbar";
import Typography from "material-ui/Typography";
import Grid from "material-ui/Grid";
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
    "&:hover": {
      cursor: "pointer",
      background: "#011f4b",
      color: "white"
    }
  },
  flex: {
    /* For spacing of the menubar */
    flex: 1
  },
  darkContainer: {
    backgroundColor: "#011f4b"
  }
});

const OnePager = props =>
  <div>
    <AppBar position="sticky" color="default">
      <Toolbar>
        <Typography
          variant="title"
          color="inherit"
          className={props.classes.flex}
        >
          dicty 2018
        </Typography>

        <Button
          className={props.classes.button}
          onClick={() =>
            scrollToComponent(this.Home, {
              offset: 0,
              align: "top",
              duration: 1000
            })}
        >
          Home
        </Button>
        <Button
          className={props.classes.button}
          onClick={() =>
            scrollToComponent(this.Venue, {
              offset: 0,
              align: "top",
              duration: 1000
            })}
        >
          Venue
        </Button>
        <Button
          className={props.classes.button}
          onClick={() =>
            scrollToComponent(this.Travel, {
              offset: 0,
              align: "top",
              duration: 1500
            })}
        >
          Travel
        </Button>
        <Button
          className={props.classes.button}
          onClick={() =>
            scrollToComponent(this.Registration, {
              offset: 0,
              align: "top",
              duration: 1500
            })}
        >
          Register
        </Button>
        <Button
          className={props.classes.button}
          onClick={() =>
            scrollToComponent(this.Abstract, {
              offset: 0,
              align: "top",
              duration: 1500
            })}
        >
          Abstract
        </Button>
        <Button
          className={props.classes.button}
          onClick={() =>
            scrollToComponent(this.Agenda, {
              offset: 0,
              align: "top",
              duration: 1500
            })}
        >
          Agenda
        </Button>
      </Toolbar>
    </AppBar>

    <Grid container spacing={24}>
      <Grid
        className="Home"
        item
        xs={12}
        ref={section => {
          this.Home = section;
        }}
      >
        <center>
          <Top />
        </center>
      </Grid>

      <Grid
        item
        xs={12}
        className="Venue"
        ref={section => {
          this.Venue = section;
        }}
      >
        <Venue />
      </Grid>

      <Grid
        item
        xs={12}
        className="Travel"
        ref={section => {
          this.Travel = section;
        }}
      >
        <Travel />
      </Grid>

      <Grid
        item
        xs={12}
        className="Registration"
        ref={section => {
          this.Registration = section;
        }}
      >
        <Registration />
      </Grid>

      <Grid
        item
        xs={12}
        className="Abstract"
        ref={section => {
          this.Abstract = section;
        }}
      >
        <Abstract />
      </Grid>

      <Grid
        item
        xs={12}
        className="Agenda"
        ref={section => {
          this.Agenda = section;
        }}
      >
        <Agenda />
      </Grid>
    </Grid>
  </div>;

export default withStyles(styles)(OnePager);
