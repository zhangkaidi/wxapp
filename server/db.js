// Schema、Model、Entity或者Documents的关系请牢记，Schema生成Model，Model创造Entity，Model和Entity都可对数据库操作造成影响，但Model比Entity更具操作性。
const mongoose = require('mongoose');
// 连接数据库 如果不自己创建 默认test数据库会自动生成
mongoose.connect('mongodb://localhost/books');

// 为这次连接绑定事件
const db = mongoose.connection;
db.once('error', () => console.log('Mongo connection error'));
db.once('open', () => console.log('Mongo connection successed'));


/**
 *图书信息
 */
const bookMessage = new mongoose.Schema({
  id:String,
  user:String,
  title: String,
  author: String,
  imgMi: String,
  publisher: String,
  summary: String,
  price:String,
  state:Boolean
});


/************** 定义模型Model **************/
const Models = {
  bookMessage: bookMessage,
  books: mongoose.model("books", bookMessage),
};
module.exports = Models;