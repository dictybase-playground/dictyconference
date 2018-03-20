import React, { Component } from 'react';
import styled from "styled-components";
import background from "./blue-background.jpg"


export const Container = styled.div`
  padding-top: 5%;
  padding-bottom: 5%;
  padding-left: 5%;
  padding-right: 5%;
  color: black;

`

export const Body = styled.div`
  font-weight: lighter;
  border-style: solid;
  border-color: #011f4b;
  border-width: 2px;
  ${'' /* background-color: #011f4b; */}
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
  bottom: 20px;
  text-align: justify;
  padding-left: 6%;
  padding-right: 6%;
  font-size: 1.1em;
  font-weight: lighter;
`

export const NavBar = styled.div`
  width: 100%;
  padding-bottom: 1.5%;
  background-color: rgb(1, 31, 75, 0.1);
  z-index: 1;

`

export const Button = styled.button`
  font-size: 1em;
  font-weight: lighter;
  margin: 5px; /* space between buttons */
  padding: 10px 10px 10px 10px;
  width: 100%;
  height: 100%;
  ${'' /* border: 2px solid #011f4b; */}
  ${'' /* color: #011f4b; */}
  border-style: hidden;
  background: none;


  &:hover {
    cursor: pointer;
    background-color: #011f4b;
    color: white;

    /* Fade-in animation upon hover */
    /* 3 lines to make it work on all browsers */
    -webkit-transition:background-color 0.4s linear;
    -moz-transition:background-color 0.4s linear;
    -o-transition:background-color 0.4s linear;
    transition:background-color 0.4s linear;

  }

`;
