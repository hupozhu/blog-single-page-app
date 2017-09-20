<template>
  <div class="blog">
    <!--头部-->
    <header-bar></header-bar>
    <div class="blog-body" style="clear:both">
        <!--左侧详情-->
        <div class="blog-left">
          <person-info></person-info>
        </div>
        <!--中间列表-->
        <div class="blog-content">
          <app-main></app-main>
        </div>
        <!--右侧最新文章-->
        <div class="blog-right">
          <recent></recent>
        </div>
    </div>
  </div>
</template>

<script>
import { HeaderBar, PersonInfo, Recent, AppMain } from '../../views/layout'

export default {
  name: 'layout',
  components: {
    HeaderBar,
    PersonInfo,
    Recent,
    AppMain
  }
}
</script>

<style>
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
