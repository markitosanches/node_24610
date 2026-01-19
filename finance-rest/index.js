const express = require('express');
const app = express();
const config = require('./config.js');
const request = require('request');
const fs = require('fs');
const path = require('path');

app.use(express.static(path.join(__dirname, 'public')));

app.get('/', (req, res) => {
  res.send('API Finances!');
 
});


app.get('/ticker=:id', (req, res) => {
  const tickerId = req.params.id;  
    //console.log(tickerId) 
  var url = `https://www.alphavantage.co/query?function=TIME_SERIES_DAILY&symbol=${tickerId}&apikey=${config.apiKey}`;
    request.get({
        url: url,
        json: true,
        headers: {'User-Agent': 'request'}
    }, (err, response, data) => {
      if (err || response.statusCode !== 200) {
        return res.status(500).send('Error occurred while fetching data');
      }
      fs.writeFile(`${tickerId}.json`, JSON.stringify(data), (err) => {
        if (err) return res.status(500).send('Error writing file');
        // res.json(data);
        res.redirect(`/view?ticker=${tickerId}`);
    });
  })
})

app.get('/view', (req, res) => {
  res.sendFile(path.join(__dirname, '/public/index.html'));
});

app.get('/data/:ticker', (req, res) => {
  const ticker = req.params.ticker;
  const filePath = path.join(__dirname, `${ticker}.json`);
  fs.readFile(filePath, 'utf8', (err, data) => {
    if (err) {
      return res.status(404).send('Data not found');
    }
    res.json(JSON.parse(data));
  })
})

app.listen(config.port, () => {
  console.log(`Finance REST API listening at http://localhost:${config.port}`);
}); 