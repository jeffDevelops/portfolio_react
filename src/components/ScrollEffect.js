import React, { Component, Fragment } from 'react';
import ReactDOM from 'react-dom';
import styled, { withTheme } from 'styled-components';

import Panel from '../styled/Panel';

const Perspective = styled.div`
  perspective: 200px;
  transform-origin: center;
  max-width: 100vw;
  overflow: hidden;
`;

const ScrollingPanel = styled(Panel).attrs(props => ({
  style: {
    transform: `rotateX(-${props.angle}deg) translateZ(-${props.distance}px) translateY(${props.distance}px)`
  },
}))`
  will-change: transform;
  backface-visibility: hidden;
`;

class ScrollEffect extends Component {
  startingPosition;
  endingPosition;
  
  componentDidMount() {
    document.addEventListener('scroll', () => this.forceUpdate());
    window.addEventListener('resize', this.reevaluateScrollPosition);

    this.startingPosition = ReactDOM.findDOMNode(this).offsetTop;
    this.endingPosition = this.startingPosition + window.innerHeight;
  }

  componentWillUnmount() {
    document.removeEventListener('scroll', () => this.forceUpdate());
    window.removeEventListener('resize', this.reevaluateScrollPosition);
  }

  reevaluateScrollPosition = () => {
    this.startingPosition = ReactDOM.findDOMNode(this).offsetTop;
    this.endingPosition = this.startingPosition + window.innerHeight;
    this.forceUpdate();
  }

  render() {
    const { props } = this;

    const currentScrollPosition = document.documentElement.scrollTop;

    // Calculate the degree of Z rotation
    let percentOfViewportScrolled = (currentScrollPosition - this.startingPosition) / (this.endingPosition - this.startingPosition);
    if (percentOfViewportScrolled > 1) percentOfViewportScrolled = 1; // limit the panel to a 90 degree turn
    
    const degreeOfRotation = percentOfViewportScrolled * 90; // the view will rotate a total of 90 degrees
    
    // Calculate the perpective
    let distance = percentOfViewportScrolled * window.innerWidth;
    if (distance > 2000) distance = 2000; // cap the Z transform distance at 2000px

    class Props {
      constructor(scrollPosition, panelStartingPosition, panelEndingPosition) {
        this.scrollPosition = scrollPosition;
        this.panelStartingPosition = panelStartingPosition;
        this.panelEndingPosition = panelEndingPosition;
      }
    }

    const passedProps = new Props(currentScrollPosition, this.startingPosition, this.endingPosition);
    
    if (currentScrollPosition > this.startingPosition) {

      return (
        <Perspective>   
          <ScrollingPanel
            angle={ degreeOfRotation }
            distance={ distance }
            borderRadius={ props.theme.borderRadius }
          >
          
            { 
              React.Children.map(this.props.children, child => React.cloneElement(
                child,
                passedProps
              ))
            }

          </ScrollingPanel>
        </Perspective>
      );
    } else {
      return (
        <Perspective>
          <ScrollingPanel
            angle={ 0 }
            distance={ 0 }
            borderRadius="none"
          >
            
            { 
              React.Children.map(this.props.children, child => React.cloneElement(
                child,
                passedProps
              ))
            }

          </ScrollingPanel>
        </Perspective>
      )
    }
  }
}

export default withTheme(ScrollEffect);