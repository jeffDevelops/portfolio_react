import React from 'react';
import styled from 'styled-components';

const Code = styled.code`
  display: block;
  user-select: none;
  margin: 0 auto;
  
  @media(max-width: 1025px) {
    /* display: none; /* Hide the ASCII art if it doesn't fit */
  }
`;

const Pre = styled.pre`
  color: #fff;
  font-weight: 200;
  user-select: none;
  font-size: 2vw;

  @media(min-width: 1060px) {
    font-size: 17.1px;
  }
/* 
  @media(max-width: 600px) {
    font-size: 6.5px;
  } */
`;

const MongoHeading = () => (
  <Code><Pre>{ /* DO NOT TOUCH THIS ----------------------------------------------------------- */
`  _____  ___ __  _ __ ___  ___ ___ 
 / _ \\ \\/ / '_ \\| '__/ _ \\/ __/ __|
|  __/>  <| |_) | | |  __/\\__ \\__ \\
 \\___/_/\\_\\ .__/|_|  \\___||___/___/
          |_|                      
`
    /* --------------------------------------------------------- DO NOT TOUCH THIS */ }</Pre></Code>
);

export default MongoHeading;