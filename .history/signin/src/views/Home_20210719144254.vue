<template>
  <div class="home">
    <div class="logo">
      <img src="http://www.lepusheng.com.cn/UploadFiles/Others/20201010101909_25290.png" alt="">
    </div>
    <div class="name">{{mettingname}}</div>
    <div class="from">
      <van-form @submit="onSubmit">
      <van-field
        v-model="username"
        name="姓名"
        label="姓名"
        placeholder="姓名"
        :rules="[{ required: true, message: '请填写姓名' }]"
      />
      <van-field
        v-model="password"
        name="部门"
        label="部门"
        placeholder="部门"
        :rules="[{ required: true, message: '请填写部门' }]"
      />
      <div style="margin: 16px;">
        <van-button round block type="info" native-type="submit">签到</van-button>
      </div>
    </van-form>
    </div>
    <div class="num">已签到人数: {{num}} 人</div>
  </div>
</template>

<style lang="less" scoped>
.home{
  width: 100%;
  height: 100%;
  background-image: linear-gradient(#83bffe, #d9aad2);
  .logo{
    padding-top: 30px;
    text-align: center;
    img{
      width: 140px;
      height: 30px;
    }
  }
  .name{
    margin-top: 10%;
    text-align: center;
    font-size: 16px;
    color: #0f499e;
    // font-weight: 600;
  }
  .from{
    width: 80%;
    margin: 20% 10% 0 10%;
    .van-cell{
      border-radius: 10px;
      margin-top:20px;
      border: 1px solid #333;
      color: #fff;
      background-color:rgba(999,999,999,0.1);
    }
    .van-button{
      margin-top: 12%;
      border-radius: 15px;
    }
  }
  .num{
    text-align: center;
    color: #fff;
    margin-top: 20px;
  }
}
</style>
<script>
export default {
  data() {
    return {
      username: '',
      password: '',
      mettingname:"ERP系统会议",
      num:20
    };
  },
  methods: {
    onSubmit(values) {
      console.log('submit', values);
    },
  },
};
</script>
