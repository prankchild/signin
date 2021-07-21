<template>
<div class="meeting">
    <div class="logo">
      <img src="http://www.lepusheng.com.cn/UploadFiles/Others/20201010101909_25290.png" alt="">
    </div>
    <div class="nav">
      <div :class=" navActive === 0 ? 'navActive' : '' " @click="create()">创建会议</div>
      <div :class=" navActive === 1 ? 'navActive' : '' " @click="record()">会议记录</div>
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
      <div style="margin: 16px;">
        <van-button round block type="info" native-type="submit">提交</van-button>
      </div>
    </van-form>
    </div>
    <div v-if=" navActive === 1 " class="record">

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
    }
  },
  mounted() {
    
  },
  created() {
    
  },
  methods: {
    create() {
      this.navActive = 0;
    },
    record() {
      this.navActive = 1;
    },
    onSubmit(){

    }
  },
}
</script>

<style lang="less" scoped>
.meeting{
  width: 100%;
  height: 100%;
  background: #fff;
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
  .create{
    margin-top: 20px;
    width: 100%;
    .van-cell{
      margin-top: 10px;
    }
    text-align: center;
    button{
      width: 60%;
      margin-top: 12%;
      border-radius: 15px;
    }
  }
}
.navActive{
  border-bottom: 2px solid #0f499e;
}
</style>