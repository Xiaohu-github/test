<!--
 * @Author: your name
 * @Date: 2020-10-21 13:08:57
 * @LastEditTime: 2020-10-21 15:49:02
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \测试文件\hk-video-test\src\components\HelloWorld.vue
-->
<template>
  <div class="hello">
    <el-row>
         <video
          id="myVideo"
          controls
          class="video-js vjs-default-skin vjs-big-play-centered"
          preload="auto"
          width="100%"
          height="100%"
        >
        <source
            type="video/mp4"
            src="//vjs.zencdn.net/v/oceans.mp4"
        >
        </video>
      <el-button>默认按钮</el-button>
      <el-button type="primary">主要按钮</el-button>
      <el-button type="success">成功按钮</el-button>
      <el-button type="info">信息按钮</el-button>
      <el-button type="warning">警告按钮</el-button>
      <el-button type="danger">危险按钮</el-button>
    </el-row>


  </div>
</template>

<script>
export default {
  name: "HelloWorld",
  data() {
    return {
      msg: "Welcome to Your Vue.js App",
    };
  },
  methods: {
       initVideo() {
        //页面dom元素渲染完毕，执行回调里面的方法
      this.$nextTick(() => {
          let myPlayer = this.$video(document.getElementById('myVideo'), {
            //确定播放器是否具有用户可以与之交互的控件。没有控件，启动视频播放的唯一方法是使用autoplay属性或通过Player API。
            controls: true,
            //自动播放属性,muted:静音播放
            autoplay: false,
            //建议浏览器是否应在<video>加载元素后立即开始下载视频数据。
            preload: "auto",
            // 设置视频播放器的显示宽度（以像素为单位）
            width: "800px",
            // 设置视频播放器的显示高度（以像素为单位）
            height: "400px",
            controlBar:{
              playToggle:true
            }
          });
        })

      }

  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h1,
h2 {
  font-weight: normal;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
</style>
