
var express = require("express");
var app = express();
var userRoutes = express.Router();

var User = require("../model/users");


userRoutes.route('/').get(function(req, res) {
    User.find(function(err, users) {
        if(err) {
            console.log(err);
        } else {
            res.json(users)
        }
    });
});

userRoutes.route("/store").post(function(req, res){
    var user = new User(req.body);
    user.save().then( user => {
            res.status(200).json({"message": "accout created"});
        })
        .catch(err => {
            res.status(400).json({"message": "unsuccessfull"});
            console.log(err);
        });

});

userRoutes.route("/get/:id").get(function (req, res) {
    var userId = req.params.id;

    User.findById(userId, function (err, user) {
        if (err) {
            console.log(err);
        } else {
            res.json(user);
        }
        
    });
});

userRoutes.route("/update/:id").post(function(req, res) {
    User.findById(req.params.id, function(err, user) {
        if(!user) {
            res.json({"msg": "request failed"});
        }else {
            user.first_name = req.body.first_name;
            user.last_name = req.body.last_name;
            user.email = req.body.email;
            user.phone = req.body.phone;
            user.dob = req.body.dob;
            user.gender = req.body.gender;
            user.faculty = req.body.faculty;
            user.department = req.body.department;
            user.level = req.body.level;

            user.save().then(item => {
                res.json({"msg": "sucessfull"});
            })
            .catch(err => {
                res.status(400).json({"msg": "operation failled"});
                console.log(err);
            });
        }
    });
});

userRoutes.route('/delete/:id').post(function(req, res) {
    User.findByIdAndRemove({_id: req.params.id}, function(err, user){
        if(err) res.json(err);
        else res.json('Successfully removed');
    });
});

module.exports = userRoutes;
