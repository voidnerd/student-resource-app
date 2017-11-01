var express = require("express"),
    path = require("path"),
    bodyParser = require("body-parser"),
    cors = require("cors"),
    mongoose = require("mongoose"),

    config = require("./model/config")
    userRoutes = require("./routes/userRoutes");

mongoose.Promise = global.Promise;
    
mongoose.connect(config.DB)
    .then(
    () => {console.log("database connected")},
    err => {console.log("database connection failure")}
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