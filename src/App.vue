<!--
 * @Author: your name
 * @Date: 2020-10-21 13:08:57
 * @LastEditTime: 2020-10-21 16:40:38
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \测试文件\hk-video-test\src\App.vue
-->
<template>
  <div id="app">
    <router-view/>
  </div>
</template>

<script>
export default {
  name: 'App',
  beforeCreate() {
    let volume = window.localStorage.volume;
    if (volume) {
        this.$store.state.video.volume = volume;
    }
}

}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  /* margin-top: 60px; */
}
</style>
