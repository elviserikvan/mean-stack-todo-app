const path = require('path');
const express = require('express');
const mongoose = require('mongoose');
const keys = require('./config/keys.js');
const db = require('./models/mongoose');
const bodyParser = require('body-parser');
const cors = require('cors');
const app = express();

const PORT = process.env.PORT || 3000;

// Set static folder
app.use(express.static(path.join(__dirname, 'dist', 'mean-todos-list')));

// Connect to database
mongoose.connect(keys.mongooseURI, {useNewUrlParser: true, useUnifiedTopology: true});
mongoose.connection.once('open', () => console.log('Connected to Database'))
mongoose.connection.on('error', (err) => console.log('DB Error: ', err))

// Body parser
app.use(bodyParser.urlencoded({extended: false}))

// Cors
/*
let corsOptions = {
	origin: '*',
	optionsSuccessStatus: 200
}
app.use(cors(corsOptions));
*/


app.use('/api', require('./api-routes/api'));

app.use('/*', (req, res) => {
	res.sendFile(path.join(__dirname, 'dist/mean-todos-list/index.html'))
}) 

app.listen(PORT, () => {
	console.log(`Server running on port ${PORT}`)
})
