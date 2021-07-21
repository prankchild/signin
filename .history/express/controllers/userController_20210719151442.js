const { createConnection } = require("mysql");
const dbConfig = require("../util/DBConfig")
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
// 添加参加会议人员
const weibolove = async (req, res) => {
  let love = [];
  let weibo_id = req.query.weibo_id;
  let selectlove = async (weibo_id) => {
    const sql = "select * from love where weibo_id=?";
    const sqlArr = [weibo_id];
    let data = await dbConfig.SySqlConnect(sql, sqlArr);
    return data;
  };
  love = await selectlove(weibo_id);
  // console.log(love);
  let loveuserid = [];
  for (let i = 0; i < love.length; i++) {
    loveuserid[i] = love[i].user_id;
  }

  console.log(loveuserid);
  let selectuser = async (loveuserid) => {
    const sql = "select * from user where user_id=?";
    const sqlArr = [loveuserid];
    let data = await dbConfig.SySqlConnect(sql, sqlArr);
    return data;
  };
  const user = await selectuser(loveuserid);
  for (let i = 0; i < love.length; i++) {
    if (love[i].user_id === user[i].user_id) {
      love[i].user_avatar = user[i].user_avatar;
      love[i].user_name = user[i].user_name;
    }
  }
  if (love) {
    res.send({
      status: 200,
      list: love,
    });
  }
}
module.exports = {
  getUser
}