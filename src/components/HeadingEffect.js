import React, { Component } from 'react';
import styled from 'styled-components';

const AnimatedWrapper = styled.div.attrs(props => ({
  style: { 
    transform: `translateX(${props.translation}vw)`
  }
}))`
  width: auto;
  transform-origin: center;
`;

class HeadingEffect extends Component {

  render() {
    const { props } = this;

    const viewHeight = props.panelEndingPosition - props.panelStartingPosition;
    const rangeOfFXMin = props.panelStartingPosition - viewHeight;

    let translation = 0;
    
    if (props.scrollPosition > rangeOfFXMin) {
      translation = 
        ((props.scrollPosition - rangeOfFXMin) /
        (props.panelStartingPosition - rangeOfFXMin)) * 100;
    }
    
    return (
      <AnimatedWrapper translation={ translation }>
        { this.props.children }
      </AnimatedWrapper>
    )
  }
}

export default HeadingEffect;