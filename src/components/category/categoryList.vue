<template>
  <div class="cate">
    <ul v-for="item of categories">
      <li class="cate_li"><router-link class="cate_item" to="/">{{ item.name }} ({{item.count}})</router-link></li>
      <categorylist v-if="item._child && item._child.length>0" :categories="item._child"></categorylist>
    </ul>
</div>
</template>

<script>
export default {
  name: 'categorylist',
  props: [
    'categories'
  ],
  data () {
    return {
      hasChild: false
    }
  },
  computed: {
    haveChild: function (param) {
      return param._child && this.categories._clild.length
    }
  }
}
</script>

<style>
.cate{
  text-align: left;
  margin-left: 20px;
}
.cate_li{
  height: 30px;
}
.cate_item{
  color: #2c3e50;
}
.cate_item:hover{
  color: #29A7E7;
}
.cate_item::before{
  line-height: 30px;
  content:"--";
  color:#ccc;
  margin-right: 6px;
  font-weight: 400;
}
</style>
