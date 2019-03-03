import React, { Component } from 'react';

import ScrollEffect from './ScrollEffect';
import Metrics from './Metrics';

const MetricsPanel = props => (
    <ScrollEffect>
      <Metrics />
    </ScrollEffect>
);

export default MetricsPanel;