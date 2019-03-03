import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import styled from 'styled-components';

import ScrollEffect from './ScrollEffect';
import CenteredFlexColumn from '../styled/CenteredFlexColumn';

const Pre = styled.pre`
  line-height: 19px;
  tab-size: 2;

  @media(max-width: 600px) {
    line-height: 14px;
  }
`;

const Centered = styled(CenteredFlexColumn)`
  @media(max-width: 600px) {
    justify-content: flex-start;
    align-items: flex-start;
    overflow: hidden;
    font-size: .75em;

    #cursor {
      height: 11px;
    }
  }
`;

const Container = styled.div`
  max-width: 600px;
`;


const greetingString = `
  <span class="blue">import</span> React from <span class="str_green">'react'</span>;\n
  <span class="blue">import</span> styled from <span class="str_green">'styled-components'</span>;\n
  \n
  <span class="blue">const</span> Heading = styled.h1<span class="str_green">&#96;\n
  \tfont-size: 2em;\n
  \tcolor: $&#123;props => props.color ? props.color : props.theme.color&#125;;\n
  &#96;</span>;\n
  \n
  <span class="blue">const</span> Header = () => (\n
  \t<>\n
  \t\t&lt;<span class="blue">Heading</span>&gt;<strong><span class="white">Jeff Reynolds</span></strong>&lt;/<span class="blue">Heading</span>&gt;\n
  \t\t&lt;<span class="blue">Heading</span>&gt;<strong><span class="white">Software Engineer</span></strong>&lt;/<span class="blue">Heading</span>&gt;\n
  \t&lt;/&gt;\n
  );\n
  \n
  <span class="blue">export default</span> Header;`;

class Greeting extends Component {

  state = {
    html: '',
  }

  componentDidMount() {
    this.typeGreeting(greetingString);
  }

  typeGreeting = string => {
    let i = 0;
    
    const type = (string) => {
      if (i < string.length) {
        const cursorMarkup = '<div id="cursor"></div>';
        this.setState({ html: this.state.html.substring(0, this.state.html.indexOf(cursorMarkup)) })
        this.setState({ html: this.state.html + string.charAt(i) + cursorMarkup }, () => {
          i++;
          setTimeout(() => type(string), 25);
        })
      }
    }
    type(string);
  }

  render() {
    return (
      <Container>
        <code><Pre dangerouslySetInnerHTML={{ __html: this.state.html }}></Pre></code>
      </Container>
    )
  }
}

class Splash extends Component {

  render() {
    return (
      <ScrollEffect>
        <Centered>
          <Greeting ref={ this.typed } />
        </Centered>
      </ScrollEffect>
    )
  }
}

export default Splash;