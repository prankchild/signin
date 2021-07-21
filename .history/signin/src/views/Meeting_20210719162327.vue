<template>
<div class="meeting">
  <div class="btn">
    <div class="buttonBox"><van-button type="default" class="btton">创建会议</van-button></div>
    <div class="buttonBox"><van-button type="default" class="btton">会议记录</van-button></div>
  </div>
</div>
</template>

<script>
export default {

}
</script>

<style lang="less" scoped>
.meeting{
  .btn{
    padding-top: 20px;
    display: flex;
    .buttonBox{
      flex: 1;
      .btton{
        width: 80%;
        border-radius: 10px;
      }
    }
  }
}
</style>