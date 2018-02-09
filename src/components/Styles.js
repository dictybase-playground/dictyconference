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
  font-size: 1.5rem;
  font-weight: lighter;
  border: 1px solid #005b96;
  padding: 5px;
  padding-left: 10px;
  padding-right: 10px;
  background-color: white;

  &:hover {
    cursor: pointer;
    background-color: #011f4b;
    color: white;
  }
`;
