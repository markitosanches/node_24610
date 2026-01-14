const express = require('express');
const app = express();
const config = require('./config.js');
const request = require('request');

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
    }, (err, res, data) => {
        if (err) {
        console.log('Error:', err);
        } else if (res.statusCode !== 200) {
        console.log('Status:', res.statusCode);
        } else {
        // data is successfully parsed as a JSON object:
        console.log(data);
        }
    });
    res.send(`Données pour le ticker: ${data}`);

})

app.listen(config.port, () => {
  console.log(`Finance REST API listening at http://localhost:${config.port}`);
}); 