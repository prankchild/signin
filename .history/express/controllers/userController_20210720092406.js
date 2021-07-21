const { createConnection } = require("mysql");
const dbConfig = require("../util/DBConfig")
getUser = (req, res) => {
  const sql = 'select * from user,meeting where user.meeting = meeting.mname';
  const sqlArr = [];
  const callBack = (err, data) => {
    if (err) {
      console.log("连接出错" + err);
    } else {
      res.send({
        status : 200,
        list : data
      })
    }
  }

  dbConfig.sqlConnect(sql, sqlArr, callBack)
}
getMeeting= (req, res) => {
  const sql = 'SELECT mname FROM meeting';
  const sqlArr = [];
  const callBack = (err, data) => {
    if (err) {
      console.log("连接出错" + err);
    } else {
      res.send({
        'status':200,
        'meetingname': data[0].mname
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
// 添加会议记录
const addmeet = async(req,res) => {
  let mname = req.query.name
  let desc = req.query.desc
  let host = req.query.host
  let add = async (mname,desc,host) => {
    const sql = "INSERT INTO meeting (mname, desc,host) VALUES (?,?,?)"
    const sqlArr = [mname, desc,host];
    let data = await dbConfig.SySqlConnect(sql, sqlArr);
    return data;
  }
  const adds = await add(mname,desc,host)
  if(adds){
    res.send({
      status:200,
    })
  }else{
    res.send({
      status:400,
    })
  }
}
// const getuser
module.exports = {
  getUser,adduser,getMeeting
}