const DB_USER = process.env.DB_USER;
const DB_PASS = process.env.DB_PASS;
const DB_NAME = process.env.DB_NAME;
const DB_HOST = process.env.DB_HOST;
const DB_PORT = process.env.DB_PORT;
const DB_DIALECT = process.env.DB_DIALECT;
const DB_URL = process.env.DB_URL;

module.exports =  {
  "development": {
    "username": DB_USER,
    "password": DB_PASS,
    "database": DB_NAME,
    "host": DB_HOST || '127.0.0.1',
    "port": DB_PORT || '5432',
    "dialect": DB_DIALECT || 'postgres',
    "logging": true,
  },
  "test": {
    "username": DB_USER,
    "password": DB_PASS,
    "database": DB_NAME,
    "host": DB_HOST || '127.0.0.1',
    "port": DB_PORT || '5432',
    "dialect": DB_DIALECT || 'postgres',
    "logging": true,
  },
  "production": {
    "username": DB_USER,
    "password": DB_PASS,
    "database": DB_NAME,
    "host": DB_HOST || '127.0.0.1',
    "port": DB_PORT || '5432',
    "dialect": DB_DIALECT || 'postgres',
    "logging": false,
    "use_env_variable": false
  },
}
