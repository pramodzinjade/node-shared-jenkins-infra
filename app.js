const express = require('express');
const app = express();
const port = 3000;

app.get('/', (req, res) => {
  res.send('Hiii from pramod , added webhook , added this app in jenkins shared server');
});

app.listen(port, () => {
  console.log(`App listening at http://localhost:${port}`);
});
