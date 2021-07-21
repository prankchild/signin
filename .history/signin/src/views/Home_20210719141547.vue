<template>
  <div class="home">
    <div class="logo">
      <img src="" alt="">
    </div>
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
        <van-button round block type="info" native-type="submit">提交</van-button>
      </div>
    </van-form>
    </div>
  </div>
</template>

<style lang="less" scoped>
.home{
  width: 100%;
  height: 100%;
  .logo{
    img{
      width: 120px;
      height: 30px;
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
    };
  },
  methods: {
    onSubmit(values) {
      console.log('submit', values);
    },
  },
};
</script>
