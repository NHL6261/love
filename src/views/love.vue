<template>
  <body>
    <div class="btn-setting">
      <button type="danger" class="btn" @click="playMusic">爱你的音乐</button>
    </div>
    <div class="attention">
      <marquee behavior="alternate"
        >注:
        本页面存在背景音乐,如首次打开无法正常播放请点击下方按钮(爱你的音乐)播放</marquee
      >
    </div>
    <!-- 文字转动 -->
    <div class="top">
      <marquee behavior="alternate">时光不老，我们不散</marquee>
    </div>
    <!-- 照片旋转墙 -->
    <div class="box">
      <div class="pic">
        <ul>
          <li>
            <img src="../assets/images/1.png" width="" height="" alt="" />
          </li>
          <li>
            <img src="../assets/images/2.png" width="" height="" alt="" />
          </li>
          <li>
            <img src="../assets/images/3.png" width="" height="" alt="" />
          </li>
          <li>
            <img src="../assets/images/4.png" width="" height="" alt="" />
          </li>
          <li>
            <img src="../assets/images/5.png" width="" height="" alt="" />
          </li>
          <li>
            <img src="../assets/images/6.png" width="" height="" alt="" />
          </li>
        </ul>
      </div>
    </div>
    <div id="text"></div>
    <audio
      src="../assets/music.mp3"
      loop
      :autoplay="autoplay"
      ref="music"
    ></audio>
    <div class="copyright">
      <p class="problemhover" @click="problemHandle">版权问题</p>
    </div>
  </body>
</template>

<script>
import "../utils/snow";
export default {
  data() {
    return {
      changeId: 1,
      autoplay: true,
    };
  },
  methods: {
    // 遍历所有的ul li
    TraverseAll() {
      $(".pic ul li").each(function (i) {
        //遍历
        var deg = 360 / $(".pic ul li").size(); //size个数
        //当前的li对象 添加css样式
        $(this).css({
          transform: "rotateY(" + deg * i + "deg) translateZ(216px)",
        });

        $.fn.snow({
          minSize: 10,
          maxSize: 15,
          newOn: 500,
          flakeColor: "#ffffff",
        });
      });
    },
    // 抽出来的字体滚动函数
    textRolling() {
      var i = 0;
      var str =
        "能够遇见你是我最大的幸运,有了你生活变得丰富多彩,有了你,世界变得如此迷人,你是我的世界,我的世界是你,对我来说,不是在最美好的时光遇见了你,而是遇见你后都是最美好的时光!";
      var mydiv = document.getElementById("text");
      window.onload = function typing() {
        mydiv.innerHTML += str.charAt(i);
        i++;
        var id = setTimeout(typing, 200);
        if (i == str.length) {
          clearTimeout(id);
        }
      };
    },
    // 文字的循环播放
    textCycle() {
      if (this.changeId) {
        this.textRolling();
        // this.autoplay = false
      }
      this.textRolling();
    },
    playMusic() {
      this.$nextTick(() => {
        this.$refs.music.play();
      });
    },
    problemHandle() {
      this.$router.push({ path: "/copyright" });
    },
  },
  mounted() {
    this.TraverseAll();
    this.textCycle();
    this.textRolling();
  },
  watch: {
    $route: {
      handler(newValue, oldValue) {
        if (newValue.name == "Home") {
          this.textCycle()
        }
      },
      // 深度观察监听
      deep: true,
      // 配置立即执行属性
      immediate: true,
    },
  },
};
</script>

<style lang="scss">
@import "../assets/css/love.css";

.copyright > p {
  font-size: 16px;
  font-family: "宋体";
  font-weight: 500;
  position: absolute;
  top: 15px;
  right: 20%;
  color: #fff;
}
.copyright > p:hover {
  cursor: pointer;
}
.problemhover {
  color: #fff;
  transition: color 0.5s;
}
.problemhover:hover {
  color: gold;
}
</style>
