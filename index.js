const express = require('express');
const app = express();
const mongoose = require('mongoose');

// Database Connection
mongoose.connect('mongodb+srv://Kavi:Kavi1234@cluster0.j8ch6.mongodb.net/myFirstDatabase?retryWrites=true&w=majority',
() => console.log('connected to db'));

// Import Routes
const authRoute = require('./routes/auth');

//Route Middleware
app.use('/api/user', authRoute);

app.listen(3000, () => console.log('Server Up and running'));