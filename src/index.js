const express = require('express');
const morgan = require('morgan');
const path = require('path');

const { mongoose } = require('./database');

const app = express();          //Server


//Server Settings
app.set('port', process.env.PORT || 3000);
app.use(express.json());


//Middlewares
app.use(morgan('dev'));

//Routes
app.use('/api/task',require('./routes/task.routes'));

//Static Files
app.use(express.static(path.join(__dirname, 'public')));


//Start Server
app.listen(app.get('port'), () =>{
    console.log(`Server on port ${app.get('port')}`);
});//listen in the port and execute