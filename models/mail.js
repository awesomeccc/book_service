//引入相关的文件和代码包
var mongoose = require('../common/db')
//根据数据集建立一个新的mail数据内容
var mail = new mongoose.Schema({
  formUser:String,
  toUser:String,
  title:String,
  context:String
})
//数据操作的一些常用方法
mail.statics.findByToUserId = function(user_id,callBack){
  this.find({tiUser:user_id},callBack)
}
mail.statics.findByFormUserId = function(user_id,callBack){
  this.find({
    formUser:user_id
  },callBack)
}
var mailModel = mongoose.model('mail',mail);
module.exports = mailModel