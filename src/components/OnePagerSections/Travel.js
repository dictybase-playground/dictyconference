import React from "react";
import { travelStyles as styles } from "../OnePageStyles";
import { withStyles } from "material-ui/styles";

const Travel = props =>
  <div className={props.classes.container}>
    <center>
      <span className={props.classes.title}>Travel</span>
    </center>
    <div className={props.classes.info}>
      <p>
        The <b>Dictyostelium International Conference 2018</b> will take place
        in Egmond aan Zee, conveniently located about 40 kilometers from
        Amsterdam International airport Schiphol.
      </p>
      <p>
        By Public Transportation (about 1:20 hours, €12). Follow the link and
        fill in the date and time of travel:
      </p>
      <p>
        <a>
          https://9292.nl/en/journeyadvice/station-schiphol-airport/egmond-aan-zee_1931vl/departure
        </a>
      </p>
      In the airport take the train to Castricum (switch trains in Amsterdam
      Sloterdijk) and take the bus to 1931vl Egmonds aan Zee
      <p>By taxi (about 45 minutes, €120).</p>
      <p>By shuttle from the hotel (about xx, €xx). Link will follow</p>
    </div>
  </div>;

export default withStyles(styles)(Travel);
