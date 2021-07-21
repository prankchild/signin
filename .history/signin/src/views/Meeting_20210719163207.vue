<template>
<div class="meeting">
    <div class="logo">
      <img src="http://www.lepusheng.com.cn/UploadFiles/Others/20201010101909_25290.png" alt="">
    </div>
    <div class="nav">
      <div :class=" navActive === 0 ? 'navActive' : '' " @click="create()">创建会议</div>
      <div :class=" navActive === 1 ? 'navActive' : '' " @click="record()">会议记录</div>
    </div>
    <div v-if=" navActive === 0 " class="create"></div>
    <div v-if=" navActive === 1 " class="record"></div>
</div>
</template>

<script>
export default {
  data() {
    return {
      navActive : 0
    }
  },
  mounted() {
    
  },
  created() {
    
  },
  methods: {
    
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
}
.navActive{
  border-bottom: 2px solid #0f499e;
}
</style>