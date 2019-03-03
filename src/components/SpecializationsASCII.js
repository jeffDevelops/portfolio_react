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
`  ____                  _       _ _          _   _                 
 / ___| _ __   ___  ___(_) __ _| (_)______ _| |_(_) ___  _ __  ___ 
 \\___ \\| '_ \\ / _ \\/ __| |/ _\` | | |_  / _\` | __| |/ _ \\| '_ \\/ __|
  ___) | |_) |  __/ (__| | (_| | | |/ / (_| | |_| | (_) | | | \\__ \\
 |____/| .__/ \\___|\\___|_|\\__,_|_|_/___\\__,_|\\__|_|\\___/|_| |_|___/
|_|\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20
`
    /* --------------------------------------------------------- DO NOT TOUCH THIS */ }</Pre></Code>
);

export default SpecializationsASCII;