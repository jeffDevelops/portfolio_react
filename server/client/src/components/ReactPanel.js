import React from 'react';
import styled, { withTheme } from 'styled-components';

import ScrollEffect from './ScrollEffect';
import ReactHeading from './ReactHeading';
import ReactASCII from './ReactASCII';

import SpaceEvenlyRow from '../styled/SpaceEvenlyRow';
import Subheading from '../styled/Subheading';
import Container from '../styled/Container';
import CodeSpan from '../styled/CodeSpan';
import P from '../styled/P';

const ASCIIContainer = styled.div`
  margin: 25px;
  box-sizing: border-box;
  width: 375px;
  height: 375px;
  font-size: 2.3px;
  border-radius: 20px;
  overflow: hidden;

  @media(max-width: 800px) {
    display: none;
  }
`;

const ReactPanel = props => (
  <ScrollEffect>

    <SpaceEvenlyRow margin="0 auto">

      <Container width="50%" padding="0">
        <ReactHeading />
        <P margin="35px 0 0">State Management with Redux, Context, or Apollo; immutability</P>
        <P margin="20px 0 0">Type-checked compound component patterns with <CodeSpan>prop-types</CodeSpan></P>
        <P margin="20px 0 0">Visual design systems with <CodeSpan>styled-components</CodeSpan></P>
        <P margin="20px 0 0">Role-based, protected routes with <CodeSpan>react-router-dom</CodeSpan>, HOCs, and <CodeSpan>React.cloneElement</CodeSpan></P>
        <P margin="20px 0 0">Requesting REST and GraphQL APIs</P>
        <P margin="20px 0 0"><CodeSpan>create-react-app</CodeSpan>, ejection, Webpack configurations for Sass and inline scripts for web and Electron</P>
        <P margin="20px 0 0">Hooks, Portals, Refs</P>
      </Container>

      <ASCIIContainer>
        <ReactASCII />
      </ASCIIContainer>

    </SpaceEvenlyRow>

  </ScrollEffect>
);

export default withTheme(ReactPanel);

