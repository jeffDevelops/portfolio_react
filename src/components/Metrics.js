import React, { Component } from 'react';

import { get } from 'axios';
import _ from 'lodash';

class Metrics extends Component {
  state = {
    apiCallHasFired: false,
  }

  componentDidMount() {
    console.log(this.props, this.props.scrollPosition);
  }

  componentDidUpdate(prevProps) {
    if (!_.isEqual(this.props, prevProps)) {
      console.log('COMPONENT UPDATED!')

      if (!this.state.apiCallHasFired) {
        this.debouncedGithubAPICall();
      }
    }
  }

  githubAPICall = () => {
    this.setState({ apiCallHasFired: true });
    console.log('API CALL FIRED')
  }

  debouncedGithubAPICall = _.debounce(this.githubAPICall, 1000);

  render() {
    return null;
  }
}

export default Metrics;