const dotenv = require('dotenv')
const connectToDatabase = require('./src/database/connectt');

require('./server');
dotenv.config();
connectToDatabase();
