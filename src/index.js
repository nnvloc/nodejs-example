import 'module-alias/register';

import express from 'express';
import path from 'path';
import db from '@models';
const app = express();
app.use(express.static(path.join(__dirname, './')));

app.get('/', (req, res, next) => {
  res.send("Hello ALAN DI BO");
});
// Test DB connection
db.sequelize
  .authenticate()
  .then(() => {
    console.log('Connection has been established successfully.');
  })
  .catch(err => {
    console.error('Unable to connect to the database:', err);
});

module.exports = app;