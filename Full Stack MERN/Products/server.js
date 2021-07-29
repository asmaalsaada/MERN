const express = require('express');
const app = express();
const port = 8000;
const cors = require('cors') // This is new

app.use(cors()) // This is new
app.use(express.json()); // This is new
app.use(express.urlencoded({ extended: true })); // This is new
require('./server/routes/product.routes')(app); // This is new
require('./server/config/mongoose.config'); // This is new

    
app.listen(port, () => console.log(`Listening on port: ${port}`) );