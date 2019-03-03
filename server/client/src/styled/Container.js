import styled from 'styled-components';

const Container = styled.section`
  height: auto;
  width: ${props => props.width ? props.width : '100%'};
  padding: ${props => props.padding ? props.padding : 0};
  position: relative;
  font-size: 1.4vw;

  @media(min-width: 601px) and (min-width: 1059px) {
    font-size: 1vw;
  }

  @media(max-width: 600px) {
    width: 100%;
    font-size: 3vw;
  }
`;

export default Container;