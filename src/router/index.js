/*
 * @Author: your name
 * @Date: 2020-10-21 13:08:57
 * @LastEditTime: 2020-10-21 14:22:19
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \测试文件\hk-video-test\src\router\index.js
 */
import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'
import Video from '@/views/TestVideo'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/helloWorld',
      name: 'HelloWorld',
      component: HelloWorld
    },
    {
      path: '/',
      name: 'Video',
      component:Video
    }
  ]
})
