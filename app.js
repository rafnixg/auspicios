
const express = require('express')
const expressLayouts = require('express-ejs-layouts')
const path = require('path')

const app = express();

app.use(express.static(__dirname + '/src/assets'))
app.use(express.static(__dirname + '/src/js'))
app.use(express.static(__dirname + '/src'))

// EJS
app.use(expressLayouts);
app.set('views', path.join(__dirname, '/src/views'))
app.set('view engine', 'ejs')

// Routes
app.use('/', require('./src/routes/index'))

const PORT = process.env.PORT || 4002;
app.listen(PORT, console.log(`Server started on port ${PORT}`))