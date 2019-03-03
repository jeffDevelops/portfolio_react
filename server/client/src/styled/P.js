import styled from 'styled-components';

const P = styled.p`
  color: ${props => props.color ? props.color : '#fff'};
  margin: ${props => props.margin ? props.margin : '0'};
  width: ${props => props.width ? props.width : 'auto'};
  line-height: 1.3em;
  font-size: .9em;
`;

export default P;