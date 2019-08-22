const mongoose = require('mongoose');

const booksSechema = new mongoose.Schema({
    bookName: {type: String, required: true}, // 书名
    writer: {type: String, required: true},  // 作者
    bookType: {type: String, required: true}, // 小说类型(排行榜和分类)
    bookImg: {type: String, required: true},  // 图片
    bookState: {type: String, required: true}, // 连载状态
    bookNum: {type: Number, required: true}, // 字数
    newBook: String, // 新书和完本
    bookDesc:String // 描述
})

const Books = mongoose.model('books', booksSechema)


module.exports = Books