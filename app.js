const express = require('express');
const app = express();
const port = 8080;

app.get('/', (req, res) => res.send('Hello World EA_3!'));
app.get('/',function(req,res) {
    res.sendFile('index.html');
  });


app.listen(port);
console.log(`App running on http://localhost:${port}`);
