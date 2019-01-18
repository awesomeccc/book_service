//引入相关的文件和代码包
var mongoose = require('../common/db')
//数据库的数据集
var recommend = new mongoose.Schema({
  recommendImg:String,
  recommendSrc:String,
  recommenTitle:String
})
//数据操作的一些常用方法
//通过ID获得主页推荐
recommend.statics.findByIndexId = function(m_id,callback){
  this.find({findByIndexId:m_id},callback)
}
//找到所有的推荐
recommend.statics.findAll = function(callback){
  this.find({},callback)
}
var recommendModel = mongoose.model('recommend',recommend)
module.exports = recommendModel