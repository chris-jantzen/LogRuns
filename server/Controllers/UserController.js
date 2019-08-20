const express = require('express');
const app = (module.exports = express());

app.route('/user').get((req, res) => {
  res.status(200).send('User');
});
