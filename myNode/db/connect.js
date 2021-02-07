const mongoose = require('mongoose');

//连接数据库
mongoose.connect('mongodb://localhost/story', { useNewUrlParser: true });

// 获取连接对象
const db = mongoose.connection;

//如果连接成功
db.once('open', () => {
    console.log('db ok')
});

//如果连接失败
db.on('error', () => {
    console.log('db error')
});
