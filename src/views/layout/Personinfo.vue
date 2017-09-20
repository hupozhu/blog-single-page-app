<template>
  <div class="personinfo">
    <!--头像-->
    <div class="avatar">
      <img src="./avatar.jpg">
    </div>
    <!--名字-->
    <span class="name">sampson</span>
    <!--格言-->
    <span class="aphorism">lalalal</span>
    <!--位置-->
    <div class="location"><img src="./location.png"><span>广东,深圳</span></div>
    <!-- follow me -->
    <div class="follow">
      <span>FOLLOW</span>
    </div>
    <!-- POSTS & TAGS -->
    <div class="statistics">
      <div class="posts">
        <div class="statistics-box">
          <span class="number">13</span>
          <span>POSTS</span>
        </div>
      </div>
      <div class="tags">
        <div class="statistics-box">
          <span class="number">3</span>
          <span>TAGS</span>
        </div>
      </div>
    </div>
    <!-- 外部链接 -->
    <div class="out-links">
    </div>
  </div>
</template>

<script>
export default {
}
</script>

<style>
.personinfo{
  width: 100%;
  margin-top: 60px;
}
.avatar{
  margin: 0 auto;
}
.avatar img{
  width: 100px;
  height: 100px;
  border-radius: 50%;
  border: 4px solid #F2F6F7;
}
.name{
  display: block;
  font-size: 20px;
  font-weight: bold;
}
.aphorism{
  display: block;
  font-size: 18px;
}
.location span{
  font-size: 14px;
  display: inline-block;
  color: #8B9095
}
.location img{
  width: 12px;
  margin-right: 8px;
  height: 12px;
}
.follow{
  width: 150px;
  height: 40px;
  margin: 20px auto;
  border-radius: 25px;
  background-color: #29A7E7;
  text-align: center;
  line-height: 40px;
  color: white;
}
.statistics{
  height: 80px;
  border-top: 1px solid #EAEDEF;
  border-bottom: 1px solid #EAEDEF;
}
.posts{
  width: 50%;
  height: 100%;
  float: left;
  border-right: 1px solid #EAEDEF;
}
.statistics-box{
    margin-top: 16px;
}
.statistics span{
  display: block;
}
.number{
  font-weight: bold;
  font-size: 18px;
}
.out-links{
  height: 40px;
}
</style>
