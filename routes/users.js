var express = require('express');
var router = express.Router();

const db = require('../db/db')


router.get('/ceshi', (req, res) => {
  res.send({ code: 0, msg: '通了' })
})

/* GET users listing. */
router.post('/register', (req, res) => {
  const { name, email, password, date, avater } = req.body
  if(!name && !password) return res.send({ code: 1, msg: '参数不合法' })
  new Users({ name, email, password, date, avater }).save((err, list) => {
    if (!err)  res.send({ code: 0, msg: '入库成功' })
  })
});

module.exports = router;
