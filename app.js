const express = require('express')
const app = express()
const path = require('path');

// set static folder
app.use(express.static(path.join(__dirname, 'public')));


//server
app.listen(process.env.PORT||3030);