const express = require('express')
const sequelize = require('sequelize')
const dotenv = require('dotenv').config()
const cookieParser = require('cookie-parser')
 const db = require('./Modelos')
 const userRoutes = require ('./Rutas/useRoutes')

//setting up your port
const PORT = process.env.PORT || 8080

//assigning the variable app to express
const app = express()

//middleware
app.use(express.json())
app.use(express.urlencoded({ extended: true }))
app.use(cookieParser())

db.sequelize.sync({ force: true }).then(() => {
    console.log("db has been re sync")
})

//routes for the user API
app.use('/api/users', userRoutes)

//listening to server connection
app.listen(PORT, () => console.log(`Server is connected on ${PORT}`))


//para saber si funciona pdgadmin4 => select * from users;