const express = require('express');

const routes = require('./routes');
const dotenv = require('dotenv');

dotenv.config();

const app = express();
app.use(routes);

const port = process.env.PORT || 3000;
app.listen(port, () => { console.log("Server is running in port " + port) })