import React from 'react';
import styled, { withTheme } from 'styled-components';

import ScrollEffect from './ScrollEffect';
import MongoHeading from './MongoHeading';
import MongoASCII from './MongoASCII';

import SpaceEvenlyRow from '../styled/SpaceEvenlyRow';
import Container from '../styled/Container';
import CodeSpan from '../styled/CodeSpan';
import P from '../styled/P';
import CenteredFlexColumn from '../styled/CenteredFlexColumn';

const ASCIIContainer = styled.div`
  margin: 25px;
  box-sizing: border-box;
  width: 375px;
  height: 375px;
  font-size: 2.5px;
  border-radius: 20px;
  overflow: hidden;

  @media(max-width: 800px) {
    display: none;
  }
`;

const MongoPanel = props => (
  <ScrollEffect>

    <CenteredFlexColumn>
      <SpaceEvenlyRow margin="0 auto" alignItems="center">

        <Container width="60%" padding="0">
          <MongoHeading />
          <P margin="20px 0 0">Normalized, relational collections with Mongoose and <CodeSpan>populate</CodeSpan></P>
          <P margin="20px 0 0">Zero redundancy across a multi-app integration</P>
          <P margin="20px 0 0">Mongoose Hooks</P>
          <P margin="20px 0 0">Migration and backups with <CodeSpan>mongodump</CodeSpan> and <CodeSpan>mongorestore</CodeSpan></P>
          <P margin="20px 0 0"><CodeSpan>cron</CodeSpan> job database backups</P>
          <P margin="20px 0 0">Database authentication and role management</P>
          <P margin="20px 0 0">Mongoose's <CodeSpan>Mixed</CodeSpan> type and dynamic document size</P>
        </Container>

        <ASCIIContainer>
          <MongoASCII />
        </ASCIIContainer>

      </SpaceEvenlyRow>
    </CenteredFlexColumn>

  </ScrollEffect>
);

export default withTheme(MongoPanel);