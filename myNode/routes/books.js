var express = require('express');
var router = express.Router();
var Books = require('../db/model/books');


router.post('/list', (req, res) => {
    const {bookType} = req.body;
    Books.find({
        bookType
    })
    .then((data) => {
        res.send({
            code: 1,
			msg: "获取列表成功",
            list: data
        })
    })
    .catch((err) => {
		console.log(err);
		res.send({
			code: -1,
			msg: "获取列表失败"
		})
    })
})

// 首页新书和完本
router.post('/newlist', (req, res) => {
    const {newBook} = req.body;
    Books.find({
        newBook
    })
    .limit(4)
    .then((data) => {
        res.send({
            code: 1,
			msg: "获取列表成功",
            list: data
        })
    })
    .catch((err) => {
		console.log(err);
		res.send({
			code: -1,
			msg: "获取列表失败"
		})
    })
})

// 新书和完本页面列表
router.post('/newbooklist', (req, res) => {
    const {newBook} = req.body;
    Books.find({
        newBook
    })
    .then((data) => {
        res.send({
            code: 1,
			msg: "获取列表成功",
            list: data
        })
    })
    .catch((err) => {
		console.log(err);
		res.send({
			code: -1,
			msg: "获取列表失败"
		})
    })
})


// 详情
router.post('/detail', (req, res) => {
    const {id} = req.body;
    Books.findOne({
        _id: id
    })
    .then((data) => {
        res.send({
            code: 1,
			msg: "获取详情成功",
            data: data
        })
    })
    .catch((err) => {
		console.log(err);
		res.send({
			code: -1,
			msg: "获取详情失败"
		})
    })
})


module.exports = router