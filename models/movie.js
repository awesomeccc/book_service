//引入数据库的链接模块
var mongoose = require('../common/db');
var movie= new mongoose.Schema({
  movie_id:String,
  movieName:String,
  movieImg:String,
  movieVideo:String,
  movieTime:String,
  movieNumSuppose:Number,
  movieNumDownload:Number,
  movieDownload:String
 // context:String,
 // check:Boolean
})
//数据操作的一些常用方法
movie.statics.findById = function(m_id,callback){
  this.find({_id:m_id},callback)
}

//comment.statics.findAll = function(callback){
//   this.find({},callback)
// }

var movieModel = mongoose.model('movie',movie);
module.exports = movieModel