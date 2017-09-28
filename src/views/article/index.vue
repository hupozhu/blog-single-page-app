<template>
  <div>
    <article-list :articleData="articleList"></article-list>
    <div class="loadmore" v-on:click="loadMore">加载更多</div>
  </div>
</template>

<script>
import ArticleList from '../../components/article/articleList.vue'
import articleApi from '@/api/article'

export default{
  data () {
    return {
      articleList: [],
      page: 1
    }
  },
  created () {
    this.getData()
  },
  methods: {
    getData () {
      this.fetchAllArticlesList({ 'page': this.page, 'limit': 1 }).then(res => {
        if (res.status === 200) {
          this.articleList = this.articleList.concat(res.data.data)
        }
      })
      .catch(function (err) {
        alert(err)
        console.log(err)
      })
    },
    loadMore () {
      this.page++
      this.getData()
    }
  },
  components: {
    ArticleList
  },
  mixins: [articleApi]
}
</script>

<style>
.loadmore{
  margin-bottom: 20px;
}
</style>
