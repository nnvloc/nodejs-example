import 'module-alias/register';

import express from 'express';
import path from 'path';
import db from '@models';
import routes from '@modules';
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

app.use('/api', routes);

// Error handling
app.use((err, req, res, next) => {
	if (process.env.NODE_ENV === 'development') {
		console.log('error: ', err);
  }
  
  // Custom Errorhandling
  // E.g: Call sentry.io (err)

	res.status(500);
	let errorMsg = process.env.NODE_ENV === 'development' ? err.message : 'general server error!';
	if (
		err.status === 401
		|| err.status === 400
		|| err.status === 409
	) {
		res.status(err.status);
		errorMsg = err.message;
	}

	res.json({
		success: false,
		error_message: errorMsg,
	});
});

module.exports = app;