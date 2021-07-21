const { createConnection } = require("mysql");
const dbConfig = require("../util/DBConfig")
const nodemailer = require('../util/emailConfig')
getUser = (req, res) => {
  const sql = 'SELECT * FROM user';
  const sqlArr = [];
  const callBack = (err, data) => {
    if (err) {
      console.log("连接出错" + err);
    } else {
      res.send({
        'list': data
      })
    }
  }

  dbConfig.sqlConnect(sql, sqlArr, callBack)
}
module.exports = {
  getUser
}