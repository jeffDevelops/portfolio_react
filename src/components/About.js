import React from 'react';
import styled from 'styled-components';

import ScrollEffect from './ScrollEffect';
import AboutHeading from './AboutHeading';
import ASCIIImage from './ASCIIImage';

import SpaceEvenlyRow from '../styled/SpaceEvenlyRow';
import Container from '../styled/Container';
import P from '../styled/P';
import CenteredFlexColumn from '../styled/CenteredFlexColumn';

const ImageContainer = styled.div`
  box-sizing: border-box;
  width: 256px;
  font-size: 1px;
  border-radius: 20px;
  overflow: hidden;
`;

const About = () => (
  <ScrollEffect>
    <CenteredFlexColumn>

      <Container>
        <SpaceEvenlyRow margin="25px auto">

          <ImageContainer>
            <ASCIIImage />
          </ImageContainer>

          <Container width="75%" padding="10px 20px 20px 40px">
            <AboutHeading />
            <P margin="20px 0 0">I'm Jeff Reynolds, a full-stack developer in Denver, CO.</P>
            <P margin="20px 0 0">I build web applications and have a passion for teaching web development.</P>
            <P margin="20px 0 0">An advocate for developer experience, I'm fascinated by implementing visual design systems and defensive coding strategies.</P>
          </Container>

        </SpaceEvenlyRow>
      </Container>

    </CenteredFlexColumn>

  </ScrollEffect>
);

export default About;