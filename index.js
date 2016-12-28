const config = require('config');
const env = process.env.NODE_ENV || 'development';
const src = env === 'production' ? './build/app' : './src/app';

require('babel-polyfill');
if (env === 'development') {
  // for development use babel/register for faster runtime compilation
  require('babel-register');
}


const db = require('./src/db');

db.connect()
	.then(() => {

		const app = require(src).default;

		app.listen(config.port, () => {
			console.info(`Listening to http://localhost:${config.port}`);
		});

	})
	.catch((err) => {
		console.error('ERR:', err);
	});


