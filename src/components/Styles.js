import React, { Component } from 'react';
import styled from "styled-components";


export const Container = styled.div`
  padding-right: 15px;
  padding-left: 15px;
  margin-right: auto;
  margin-left: auto;

  @media (max-width: 768px) {
    width: 750px;
  }

  @media (max-width: 992px) {
    width: 970px;
  }

  @media (max-width: 1200px) {
    width: 1170px;
  }

`
export const Title = styled.p`
  font-family: sans-serif;
  font-weight: lighter;
  font-size: 4rem;
`;


export const Button = styled.button`
  background: ${props => props.selected ? '#011f4b' : 'white'};
  color: ${props => props.selected ? 'white' : '#011f4b'};

  font-size: 1.5em;
  font-weight: lighter;
  margin: 5px; /* space between buttons */
  padding: 10px 15px;
  border: 2px solid #011f4b;
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
