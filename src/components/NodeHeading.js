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
`;

const NodeHeading = () => (
  <Code><Pre>{ /* DO NOT TOUCH THIS ----------------------------------------------------------- */
` _   _           _         _     
| \\ | | ___   __| | ___   (_)___ 
|  \\| |/ _ \\ / _\` |/ _ \\  | / __|
| |\\  | (_) | (_| |  __/_ | \\__ \\
|_| \\_|\\___/ \\__,_|\\___(_)/ |___/
                         |__/`
    /* --------------------------------------------------------- DO NOT TOUCH THIS */ }</Pre></Code>
);

export default NodeHeading;