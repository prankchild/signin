<template>
<div class="meeting">
  <div class="btn">
    <van-button type="default" class="btton">创建会议</van-button>
    <van-button type="default" class="btton">会议记录</van-button>
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
      .btton{
        flex: 1;
        border-radius: 10;
      }
  }
}
</style>