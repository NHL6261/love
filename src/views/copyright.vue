<template>
  <div class="parent">
    <div class="childrent">
      <p style="color: #fff; font-size: 30px; font-weight: bold">如有侵权请尽快联系站主</p>
      <p class="q-hover">
        QQ: 248376261(鼠标移入扫码)
        <img class="q-setting" src="../assets/images/qqQ.jpg" alt="" />
      </p>
      <p class="v-hover">
        V: 15810551236(鼠标移入扫码)
        <img class="v-setting" src="../assets/images/VQ.jpg" alt="" />
      </p>
      <p @click="center">如无意点进请点击此处返回主页</p>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {};
  },
  methods: {
    center() {
      this.$router.push({ path: "/home" });
    },
  },
};
</script>

<style lang="less" scoped>
.parent {
  position: relative;
  width: 100%;
  height: 100vh;
}
.childrent {
  position: absolute;
  width: 700px;
  height: 500px;
  line-height: 50px;
  top: 50%;
  left: 50%;
  color: #fff;
  transform: translate(-50%, -50%);
  text-align: center;
  > p:last-child:hover {
    cursor: pointer;
  }
}
.q-hover,.v-hover{
  color: #fff;
  transition: color 0.5s;
}
.q-hover:hover {
  cursor: pointer;
  color: #ed9daa;
}
.v-hover:hover {
  cursor: pointer;
  color: #ed9daa;
}
.q-hover:hover > .q-setting {
  display: block;
}
.v-hover:hover > .v-setting {
  display: block;
}
.q-setting {
  width: 303px;
  height: 371px;
  display: none;
  position: absolute;
  left: -150px;
  top: 0;
}
.v-setting {
  width: 303px;
  height: 371px;
  display: none;
  position: absolute;
  right: -150px;
  top: 0;
}
</style>
