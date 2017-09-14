<template>
  <div class="article-box">
    <img class="poster" src="./poster.jpg">
    <p class="article-title can-click"><span>Take a Deep Breath and Just Be</span></p>
    <!-- 发布日期和标签 -->
    <ul>
      <li style="font-size:30px"><img class="icon-calender" src="./calender.png"></li>
      <li class="riqi-num can-click">2016-12-07</li>
      <li><img class="icon-tag" src="./tag.png"></li>
      <li class="can-click">Vue</li>
    </ul>

    <p class="article-content">This is Icarus, a free responsive, high resolution and pretty flexible theme for you to use to write about things you love. Make sure to check all the examples out! To download this theme or to check the full feature list, just go here. Feel free to leave a comment there if you digg it!</p>
  </div>
</template>

<script>
export default{
}
</script>

<style>
.article-box{
  clear: both;
  background-color: white;
  margin-bottom: 20px;
}
.can-click:hover{
color: #29A7E7;
cursor: pointer;
}
.poster{
  width: 600px;
  display: block;
  height: 280px;
}
.article-title{
  margin: 10px 20px 0px 20px;
  text-align: left;
  font-size: 30px;
}
.article-box ul{
  text-align: left;
  margin: 10px 20px;
}
.article-box ul li{
  height: 20px;
  line-height: 20px;
  margin-right: 10px;
  float: left;
}
.riqi-num{
  margin-right: 20px;
}
.icon-calender,.icon-tag{
  width: 16px;
  display: block;
  height: 16px;
}
.article-content{
  margin: 50px 20px 0px 20px;
  text-align: left;
  clear: both;
  padding-bottom: 30px;
}
</style>
