const path = require('path');
const express = require('express');
const bodyParser = require('body-parser');
const morgan = require('morgan');
const cors = require('cors');
// require('../database/seeding/index'); // <=== uncomment if you need to reseed
const { Update } = require('../database/sequelize');

const { HOST_PORT } = process.env;
const logging = process.env.NODE_ENV === 'development' ? morgan('dev') : morgan('short');

const app = express();

const staticOptions = {
  setHeaders(res, filePath) {
    if (filePath.indexOf('js.gz') !== -1) {
      console.log('hit gzip at filepath:', filePath);//
      res.set({
        'Content-Encoding': 'gzip',
        'Content-Type': 'application/javascript',
      });
    }
  },
};

app.use(cors());
app.use(express.static(path.join(__dirname, '../public'), staticOptions));
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
