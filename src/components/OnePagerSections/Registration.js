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

const Registration = () =>
  <div>
    <center>
      <Title>Registration</Title>
    </center>
      <Details>
        <ul>
          <li><p>To register visit this link (managed by xx)</p></li>
          <li><p>After registration to
          submit abstract visit this link (managed by organizers)</p></li>
          <li><p>Early bird
          registration ends on April 30. Regular registration on July 17</p></li>
          <li><p>Registration fees cover: meals, attendance to sessions, coffee breaks and social activities.</p></li>
        </ul>
      </Details>
  </div>;

export default Registration;
