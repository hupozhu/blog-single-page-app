<template>
  <div class="blog">
    <!--头部-->
    <v-header></v-header>
    <div class="blog-body" style="clear:both">
        <!--左侧详情-->
        <div class="blog-left">
          <v-left></v-left>
        </div>
        <!--中间列表-->
        <div class="blog-content">
          <v-article></v-article>
          <router-view></router-view>
        </div>
        <!--右侧最新文章-->
        <div class="blog-right">
          <v-right></v-right>
        </div>
    </div>
  </div>
</template>

<script>
import header from './components/header/header.vue'
import personInfo from './components/personinfo/personinfo.vue'
import recent from './components/recent/recent.vue'
import article from './components/article/article.vue'

export default {
  components: {
    'v-header': header,
    'v-left': personInfo,
    'v-right': recent,
    'v-article': article
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
}
body{
  background-color: #F2F6F7;
}

.blog-body{
  width: 1200px;
  margin: 0 auto;
}

.blog-left{
  background-color: white;
  margin-top: 40px;
  width: 280px;
  float: left;
}
.blog-content{
  margin-top: 40px;
  margin-left: 20px;
  width: 600px;
  float: left;
}
.blog-right{
  margin-top: 40px;
  margin-left: 40px;
  width: 260px;
  float: left;
}

</style>
