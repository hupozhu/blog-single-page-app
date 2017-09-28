<template>
  <div class="recent-box">
    <span class="recent-title" style="margin-top: 0px;">目录</span>
    <category-list :categories="categoryList"></category-list>
    <span class="recent-title">时间线</span>
    <category-list-by-month :categories="articleCountByMonth"></category-list-by-month>
  </div>
</template>

<script>
import CategoryList from '../../components/category/categoryList.vue'
import CategoryListByMonth from '../../components/category/CategoryListByMonth.vue'
import CateApi from '@/api/categories'

export default{
  data () {
    return {
      categoryList: [],
      articleCountByMonth: []
    }
  },
  created () {
    this.getData()
  },
  methods: {
    getData () {
      this.getQuickNav().then(res => {
        if (res.status === 200) {
          this.categoryList = res.data.data.category_tree
          this.articleCountByMonth = res.data.data.article_count_by_month
        }
      }).catch(err => {
        alert(err)
      })
    }
  },
  components: {
    CategoryList,
    CategoryListByMonth
  },
  mixins: [CateApi]
}
</script>

<style>
.recent-title{
  font-weight: 500;
  display: block;
  text-align: left;
  font-size: 16px;
  margin-top: 30px;
  margin-left: 10px;
}
</style>
