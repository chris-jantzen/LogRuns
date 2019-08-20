const express = require('express');
const app = (module.exports = express());

app.route('/healthTest').get((req, res) => {
  res.status(200).send('Success');
});
