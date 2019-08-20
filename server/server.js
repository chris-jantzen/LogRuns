const express = require('express');
const dotenv = require('dotenv');
const morgan = require('morgan');

dotenv.config({ path: '../config.env' });

const app = express();

// Logging
app.use(morgan('dev'));

const controllers = [
  require('./Controllers/CheckHealthController'),
  require('./Controllers/UserController')
];

controllers.forEach(controller => {
  app.use(controller);
});

const port = process.env.PORT || 5000;

app.listen(port, () => console.log(`Listening on port ${port}...`));
