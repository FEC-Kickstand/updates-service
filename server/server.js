const path = require('path');
const express = require('express');
const bodyParser = require('body-parser');
const morgan = require('morgan');
const cors = require('cors');
require('../database/seeding/index');
const { Update } = require('../database/sequelize');

const { HOST_PORT } = process.env;
const logging = process.env.NODE_ENV === 'development' ? morgan('dev') : morgan('short');

const app = express();

app.use(cors());
app.use(express.static(path.join(__dirname, '../public')));
app.use(logging);
app.use(bodyParser.json());

app.get('/:projectId', (req, res) => {
  res.sendFile(path.resolve(__dirname, '../public/index.html'));
});

app.get('/:projectId/updates', (req, res) => {
  Update.findAll({
    where: {
      projectId: req.params.projectId,
    },
  })
    .then(updates => res.send(updates))
    .catch(err => console.error('Error getting Updates', err));
});

app.listen(HOST_PORT, () => {
  console.log(`Listening at PORT: ${HOST_PORT}`);
});
