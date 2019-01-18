//引入相关的代码包
var mongoose = require('../common/db')
//数据库的数据集
var article =new mongoose.Schema({
  articleTitle :String,
  articleContext:String,
  articleTime:String
})
//通过ID查找
article.statics.findByArticleId = function(id,callback){
  this.find({_id:id},callback)
}
var articleModel = mongoose.model('article',article)
module.exports = articleModel