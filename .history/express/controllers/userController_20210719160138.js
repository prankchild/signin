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
const adduser = async (req, res) => {
  let name = req.query.name
  let department = req.query.department
  let meeting = req.query.meeting
  let selectlove = async (name,department) => {
    const sql = "INSERT INTO user (name, department,meeting) VALUES (?,?,?)"
    const sqlArr = [name, department,meeting];
    let data = await dbConfig.SySqlConnect(sql, sqlArr);
    return data;
  };
  const add = await selectlove(name, department)
  if(add){
    res.send({
      status:200,
      token:'LEPUSHENGTOKEN'
    })
  }
}
module.exports = {
  getUser,adduser
}