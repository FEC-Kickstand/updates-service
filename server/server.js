const path = require('path');
const express = require('express');
const bodyParser = require('body-parser');
const morgan = require('morgan');
const cors = require('cors');

const { env } = process;
const { Update } = require('../database');

const { EXPRESS_PORT, NODE_ENV } = env;
const logging = NODE_ENV === 'development' ? morgan('dev') : morgan('short');

const app = express();

const staticOptions = {
  setHeaders(res, filePath) {
    if (filePath.indexOf('js.gz') !== -1) {
      res.set({
        'Content-Encoding': 'gzip',
        'Content-Type': 'application/javascript',
      });
    }
  },
};

app.use(cors())
  .use(express.static(path.join(__dirname, '../public'), staticOptions))
  .use(logging)
  .use(bodyParser.json());


app.get('/:projectId', (req, res) => {
  res.sendFile(path.resolve(__dirname, '../public/index.html'));
});

app.get('/projects/:projectId/updates', (req, res) => {
  Update.getAllByProjectId(req.params.projectId)
    .then(updates => res.send(updates))
    .catch(err => console.error('Error getting Updates', err));
});

app.listen(EXPRESS_PORT, () => {
  console.log(`Listening at PORT: ${EXPRESS_PORT}`);
});
