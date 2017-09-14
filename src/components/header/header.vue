<template>
  <div class="blog-header">
    <!-- Logo部分 -->
    <div class="logo">
      <img class="superman" src="./superman.png">
      <i class="header-title"> Sampson </i>
    </div>

    <!-- 导航部分 -->
    <div class="header-category">
      <ul >
        <li>
          <router-link class="title-item" to="/">
            <span>主页</span>
          </router-link>
        </li>
        <li>
          <!-- <router-link :to="/article"> -->
            文章
          <!-- </router-link> -->
        </li>
        <li>
          <!-- <router-link :to="/category"> -->
            目录
          <!-- </router-link> -->
        </li>
        <li>
          <!-- <router-link :to="/tag"> -->
            标签
          <!-- </router-link> -->
        </li>
        <li>
          <!-- <router-link :to="/about"> -->
            关于
          <!-- </router-link> -->
        </li>
      </ul>
    </div>

    <!-- 搜索框部分 -->
    <div class="search-box">
      <div class="search">
      </div>
    </div>
    <div ></div>
  </div>
</template>

<script>
  export default {
  }
</script>

<style>
.title-item{
  color: #2c3e50;
}
.header-category{
  width: 50%;
  font-size: 20px;
  line-height: 80px;
  float: left;
}
.header-category li{
  width: 50px;
  float: left;
  margin: 0 25px;
}
.header-category li:hover{
  color: #29A7E7;
  cursor: pointer;
}
.blog-header{
  height: 80px;
  margin: 0 auto;
  background-color: white;
  border-bottom: 1px solid #EAEDEF;
}
.logo{
  width: 30%;
  float: left;
}
.logo i{
  font-size: 30px;
  line-height: 80px;
}
.search-box{
  width: 20%;
  float: left;
}
.search {
  width: 80%;
  height: 40px;
  border: 1px solid #d2d2d2;
  border-radius:20px;
  margin: 19px 0;
}
.superman{
  display: inline-block;
  height: 25px;
  width: 35px;
  line-height: 80px;
}
</style>
