const express = require("express")
const mongoose = require('mongoose')
const Product = require('./models/product.model')
const app = express()
const productRoute = require('./routes/product.route')

//middleware
app.use(express.json())
app.use(express.urlencoded({extended: false}))

app.get('/', (req, res) => {
    res.send("Hello from Node API server")
})

//routes
app.use('/api/products', productRoute)

//database connection
mongoose.connect("mongodb+srv://saikrrish459:7nWnm1s7xAypsWp9@backenddb.osu2szv.mongodb.net/Node-API?retryWrites=true&w=majority&appName=BackendDB")
.then(() => {
    console.log("Connected to database!")
    app.listen(3000, () => {
        console.log("Server is running on port 3000")
    })
})
.catch(() => {
    console.log("Connection failed!")
})