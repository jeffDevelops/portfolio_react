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
  font-size: .85em;;

  @media(min-width: 1060px) {
    font-size: 17.1px;
  }
`;

const MongoHeading = () => (
  <Code><Pre>{ /* DO NOT TOUCH THIS ----------------------------------------------------------- */
`\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20____  ____
 _ __ ___   ___  _ __   __ _  ___ |  _ \\| __ ) 
| '_ \` _ \\ / _ \\| '_ \\ / _\` |/ _ \\| | | |  _ \\ 
| | | | | | (_) | | | | (_| | (_) | |_| | |_) |
|_| |_| |_|\\___/|_| |_|\\__, |\\___/|____/|____/ 
                       |___/                   
`
    /* --------------------------------------------------------- DO NOT TOUCH THIS */ }</Pre></Code>
);

export default MongoHeading;