const express = require('express')
const { mongo, default: mongoose } = require('mongoose')
const userRoutes = require('./routes/user')

const app = express()

app.use((req, res, next) => {
    res.header('Access-Control-Allow-Origin', 'http://localhost:5173')
    res.header('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE')
    res.header('Access-Control-Allow-Headers', 'Content-Type, Authorization')
    res.header('Access-Control-Allow-Credentials', true)
  
    if (req.method === 'OPTIONS') {
        res.sendStatus(200)
    } else {
        next()
    }
  })

app.use(express.json())

app.use('/user', userRoutes)

mongoose.connect("mongodb://localhost:27017")
    .then(() => {
        app.listen(3000, () => {
            console.log("connected to DataBase and listening to port 3000")
        })
    })
    .catch((error) => {
        console.log(error)
    })

