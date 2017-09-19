const express = require('express');
const bodyParser = require('body-parser');
const app = express();

app.use(bodyParser.json({extended: true}));

require('dotenv').config();

const db = require('./modules');
db.sequelize.sync();

// 라우터
const api = require('./api');
app.use('/api',api );

app.listen(4000, () => {
  console.log('pholation server listening port on 4000');
});