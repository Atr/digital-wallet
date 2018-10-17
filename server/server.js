const express = require('express');
const path = require('path');

const morgan = require('morgan');
const parser = require('body-parser');

const router = require('./router.js');

const app = express();
const port = 3001;

app.use(morgan('dev'));
app.use(parser.json());

app.use('/', express.static(path.join(__dirname, '../client/dist')));

app.use('/api', router);

app.listen(port, () => console.log(`Digital Wallet listening on port ${port}!`));
