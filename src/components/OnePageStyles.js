import React, { Component } from 'react';
import styled from "styled-components";
import background from "./blue-background.jpg"


export const Container = styled.div`
  padding-top: 13%;
  padding-bottom: 13%;
  width: 100%;
  color: white;
  background-color: #011f4b;
`

export const Header = styled.p`
  font-weight: lighter;
  background-color: #011f4b;
  text-align: center;

`;

export const Container2 = Container.extend`
  color: black;
  background-color: white;
`

export const Container3 = Container.extend`
  background-color: #428bca;
`

export const Title = styled.p`
  position: relative;
  bottom: 100px;
  font-size: 5em;
  font-weight: lighter;
`

export const SubTitle = styled.h3`
  position: relative;
  bottom: 90px;
  font-size: 2.5em;
  font-weight: lighter;
`

export const Details = styled.h4`
  position: relative;
  bottom: 100px;
  padding-left: 15%;
  padding-right: 15%;
  font-size: 1.1em;
  font-weight: lighter;
`

export const NavBar = styled.div`
  position: fixed;
  top: 0;

  display: flex;
  justify-content: flex-end;

  width: 100%;
  background-color: black;

  padding-top: 0.5%;
  padding-bottom: 0.5%;
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
