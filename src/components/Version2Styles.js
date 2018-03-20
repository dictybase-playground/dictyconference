import React, { Component } from 'react';
import styled from "styled-components";
import background from "./blue-background.jpg"


export const Container = styled.div`
  padding-top: 5%;
  padding-bottom: 5%;
  padding-left: 5%;
  padding-right: 5%;
  color: white;

`

export const Body = styled.p`
  font-weight: lighter;
  background-color: #011f4b;
  text-align: center;

`;

export const Title = styled.p`
  position: relative;
  bottom: 0px;
  font-size: 5em;
  font-weight: lighter;
`

export const SubTitle = styled.h3`
  position: relative;
  bottom: 70px;
  font-size: 2.5em;
  font-weight: lighter;
`

export const Details = styled.h4`
  position: relative;
  bottom: 50px;
  padding-left: 15%;
  padding-right: 15%;
  font-size: 1.1em;
  font-weight: lighter;
`

export const NavBar = styled.div`
  width: 100%;
  height: 64px;
  z-index: 1;

`

export const Button = styled.button`

  font-size: 1em;
  font-weight: lighter;
  margin: 5px; /* space between buttons */
  padding: 10px 10px;
  border: 2px solid black;
  color: black;
  border-radius: 3px;
  background: none;


  &:hover {
    cursor: pointer;
    background-color: #011f4b;
    color: white;

    /* Fade-in animation upon hover */
    /* 3 lines to make it work on all browsers */
    -webkit-transition:background-color 0.5s linear;
    -moz-transition:background-color 0.5s linear;
    -o-transition:background-color 0.5s linear;
    transition:background-color 0.5s linear;

  }

`;
