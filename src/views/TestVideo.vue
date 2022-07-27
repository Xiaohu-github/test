<!--
 * @Author: Hubotao
 * @Date: 2020-10-21 14:16:36
 * @LastEditTime: 2021-02-01 15:39:56
 * @LastEditors: HuBotao
 * @Description: Video.Js Test
 * @FilePath: \测试文件\hk-video-test\src\views\TestVideo.vue
 todo：视频解析接口解析出来的是什么？可否利用？
-->
<template>
  <el-container>
    <el-header>
      <el-button @click="setChannel('//vjs.zencdn.net/v/oceans.mp4')">视频1</el-button>
      <el-button @click="setChannel('2')" type="primary">视频2</el-button>
      <el-button @click="setChannel('//vjs.zencdn.net/v/oceans.mp4')" type="success">视频3</el-button>
      <el-button @click="setChannel('//vjs.zencdn.net/v/oceans.mp4')" type="info">视频4</el-button>
      <el-button @click="setChannel('//vjs.zencdn.net/v/oceans.mp4')" type="warning">视频5</el-button>
      <el-button @click="setChannel('//vjs.zencdn.net/v/oceans.mp4')" type="danger">视频6</el-button>
    </el-header>
    <el-main>
      <el-row>
        <el-col :span="8"><div class="grid-content bg-purple"> <player :sources="sources"></player></div></el-col>
        <el-col :span="8"><div class="grid-content bg-purple-light"> <player :sources="sources"></player></div></el-col>
        <el-col :span="8"><div class="grid-content bg-purple"></div> <player :sources="sources"></player></el-col>
      </el-row>
    </el-main>
  </el-container>
</template>

<script>
import player from "@/components/Player";
export default {
  components: {
    player,
  },
  data() {
    return {
    sources:{
      type: "video/mp4",
      src:'https://upos-sz-mirrorks3.bilivideo.com/upgcxcode/90/90/109149090/109149090-1-208.mp4?e=ig8euxZM2rNcNbKV7bdVhwdl7wdjhwdVhoNvNC8BqJIzNbfq9rVEuxTEnE8L5F6VnEsSTx0vkX8fqJeYTj_lta53NCM=&uipk=5&nbs=1&deadline=1612172159&gen=playurl&os=ks3bv&oi=978800370&trid=5b2532c559a0465ea475d6b593e2b865T&platform=html5&upsig=5ea5b3963b8121c4f8120c0ed693b2d3&uparams=e,uipk,nbs,deadline,gen,os,oi,trid,platform&mid=524602686&orderid=0,1&logo=80000000'
      // type: "application/x-mpegURL",
      // src:'http://hls01open.ys7.com/openlive/ba8104b82512462097acd537d664dae8.m3u8'
    }
    }
  },
  methods: {
    setChannel(val){
       this.$message("通道"+val)
       this.sources.src=val
    }
  },
};
</script>

<style>
.el-header,
.el-footer {
  background-color: #b3c0d1;
  color: #333;
  text-align: center;
  line-height: 60px;
}

.el-aside {
  background-color: #d3dce6;
  color: #333;
  text-align: center;
  line-height: 200px;
}

.el-main {
  background-color: #e9eef3;
  color: #333;
  text-align: center;
  line-height: 160px;
}

body > .el-container {
  margin-bottom: 40px;
}

.el-container:nth-child(5) .el-aside,
.el-container:nth-child(6) .el-aside {
  line-height: 260px;
}

.el-container:nth-child(7) .el-aside {
  line-height: 320px;
}
</style>
