var mongoose = require('../common/db')

var user = new mongoose.Schema({
  username: String,
  password: String,
  userMail: String,
  userPhone: String,
  userAdmin: Boolean,
  userPower: Number,
  userStop: Boolean
})

user.statics.findAll = function(name,callBack){
  this.find({username:name},callBack)
}

user.statics.findByUsername = function(name,callBack){
  this.find({username:name},callBack)
}

user.statics.findUserLogin = function(name,password,callBack){
  this.find({username:name,password:password,userStop:false},callBack)
}

user.statics.findUserPassword = function(name,mail,phone,callBack){
  this.find({username:name,userMail:mail,userPhone:phone},callBack)
}
// user.statics.save = function(callBack){callBack}

var userModel = mongoose.model('user',user);
module.exports = userModel;