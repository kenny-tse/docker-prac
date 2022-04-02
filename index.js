const express = require('express');

const app = express();

app.get("/", (req, res) => {
  res.send("<h2>HELLO</h2>");
});

const port = process.envPORT || 3000;

app.listen(port, () => { console.log("App listening on port ", port) });

