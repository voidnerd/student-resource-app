var express = require("express"),
    path = require("path"),
    bodyParser = require("body-parser"),
    cors = require("cors"),
    mongoose = require("mongoose"),
    userRoutes = require("./routes/userRoutes");
     require('dotenv').config();

mongoose.Promise = global.Promise;

var local_db = process.env.DB_CONNECTION + "://" + process.env.DB_HOST + ":" + 
         process.env.DB_PORT + "/" + process.env.DB_DATABASE;
var db = process.env.MONGODB_URI || local_db;
    
mongoose.connect(db)
    .then(
    () => {console.log("database connected")},
    err => {console.log(err)}
    );


const app = express();
    app.use(bodyParser.json());
    app.use(cors());
    app.use("/api/v1" , userRoutes);

    
    app.use(express.static('public'));

const port = process.env.PORT || 3000;

var server = app.listen(port, function() {
        console.log("listenning at port:" + port);
});