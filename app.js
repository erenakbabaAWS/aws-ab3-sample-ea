const express = require('express');
const app = express();
const port = 8080;

app.get('/', (req, res) => res.send('Hello World from ErenAkbaba!-1'));
app.get('/', function(req,res){
  res.sendFile(path.join(__dirname,'./index.html'));
});


app.listen(port);
console.log(`App running on http://localhost:${port}`);
