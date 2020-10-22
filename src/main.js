/*
 * @Author: hubotao
 * @Date: 2020-10-21 13:08:57
 * @LastEditTime: 2020-10-21 13:40:15
 * @LastEditors: Please set LastEditors
 * @Description: 主文件
 * @FilePath: \测试文件\hk-video-test\src\main.js
 */
// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'

import ElementUI from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css'


import Videojs from 'video.js'
import 'video.js/dist/video-js.css'

Vue.prototype.$video = Videojs

Vue.use(ElementUI)

Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>'
})
