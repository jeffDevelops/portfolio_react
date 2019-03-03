import React from 'react';
import styled from 'styled-components';

const Code = styled.code`
  display: block;
  user-select: none;
  margin: 400px auto 800px auto;
  text-align: center;
  
  @media(max-width: 1025px) {
    /* display: none; /* Hide the ASCII art if it doesn't fit */
  }
`;

const Pre = styled.pre`
  color: ${props => props.theme.green};
  font-weight: 200;
  user-select: none;
  font-size: 1.5vw;

  @media(min-width: 1060px) {
    font-size: 17.1px;
  }

  @media(max-width: 600px) {
    font-size: 7px;
  }
`;

const SpecializationsASCII = () => (
  <Code><Pre>{ /* DO NOT TOUCH THIS ----------------------------------------------------------- */
`
  __  __      _        _          
 |  \\/  | ___| |_ _ __(_) ___ ___ 
 | |\\/| |/ _ \\ __| '__| |/ __/ __|
 | |  | |  __/ |_| |  | | (__\\__ \\
 |_|  |_|\\___|\\__|_|  |_|\\___|___\/
`
    /* --------------------------------------------------------- DO NOT TOUCH THIS */ }</Pre></Code>
);

export default SpecializationsASCII;