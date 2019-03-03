import React from 'react';
import styled from 'styled-components';

const Code = styled.code`
  user-select: none;
  
  @media(max-width: 1025px) {
    /* display: none; /* Hide the ASCII art if it doesn't fit */
  }
`;

const Pre = styled.pre`
  color: #fff;
  font-weight: 200;
  user-select: none;

  @media(min-width: 1060px) {
    font-size: 12.5px;
  }

  @media(min-width: 601px) and (max-width: 1059px) {
    font-size: 1vw;
    text-align: left;
  }

  @media(max-width: 600px) {
    font-size: 5px;
    text-align: center;
  }
`;

const AboutHeading = () => (
  <Code><Pre>{ /* DO NOT TOUCH THIS ----------------------------------------------------------- */
` ____                 _                          _____    _                 _             
|  _ \\  _____   _____| | ___  _ __   ___ _ __   | ____|__| |_   _  ___ __ _| |_ ___  _ __ 
| | | |/ _ \\ \\ / / _ \\ |/ _ \\| '_ \\ / _ \\ '__|  |  _| / _\` | | | |/ __/ _\` | __/ _ \\| '__|
| |_| |  __/\\ V /  __/ | (_) | |_) |  __/ |_    | |__| (_| | |_| | (_| (_| | || (_) | |   
|____/ \\___| \\_/ \\___|_|\\___/| .__/ \\___|_( )   |_____\\__,_|\\__,_|\\___\\__,_|\\__\\___/|_|   
                             |_|          |/                                              `
    /* --------------------------------------------------------- DO NOT TOUCH THIS */ }</Pre></Code>
);

export default AboutHeading;