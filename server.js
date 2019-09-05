const express = require('express');
const dotenv = require('dotenv');
const path = require('path');

dotenv.config();

const app = express();

app.use(express.static(`${__dirname}/dist`));

app.use('*', (_req, res) => {
  res.sendFile(path.resolve(__dirname, 'dist', 'build'));
});

const port = process.env.PORT || 5799;

app.listen(port, () => {
  console.log(`i am running on ${port}`);
});
