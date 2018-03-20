import React from "react";
import { Body, Title, Details } from "../Version2Styles";

const Registration = () =>
  <div>
    <Body>
      <Title>Venue</Title>
      <Details>
        <ul>
          <li>
            <p>To register visit this link (managed by xx)</p>
          </li>
          <li>
            <p>
              After registration to submit abstract visit this link (managed by
              organizers)
            </p>
          </li>
          <li>
            <p>
              Early bird registration ends on April 30. Regular registration on
              July 17
            </p>
          </li>
          <li>
            <p>
              Registration fees cover: meals, attendance to sessions, coffee
              breaks and social activities.
            </p>
          </li>
        </ul>
      </Details>
    </Body>
  </div>;

export default Registration;
