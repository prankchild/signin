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
  </div>
</template>

<style lang="less" scoped>
.home{
  width: 100%;
  height: 100%;
  background-image: linear-gradient(#83bffe, #d9aad2);
  .name{
    margin-top: 20px;
    text-align: center;
    font-size: 20px;
    color: #fff;
    // font-weight: 600;
  }
  .logo{
    padding-top: 30px;
    text-align: center;
    img{
      width: 140px;
      height: 30px;
    }
  }
  .from{
    width: 80%;
    margin: 25% 10% 0 10%;
    .van-cell{
      border-radius: 10px;
      margin-top:20px;
    }
    .van-button{
      margin-top: 12%;
      border-radius: 15px;
    }
  }
}
</style>
<script>
export default {
  data() {
    return {
      username: '',
      password: '',
      mettingname:"ERP系统会议"
    };
  },
  methods: {
    onSubmit(values) {
      console.log('submit', values);
    },
  },
};
</script>
