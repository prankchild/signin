<template>
<div class="meeting">
    <div class="logo">
      <img src="http://www.lepusheng.com.cn/UploadFiles/Others/20201010101909_25290.png" alt="">
    </div>
    <div class="nav">
      <div>创建会议</div>
      <div>会议记录</div>
    </div>
</div>
</template>

<script>
export default {

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
navActive{
  border-bottom: 2px solid orangered;
}
</style>