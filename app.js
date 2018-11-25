const express = require('express');
const bodyParser = require('body-parser');
const product = require('./routes/product.route')
const app = express()


const mongoose = require('mongoose')
let dev_db_url='mongodb://dexter:D3xter@ds055782.mlab.com:55782/aws_monog_db';
const mongoDB = process.env.MONGODB_URI || dev_db_url;
mongoose.connect(mongoDB);
mongoose.Promise=global.Promise;
const db = mongoose.connection
db.on('error',console.error.bind(console,'Mongo db connection error'));



app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended:false}));
app.use('/products',product);

let port =3000;
app.listen(port,()=>{
    console.log(`Server is running on port no port ${ port}`);
})




