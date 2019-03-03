import React from 'react';
import styled, { withTheme } from 'styled-components';

import ScrollEffect from './ScrollEffect';
import ExpressHeading from './ExpressHeading';
import ExpressASCII from './ExpressASCII';

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

const ExpressPanel = props => (
  <ScrollEffect>

      <SpaceEvenlyRow margin="0 auto" alignItems="center">

        <Container width="50%" padding="0">
          <ExpressHeading />
          <P margin="20px 0 0">Proxying requests to external services</P>
          <P margin="20px 0 0">Top-level routing differentiation between RESTful routes, RPCs, and proxies</P>
          <P margin="20px 0 0">Modular GraphQL mutation, query, and subscription resolvers with <CodeSpan>graphql-yoga</CodeSpan></P>
          <P margin="20px 0 0">Security measures, like CSRF prevention with request origin whitelists and password hashing with <CodeSpan>bcrypt</CodeSpan></P>
          <P margin="20px 0 0">Custom role-based authorization middleware</P>
          <P margin="20px 0 0">Multiple authentication strategies with <CodeSpan>passport</CodeSpan> including SAML and local</P>
          <P margin="20px 0 0">Dynamic routing with regular expressions</P>
        </Container>

        <ASCIIContainer>
          <ExpressASCII />
        </ASCIIContainer>

      </SpaceEvenlyRow>

  </ScrollEffect>
);

export default withTheme(ExpressPanel);