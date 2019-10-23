<template>
  <div class="home">
    <div class="container clearfloat">
      <div class="fl container-left" :class="{'left-fixed':scrollY > 200}">
        <h2>nick_name</h2>
        <div class="avatar-container">
          <div class="avatar"></div>
        </div>
      </div>
      <div class="fr container-right">
        <!-- <img alt="Vue logo" src="../../assets/cat.gif" /> -->
        <br />a
        <br />a
        <br />a
        <br />a
        <br />a
        <br />a
        <br />a
        <br />a
        <br />a
        <br />a
        <br />a
        <br />a
        <br />a
        <br />a
        <br />a
        <br />a
        <br />a
        <br />a
        <br />a
        <br />a
        <br />a
        <br />a
        <br />a
        <br />a
        <br />a
        <br />a
        <br />a
        <br />a
        <br />a
        <br />a
        <br />a
        <br />a
        <br />a
        <br />a
        <br />a
        <br />a
        <br />a
        <br />a
        <br />a
        <br />a
        <br />a
        <br />a
        <br />a
        <br />a
        <br />a
        <br />a
        <br />a
        <br />a
        <br />a
        <br />a
        <br />a
        <br />a
        <br />a
        <br />a
        <br />a
        <br />a
        <br />a
        <br />a
        <br />a
        <br />a
        <br />a
        <br />a
        <br />a
        <br />a
        <br />a
        <br />a
        <br />a
        <br />
        <HelloWorld msg="demo" />
      </div>
    </div>
    <div class="footer">
      <div class="bruce">
        <ul class="bubble-bgwall">
          <li>富强</li>
          <li>民主</li>
          <li>文明</li>
          <li>和谐</li>
          <li>自由</li>
          <li>平等</li>
          <li>公正</li>
          <li>法治</li>
          <li>爱国</li>
          <li>敬业</li>
          <li>诚信</li>
          <li>友善</li>
        </ul>
      </div>
    </div>
  </div>
</template>

<script>
import { mapState } from 'vuex'

import HelloWorld from '@/components/HelloWorld.vue'

export default {
  name: 'home',
  components: {
    HelloWorld
  },
  mounted () {
    window.addEventListener('scroll', this.handleScroll)
  },
  methods: {
    // 改变顶栏背景色
    handleScroll () {
      let scrollY = window.scrollY
      console.log(scrollY)
      this.$store.dispatch('setScrollY', scrollY)
      // if (scrollY > 100) {
      //   console.log('100!!!!');

      // } else {
      //   console.log('100!!~~');
      // }
    },
  },
  computed: {
    ...mapState({
      scrollY: state => state.scrollY,
    })
  },
}
</script>

<style lang="less" scoped>
.home {
  border-bottom: 1px solid #f0f0f0;
  margin: 80px 0 0 0;

  .container {
    min-width: 1200px;
    max-width: 1800px;
    background-color: #ffffff;
    margin: 0 auto;
    position: relative;

    .container-left {
      width: 20%;
      // height: 100%;
      background-color: #f2f2f2;
      padding: 20px 20px;
      box-sizing: border-box;
      // position: fixed;
      // top: 50px;
      // left: 10%;

      h2 {
        width: 100%;
        height: 80px;
        background: linear-gradient(0, #f66 2px, #f66 2px) no-repeat left top/0
            2px,
          linear-gradient(-90deg, #f66 2px, #f66 2px) no-repeat right top/2px 0,
          linear-gradient(-180deg, #f66 2px, #f66 2px) no-repeat right bottom/0
            2px,
          linear-gradient(-270deg, #f66 2px, #f66 2px) no-repeat left bottom/2px
            0;
        cursor: pointer;
        line-height: 80px;
        text-align: center;
        font-weight: bold;
        font-size: 50px;
        color: #f66;
        transition: all 300ms;
        &:hover {
          background-size: 100% 2px, 2px 100%, 100% 2px, 2px 100%;
        }
      }
      .avatar-container {
        margin-top: 20px;
        width: 100%;
        height: 220px;
        // background-color: yellow;
        display: flex;
        justify-content: center;
        align-items: convert;

        .avatar {
          border-radius: 100%;
          width: 200px;
          height: 200px;
          background: url(https://yangzw.vip/static/codepen/thor.jpg) no-repeat
            center/cover;
          // &::after {
          //   position: absolute;
          //   left: 0;
          //   top: 10%;
          //   z-index: 0;
          //   border-radius: 100%;
          //   width: 100%;
          //   height: 100%;
          //   background: inherit;
          //   filter: blur(10px) brightness(80%) opacity(0.8);
          //   content: "";
          //   transform: scale(0.95);
          // }
        }
      }
    }

    .left-fixed {
    }

    .container-right {
      width: 80%;
      background-color: #ffffff;
      border-left: 2px solid #f0f0f0;
      box-sizing: border-box;
      font-size: 20px;
    }
  }

  .footer {
    width: 100%;
    @import "./styles/bubble.less";
  }
}
</style>

