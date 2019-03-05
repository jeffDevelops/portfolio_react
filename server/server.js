require('dotenv').config();
const express = require('express');
const app = express();
const path = require('path');
const bodyParser = require('body-parser');

const rpc = require('./rpc');
const proxy = require('./proxy');

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

app.use('/rpc', rpc);
app.use('/proxies', proxy);

app.use('/*', (req, res) => {
  console.log(req.originalUrl);
  console.log('Serving build directory.')
  express.static(path.join(__dirname, 'client/build'));
});

const PORT = process.env.PORT || 3001;

app.listen(PORT, () => console.log('🏃 ON 3001'));

