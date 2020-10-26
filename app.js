const express = require('express');
const app = express();

app.get('/test', (req, res) => {
    res.json({ text: 'optimized backend' });
  });
  
  app.get('/health', (req, res) => {
    res.status(200).end();
  });
app.listen(process.env.port || 3000);
console.log('Web Server is listening at port '+ (process.env.port || 3000));