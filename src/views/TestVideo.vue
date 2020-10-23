<!--
 * @Author: your name
 * @Date: 2020-10-21 14:16:36
 * @LastEditTime: 2020-10-22 16:01:05
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \测试文件\hk-video-test\src\views\TestVideo.vue
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
      src:'//vjs.zencdn.net/v/oceans.mp4'
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
