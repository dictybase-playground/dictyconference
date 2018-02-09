import React, { Component } from 'react';
import styled from "styled-components";
import background from "./blue-background.jpg"


export const Container = styled.div`
  color: ${props => props.dark ? 'white' : 'black'};
  padding-bottom: 5%;
`
export const Header = styled.p`
  font-weight: lighter;

  padding-top: 4%;
  padding-bottom: 4%;
  padding-left: 4%;
  padding-right: 4%;

  color: white;
  background: linear-gradient(#011f4b, #428bca);
  text-align: center;

`;

export const Container2 = Container.extend`
  background-color: #011f4b;
`


export const Title = styled.h1`
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
  background-color: #011f4b;
  width: 100%;
  z-index: 1;

`

export const ArrowDown1 = styled.div`
  position: relative;
  bottom: 63px;
  width: 0;
  height: 0;
  border-left: 50px solid transparent;
  border-right: 50px solid transparent;
  border-top: 50px solid #428bca;

`

export const ArrowDown2 = ArrowDown1.extend`
  position: relative;
  top: 0px;
  border-top: 50px solid white;
`


export const Button = styled.button`

  font-size: 1.3em;
  font-weight: lighter;
  margin: 5px; /* space between buttons */
  padding: 10px 15px;
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
