import React from 'react';
import styled from 'styled-components';

const SpaceEvenlyRow = styled.div`
  display: flex;
  justify-content: space-evenly;
  align-items: ${props => props.alignItems ? props.alignItems : 'center'};
  max-width: ${props => props.maxWidth ? props.maxWidth : '1250px'};
  height: 100%;
  margin: ${props => props.margin ? props.margin : '0 auto'};

  @media(max-width: 800px) {
    flex-direction: column;
    justify-content: center;
    align-items: center;
  }
`;

export default SpaceEvenlyRow;