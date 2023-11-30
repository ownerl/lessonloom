const express = require('express')
const path = require('path')
const favicon = require('serve-favicon')
const logger = require('morgan')
const coursesRouter = require('./routes/api/courses')
const lessonsRouter = require('./routes/api/lessons')
const usersRouter = require('./routes/api/users')
require('dotenv').config()
require('./config/database')

const app = express()

app.use(logger('dev'))
app.use(express.json())

// Configure both serve-favicon & static middleware
app.use(favicon(path.join(__dirname, 'build', 'favicon.ico')))
app.use(express.static(path.join(__dirname, 'build')))

const port = process.env.PORT || 3001

app.use('/api/courses', coursesRouter)
app.use('/api/lessons', lessonsRouter)
app.use('/api/users', usersRouter)

app.get('/*', function (req, res) {
  res.sendFile(path.join(__dirname, 'build', 'index.html'))
})

app.listen(port, function () {
  console.log(`Express app running on port ${port}`)
})