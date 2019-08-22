var express = require('express');
var router = express.Router();
var Users = require('../db/model/users');
var jwt = require('../utils/jwt');

// 注册
router.post('/register', (req, res) => {
	const { userName, userPwd } = req.body;
	Users.findOne({
		userName: userName
	})
	.then((data) => {
		if(data){
			res.send({
				code: 0,
				msg: "用户已存在"
			})
		}else{
			return Users.insertMany({
				userName,
				userPwd
			})
		}
	})
	.then(() => {
		res.send({
			code:1,
			msg: "注册成功"
		})
	})
	.catch((err) => {
		console.log(err);
		res.send({
			code: -1,
			msg: "注册失败"
		})
	})
})

// 登录
router.post('/login', (req, res) => {
	const { userName, userPwd } = req.body;
	Users.findOne({
		userName: userName
	})
	.then((data) => {
		if(data){
			if(data.userPwd == userPwd){
				// 登录成功生成token，并返回给前端
				const token = jwt.createToken({ userName });
				res.send({
					code: 1,
					msg: "登录成功",
					token
				})
			}else{
				res.send({
					code: 0,
					msg: "密码错误"
				})
			}
		}else{
			res.send({
				code: 0,
				msg: "用户名不存在"
			})
		}
	})
	.catch((err) => {
		console.log(err);
		res.send({
			code: -1,
			msg: "登录失败"
		})
	})
})

router.post('/info', (req, res, next) => {
    const { token } = req.body;
    jwt.checkToken(token)
        .then((data) => { // 校验成功
			const userName = data['userName']; // 获取token里的用户名
			res.send({
				code: 1,
				msg: "校验成功",
				userName
			})
            next();
        })
        .catch(() => { // 校验失败
            res.send({
                code: -2,
                msg: '用户未登录'
            });
        });
});


module.exports = router;
