const express = require('express');
const cors = require('cors');
const app = express();
const clientData = require('./mock_data.json');
const port = process.env.PORT || 3333;

app.use(cors());

app.get('/clientData', (req, res, next) => {
  setTimeout(() => res.json(clientData), 1000);
});

app.get('*', (req, res) => {
  res.send('Page not found');
});

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`)
});