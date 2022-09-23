const express = require('express');
const logger = require('morgan');
const DB = require('./database')

const app = express();
const port = process.env.PORT || 3000

// Connect DB
DB.initialize()

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

app.use(require('./routes/index'));

app.listen(port, () => {
  console.log(`Server listening on port ${port}`)
})
