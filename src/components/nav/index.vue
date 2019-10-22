<template>
  <div id="nav">
    <div class="container clearfloat">
      <div class="fl container-left">
        <div class="logo" @click="handleLogoFn">
          <img src="./img/logo.png" alt="logo" />
        </div>
      </div>
      <div class="fr container-right">
        <ul class="nav">
          <li>首页</li>
          <li>首页</li>
          <li></li>
          <li></li>
          <li></li>
          <li></li>
          <li></li>
        </ul>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'nav',
  data () {
    return {

    }
  },
  methods: {
    handleLogoFn () {
      console.log('!!!')
    }
  }
}
</script>

<style lang="less" scoped>
#nav {
  width: 100%;
  height: 60px;
  background: #000000;

  .container {
    width: 1200px;
    height: 100%;
    color: #ffffff;
    margin: 0 auto;

    .container-left {
      width: 20%;
      height: 100%;
      background-color: #ffffff;

      .logo {
        margin: 0 auto;
        min-width: 40px;
        height: 100%;
        &:hover {
          cursor: pointer;
        }
      }
    }

    .container-right {
      width: 70%;
      height: 100%;
      background-color: #07073b;

      .nav {
        width: 100%;
        height: 100%;
        display: flex;
        justify-content: space-around;
        align-items: center;
        li {
          width: 60px;
          height: 100%;
          line-height: 60px;
          font-size: 22px;
          &:hover {
            cursor: pointer;
            color: #ffffff;
            background-color: #f52425;
          }
        }
      }
    }
  }
}
</style>