const jwt = require('jsonwebtoken');

const secret = 'qwertasdf'; // 加密


module.exports = {
    // 1.生成token
    createToken(obj) {
        // 根据传入的用户信息生成对应的token
        return jwt.sign(obj, secret, { expiresIn: 60 * 60 * 12 })
    },
    // 2.检验token
    checkToken(token) {
        // 使用promise对异步操作进行封装
        return new Promise((resolve, reject) => {
            // 检验传上来的token，看它到底代表哪个用户
            jwt.verify(token, secret, (err, data) => {
                if (!err) {
                    resolve(data)
                } else {
                    reject('token校验失败')
                }
            })
        })
    }
}