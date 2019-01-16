//引入数据库的链接模块
var mongoose = require('../common/db');
var comment= new mongoose.Schema({
  movie_id:String,
  username:String,
  context:String,
  check:Boolean
})
//数据操作的一些常用方法
comment.statics.findByMovieId = function(m_id,callback){
  this.find({movie_id:m_id,check:true},callback)
}

comment.statics.findAll = function(callback){
  this.find({},callback)
}

var commentModel = mongoose.model('comment',comment);
module.exports = commentModel