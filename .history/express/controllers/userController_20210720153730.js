const { createConnection } = require("mysql");
const dbConfig = require("../util/DBConfig")
getUser = (req, res) => {
  const sql = 'select * from user,meeting where user.meeting = meeting.mname';
  const sqlArr = [];
  const callBack = (err, data) => {
    if (err) {
      console.log("连接出错" + err);
    } else {
      for(let i = 0; i < data.length; i++){
        let time = data[i].time
        // data[i].time = time.toISOString().replace(/T/g, ' ').replace(/\.[\d]{3}Z/, '')
        let date = new Date(+time+8*3600*1000).toISOString().replace(/T/g,' ').replace(/\.[\d]{3}Z/,'');
        data[i].time = date
      }
      res.send({
        status : 200,
        list : data
      })
    }
  }

  dbConfig.sqlConnect(sql, sqlArr, callBack)
}
getMeeting= (req, res) => {
  const sql = 'SELECT mname FROM meeting order by time desc';
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
  let mname = req.query.mname
  let desc = req.query.desc
  let host = req.query.host
  // console.log(mname,desc,host);
  let add = async (mname,desc,host) => {
    const sql = "INSERT INTO `meeting` (`mname`, `desc`, `host`) VALUES ( ?, ?, ?);"
    const sqlArr = [mname, desc,host];
    let data = await dbConfig.SySqlConnect(sql, sqlArr);
    return data;
  }
  const adds = await add(mname,desc,host)
  console.log(adds);
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
/*
 * 通过会议名称去查询
 * 1.先把所有会议名称查询出来列成数组
 * 2.通过会议名称去查询人数
 */
const selmeet = async(req,res) => {
  const sel = async () => {
    const sql = "select mname from meeting"
    const sqlArr = [mname, desc,host];
    let data = await dbConfig.SySqlConnect(sql, sqlArr);
    return data;
  }
  const Arr = await sel();
  let meetArr = []
  for(let i = 0; i < sel.length; i++){
    meetArr[i] = Arr.mname[i];
  }
  if(meetArr){
    res.send({
      status : 200,
      list : meetArr
    })
  }
}
const selmeetname = async(req,res) =>{
  let mname = req.query.mname
  const sel = async () => {
    const sql = 'select * from user,meeting where mname = ? and user.meeting = meeting.mname';
    const sqlArr = [mname];
    let data = await dbConfig.SySqlConnect(sql, sqlArr);
    return data;
  }
  const meet = await sel(mname)
  if(meet){
    res.send({
      status : 200,
      list : meet
    })
  }
}
// const getuser
module.exports = {
  getUser,adduser,getMeeting,addmeet
}