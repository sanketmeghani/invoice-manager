const express = require('express');

const app = express();
const port = 4000;

app.use((req, res, next) => {
  console.log(`Processing ${req.method} ${req.path}`);
  const start = Date.now();
  next();
  console.log(`${req.method} ${req.path} took ${new Date() - start} ms`);
});

app.get('/', (req, res) => res.send('Hello World!'));

app.listen(port, () => console.log(`Example app listening on port ${port}!`));
