<template>
  <div id="nav">
    <div :class="{'transparent':scrollY > 100}">
      <div class="container clearfloat">
        <div class="fl container-left">
          <div
            class="logo"
            @click="handleLogoFn"
            @mouseenter="handleLogoEnter"
            @mouseleave="handleLogoLeave"
          >
            <img src="./img/logo.gif" alt="logo" v-show="mouseState === 'out'" />
            <img src="./img/logo_hover.gif" alt="logo" v-show="mouseState === 'enter'" />
          </div>
        </div>
        <div class="fr container-right">
          <ul class="nav">
            <li>首页</li>
            <li>demo</li>
            <li>demo</li>
            <li>demo</li>
            <li>demo</li>
            <li>demo</li>
            <li>demo</li>
          </ul>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { mapState } from 'vuex'


export default {
  name: 'nav',
  data () {
    return {
      mouseState: 'out'
    }
  },
  methods: {
    handleLogoFn () {
      console.log('!!!')
    },
    handleLogoEnter () {
      this.mouseState = 'enter'
    },
    handleLogoLeave () {
      this.mouseState = 'out'
    }
  },
  computed: {
    ...mapState({
      scrollY: state => state.scrollY,
    })
  },
}
</script>

<style lang="less" scoped>
#nav {
  width: 100%;
  height: 60px;
  background: #ffffff;
  border-bottom: 1px solid #f0f0f0;
  z-index: 999;
  position: fixed;
  top: 0;
  left: 0;
  .transparent {
    background-color: rgba(255, 255, 255, 0.8);
  }
  .container {
    width: 1200px;
    height: 100%;
    color: #302c2c;
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
      background-color: #ffffff;

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
            color: #a39696;
            background-color: #ffffff;
          }
        }
      }
    }
  }
}
</style>