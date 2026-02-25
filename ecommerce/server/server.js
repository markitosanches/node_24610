const express = require('express')
const bodyParser = require('body-parser')
const cors = require('cors')
const app = express()

const corsOptions = {
  origin: 'http://localhost:5173',
  credentials: true
}
app.use(cors(corsOptions))
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: true }))  

const db = require('./app/models')
db.connex.sync()

//test route   
app.get('/', (req, res) => {
  res.json({message: 'Welcome to the ecommerce application.'})
})

require('./app/routes/product.route')(app)
const PORT = 8080
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}.`)
})  