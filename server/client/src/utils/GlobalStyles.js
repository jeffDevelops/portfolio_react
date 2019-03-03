import { createGlobalStyle, keyframes } from 'styled-components';
import theme from './theme';

const blink = keyframes`
  0% { visibility: visible; }
  50% { visibility: visible; }
  51% { visibility: hidden; }
  100% { visibility: hidden; }
`;

export default createGlobalStyle`
  html {
    height: 40000px; /* TODO: Change this */
    width: 100%;
    background-color: #000;
    margin: 0;
    padding: 0;
  }

  body {
    height: 100%;
    min-height: 100%;
    margin: 0;
    padding: 0;
  }

  *, body > * {
    box-sizing: border-box;
    font-family: 'Fira Mono', 'Hack', 'Fira Mono', monospace;
    letter-spacing: .05em;
    color: ${theme.green};
  }

  pre {
    margin: 0;
  }

  #cursor {
    background-color: ${theme.green};
    width: 8px;
    height: 15px;
    display: inline-block;
    animation: ${blink} 1s linear infinite;
  }

  .white {
    color: #fff;
  }

  .str_green {
    color: ${theme.string_green};
  }

  .blue {
    color: ${theme.blue};
  }
`;