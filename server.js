const express = require('express');
const app = express();
const port = 8080;
const path = require('path');

app.use('/', express.static(path.join(__dirname, 'app')));

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`)
})

