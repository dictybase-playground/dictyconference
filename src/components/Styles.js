import React, { Component } from 'react';
import styled from "styled-components";
import background from "./blue-background.jpg"


export const Container = styled.div`
  margin-right: auto;
  margin-left: auto;

`
export const Title = styled.p`
  font-family: sans-serif;
  font-weight: lighter;
  font-size: 4rem;
  color: white;

  background-image: url(${background});
  padding-top: 4%;
  padding-bottom: 4%;
  padding-left: 4%;
  padding-right: 4%;

`;

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
