const express = require('express')
const cookieParser = require('cookie-parser')
const app = express()

const authRoutes = require('./Routes/auth.routes')
const transactionRoutes = require('./Routes/transactions.routes')
const cors = require('cors')
app.use(cors({
    origin: "http://localhost:5173",
    credentials: true
}))
app.use(cookieParser())
app.use(express.json())

app.use('/api/auth',authRoutes)
app.use('/api/transactions',transactionRoutes)

module.exports = app