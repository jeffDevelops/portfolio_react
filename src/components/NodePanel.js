import React from 'react';
import styled, { withTheme } from 'styled-components';

import ScrollEffect from './ScrollEffect';
import NodeHeading from './NodeHeading';
import NodeASCII from './NodeASCII';

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
  font-size: 1.7px;
  border-radius: 20px;
  overflow: hidden;

  @media(max-width: 800px) {
    display: none;
  }
`;

const NodePanel = props => (
  <ScrollEffect>

      <SpaceEvenlyRow margin="0 auto">

        <Container width="50%" padding="0">
          <NodeHeading />
          <P margin="20px 0 0">Heavy modularization of server-side logic</P>
          <P margin="20px 0 0">Asynchronous, functional programming with callbacks, Promises, and <CodeSpan>async</CodeSpan> / <CodeSpan>await</CodeSpan></P>
          <P margin="20px 0 0">Differentiating environments with <CodeSpan>NODE_ENV</CodeSpan></P>
          <P margin="20px 0 0">CLIs with <CodeSpan>process.argv</CodeSpan>, <CodeSpan>inquirer</CodeSpan>, and <CodeSpan>ora</CodeSpan></P>
          <P margin="20px 0 0">I/O with <code>fs</code></P>
          <P margin="20px 0 0">Task runners like <CodeSpan>gulp</CodeSpan> and <CodeSpan>grunt</CodeSpan></P>
          <P margin="20px 0 0">Automated Emails with <CodeSpan>nodemailer</CodeSpan></P>
          <P margin="20px 0 0">Socket.io</P>
        </Container>

        <ASCIIContainer>
          <NodeASCII />
        </ASCIIContainer>

      </SpaceEvenlyRow>

  </ScrollEffect>
);

export default withTheme(NodePanel);