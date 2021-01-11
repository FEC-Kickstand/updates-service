require('dotenv').config();

const { env } = process;
const envKeys = [
  'DB',
  'DB_HOST',
  'DB_USER',
  'DB_PASSWORD',
  'HOST_PORT',
  'HOST_URL',
];

let prefix = '';

if (env.NODE_ENV === 'production') {
  prefix = 'PROD_';
}

if (env.IS_DOCKER === 'true') {
  prefix += 'CONTAINER_';
}

const config = {};
envKeys.forEach((keyroot) => {
  const key = `${prefix}${keyroot}`;
  config[keyroot] = env[key];
});

module.exports = config;
