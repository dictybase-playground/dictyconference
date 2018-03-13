import React, { Component } from 'react';
import styled from "styled-components";
import background from "./blue-background.jpg"


export const Container = styled.div`
  padding-top: 12%;
  padding-bottom: 13%;
  background-color: #011f4b;
`

export const Header = styled.p`
  font-weight: lighter;

  color: white;
  background-color: #011f4b;
  text-align: center;

`;

export const Container2 = Container.extend`
  background-color: white;
`

export const Container3 = Container.extend`
  background-color: #428bca;
`

export const Title = styled.p`
  ${'' /* position: relative; */}
  ${'' /* bottom: 50px; */}
  font-size: 5em;
  font-weight: lighter;
`

export const SubTitle = styled.h3`
  position: relative;
  bottom: 30px;
  font-size: 2.5em;
  font-weight: lighter;
`

export const Details = styled.h4`
  position: relative;
  bottom: 20px;

  font-size: 1.2em;
  font-weight: lighter;
`

export const NavBar = styled.div`
  position: fixed;
  top: 0;
  width: 100%;
  overflow: hidden;
  background-color: black;
  height: 64px;

  padding-top: 1%;
  z-index: 1;

`

export const Button = styled.button`

  font-size: 1em;
  font-weight: lighter;
  margin: 5px; /* space between buttons */
  padding: 10px 10px;
  border: 2px solid white;
  color: white;
  border-radius: 3px;
  background: none;


  &:hover {
    cursor: pointer;
    background-color: white;
    color: black;

    /* Fade-in animation upon hover */
    /* 3 lines to make it work on all browsers */
    -webkit-transition:background-color 0.5s linear;
    -moz-transition:background-color 0.5s linear;
    -o-transition:background-color 0.5s linear;
    transition:background-color 0.5s linear;

  }

`;
