import React, { Component } from 'react';

import { get } from 'axios';
import moment from 'moment';
import tz from 'moment-timezone';
import _ from 'lodash';

class Metrics extends Component {
  state = {
    events: null,
    languages: null,
  }

  componentDidMount() {
    localStorage.setItem('GITHUB_TIMESTAMP', new Date().toUTCString());

    const cachedLangData = localStorage.getItem('GITHUB_LANGUAGES');
    const cachedEventsData = localStorage.getItem('GITHUB_EVENTS');

    if (!cachedLangData) {
      this.getLangData();
    } else {
      this.setState({ languages: JSON.parse(cachedLangData) });
    }

    if (!cachedEventsData) {
      this.getEventsData();
    } else {
      this.setState({ events: JSON.parse(cachedEventsData) });
    }
  }

  getLangData = () => {
    get(`/proxies/personal_github/languages/${encodeURI(localStorage.getItem('GITHUB_TIMESTAMP'))}`)
      .then(response => {
        localStorage.setItem('GITHUB_LANGUAGES', JSON.stringify(response.data));
        this.setState({ languages: response.data });
      })
      .catch(error => console.error(error));
  }

  getEventsData = () => {
    get(`/proxies/personal_github/events/${encodeURI(localStorage.getItem('GITHUB_TIMESTAMP'))}`)
      .then(response => {
        localStorage.setItem('GITHUB_EVENTS', JSON.stringify(response.data));
        this.setState({ events: response.data });
      })
      .catch(error => console.error(error));
  }

  render() {
    return null;
  }
}

export default Metrics;