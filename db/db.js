// 数据库配置
const mongoose = require('mongoose');
// 连接指定数据
mongoose.connect(
  'mongodb://localhost:27017/user'
)
// 获取连接对象
const db = mongoose.connection;
// 绑定连接完成的监听
db.on('connected', () => {
  console.log('连接成功！')
})

const users = mongoose.Schema({
  name: {
    type: String,
    required: true
  },
  email: {
    type: String,
    required: true
  },
  password: {
    type: String,
    required: true
  },
  date: {
    type: Date,
    default: Date.now
  },
  avater: {
    type: String
  }
})
const Users = mongoose.model('users', users)
exports.Users = Users
