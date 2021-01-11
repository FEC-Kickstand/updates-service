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

const config = {};
envKeys.forEach((keyroot) => {
  const key = `${prefix}${keyroot}`;
  config[key] = env[key];
});

module.exports = {
  database: env[`${prefix}DB`],
  host: env[`${prefix}DB_HOST`],
  user: env[`${prefix}DB_USER`],
  password: env[`${prefix}DB_PASSWORD`],
};
