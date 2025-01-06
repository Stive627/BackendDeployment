const express = require('express')
require('dotenv').config()
const app = express()
const port = process.env.PORT
app.get('/', (req, res)=>{res.status(200).send('Welcome in the application...')})
app.listen(port, ()=>console.log(`The server is running at http://localhost:${port}`))