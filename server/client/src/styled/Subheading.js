import styled from 'styled-components';

const Subheading = styled.h1`
  margin: 0;
  font-size: 1.4em;
  font-weight: 500;
  color: ${props => props.color ? props.color : '#fff'};
  margin: ${props => props.margin ? props.margin : '0'};
`;

export default Subheading;