const express = require('express');
const app = express();
const port = 8081;

app.get('/abc', (req, res) => {
    res.send('Hello World!');
    console.log(req)
})

app.use((req, res) => {
    res.status(404).send('404 Not Found');  
})

app.listen(port, () => {
    console.log(`Server is running at http://localhost:${port}`);
})