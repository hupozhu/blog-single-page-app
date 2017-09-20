<template>
  <div>
  <div v-for="item of articleData">
    <div class="article-box">
      <img class="poster" src="./poster.jpg">
      <p class="article-title can-click"><span>{{item.title}}</span></p>
      <!-- 发布日期和标签 -->
      <ul>
        <li style="font-size:30px"><img class="icon-calender" src="./calender.png"></li>
        <li class="riqi-num can-click">{{item.created_at}}</li>
        <li><img class="icon-tag" src="./tag.png"></li>
        <li class="can-click">{{item.remark}}</li>
      </ul>

      <p class="article-content">{{item.brief}}</p>
    </div>
  </div>
  </div>
</template>

<script>
export default{
  name: 'article',
  props: [
    'articleData'
  ]
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
