<template>
<div class="meeting">
  <div class="header">
      <div class="logo">
        <img src="http://www.lepusheng.com.cn/UploadFiles/Others/20201010101909_25290.png" alt="">
      </div>
      <div class="nav">
        <div :class=" navActive === 0 ? 'navActive' : '' " @click="create()">创建会议</div>
        <div :class=" navActive === 1 ? 'navActive' : '' " @click="record()">会议记录</div>
      </div>
  </div>
    <div v-if=" navActive === 0 " class="create">
      <van-form @submit="onSubmit">
      <van-field
        v-model="name"
        name="会议名称"
        label="会议名称"
        placeholder="会议名称"
        :rules="[{ required: true, message: '请填写会议名称' }]"
      />
      <van-field
        v-model="desc"
        name="会议备注"
        label="会议备注"
        placeholder="会议备注"
        :rules="[{ required: true, message: '请填写会议备注' }]"
      />
      <van-field
        v-model="host"
        name="会议主持人"
        label="会议主持人"
        placeholder="会议主持人"
        :rules="[{ required: true, message: '请填写会议主持人' }]"
      />
      <div class="divs">
        <van-button round block type="info" native-type="submit">提交</van-button>
      </div>
    </van-form>
    </div>
    <div v-if=" navActive === 1 " class="record">
      <div class="box">
        <ul class="title">
          <li>id</li>
          <li>姓名</li>
          <li>部门</li>
          <li>会议名称</li>
          <li class="desc">会议备注</li>
          <li class="time">签到时间</li>
          <li>会议主持人</li>
        </ul>
        <ul class="title item" v-for="(item,index) in mettingdRecord" :key="index">
          <li>{{ item.id }}</li>
          <li>{{ item.name }}</li>
          <li>{{ item.department }}</li>
          <li>{{ item.meeting }}</li>
          <li class="desc">{{ item.desc }}</li>
          <li class="time">{{ item.time }}</li>
          <li>{{ item.host }}</li>
        </ul>
      </div>
    </div>
</div>
</template>

<script>
export default {
  data() {
    return {
      navActive : 0,
      name:'',
      desc:'',
      host:'',
      mettingdRecord:''
    }
  },
  mounted() {
    
  },
  created() {
    this.getData();
  },
  methods: {
    create() {
      this.navActive = 0;
    },
    record() {
      this.navActive = 1;
    },
    onSubmit(){

    },
    async getData(){
      const { data:res } = await this.$http.get("/");
      if( res.status === 200 ){
        this.mettingdRecord = res.list
        console.log(this.mettingdRecord);
      }
    }
  },
}
</script>

<style lang="less" scoped>
@media screen and ( max-width: 960px ) {
.meeting{
  width: 100%;
  height: 100%;
  background: #fff;
  .header{
    .logo{
      padding-top: 30px;
      text-align: center;
      img{
        width: 140px;
        height: 30px;
      }
    }
    .nav{
      margin-top: 15px;
      display: flex;
      height: 50px;
      width: 100%;
      border-top: 1px dashed #e0e0e0;
      border-bottom: 1px dashed #e0e0e0;
      div{
        flex: 1;
        text-align: center;
        line-height: 50px;
      }
    }
  }

  .create{
    margin-top: 20px;
    width: 100%;
    .van-cell{
      margin-top: 10px;
    }
    text-align: center;
    .divs{
      display: flex;
      justify-content: center;
      margin-top: 12%;
      button{
        width: 60%;
        border-radius: 15px;
      }
    }
  }
  .record{
    overflow-y:auto;/*可滑动*/
    .box{
      .title{
        width: 1200px;
        height: 50px;
        li{
          line-height: 50px;
          text-align: center;
          float: left;
          width: 130px;
          height: 50px;
        }
        .time{
          width: 280px;
        }
        .desc{
          width: 180px;
        }
      }
      .item{
        border-bottom: 1px solid #e0e0e0;
      }
    }
  }
}
.navActive{
  border-bottom: 2px solid #0f499e;
}
}
@media screen and ( min-width: 961px ){

}
.meeting{
  width: 100%;
  height: 100%;
  background: #f5f5f5;
  .header{
    margin-top: 20px;
    width: 100%;
    text-align: center;
    .logo{
      width: 180px;
      height: 40px;
      img{
        width: 180px;
        height: 40px;
      }
    }
  }
  .nav{
    margin-top: 15px;
    display: flex;
    height: 50px;
    width: 100%;
    border-top: 1px dashed #e0e0e0;
    border-bottom: 1px dashed #e0e0e0;
    div{
      flex: 1;
      text-align: center;
      line-height: 50px;
    }
  }
  .create{
    overflow: hidden;
    text-align: center;
    background: #fff;
    width: 380px;
    margin: 100px auto;
    height: 400px;
    border-radius: 20px;
    // box-shadow: 0 15px 30px rgb(0 0 0 / 10%);
    .van-form{
      overflow: hidden;
      margin-top: 20px;
      .van-field{
        margin-top: 20px;
      }
      button{
        margin-top: 40px;
        width: 80%;
      }
    }
  }
}
.navActive{
  border-bottom: 2px solid #0f499e;
}
</style>