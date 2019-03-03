import styled from 'styled-components';

const Panel = styled.section`
  height: 100vh;
  width: 100vw;
  background-color: ${props => props.theme.black};
  border-radius: ${props => props.borderRadius};
  padding: ${props => props.padding ? props.padding : '20px'};
`;

export default Panel;