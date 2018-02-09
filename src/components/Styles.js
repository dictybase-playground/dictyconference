import React, { Component } from 'react';
import styled from "styled-components";
import background from "./blue-background.jpg"


export const Container = styled.div`
  margin-right: auto;
  margin-left: auto;

`
export const Header = styled.p`
  font-weight: lighter;

  padding-top: 4%;
  padding-bottom: 4%;
  padding-left: 4%;
  padding-right: 4%;

  color: white;
  background-color: #011f4b;

  text-align: center;

`;

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
  top: 0;
  right: 0;
`


export const Button = styled.button`
  background: ${props => props.selected ? '#011f4b' : 'white'};
  color: ${props => props.selected ? 'white' : '#011f4b'};

  font-size: 1.3em;
  font-weight: lighter;
  margin: 5px; /* space between buttons */
  padding: 10px 15px;
  border: none;
  border-radius: 3px;

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
