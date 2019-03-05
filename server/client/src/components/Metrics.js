import React, { Component } from 'react';

import { get } from 'axios';
import moment from 'moment';
import tz from 'moment-timezone';
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
      console.log('COMPONENT UPDATED!');

      localStorage.setItem('GITHUB_TIMESTAMP', new Date().toUTCString());

      if (!this.state.apiCallHasFired) {
        this.debouncedGithubAPICall();
      }
    }
  }

  githubAPICall = () => {
    this.setState({ apiCallHasFired: true });
    console.log('DEBOUNCED PROXY CALL FIRED');

    get(`/proxies/personal_github/${encodeURI(localStorage.getItem('GITHUB_TIMESTAMP'))}`)
      .then(response => {
        console.log(response.data);
        localStorage.setItem('PERSONAL_GITHUB', JSON.stringify(response.data));
      })
      .catch(error => console.error(error));
  }

  debouncedGithubAPICall = _.debounce(this.githubAPICall, 1000);

  render() {
    return null;
  }
}

export default Metrics;