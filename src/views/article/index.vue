<template>
  <article-list :articleData="articleList"></article-list>
</template>

<script>
import ArticleList from '../../components/article/articleList.vue'
import { fetchAllArticlesList } from '@/api/article'

export default{
  data () {
    return {
      articleList: []
    }
  },
  created () {
    alert('haha')
    this.getData()
  },
  methods: {
    getData () {
      let context = this
      fetchAllArticlesList({'page': 2, 'limit': 3}).then(function (res) {
        console.log(res.data)
        if (res.status === 200) {
          context.articleList = res.data.data
        }
      })
      .catch(function (err) {
        alert(err)
        console.log(err)
      })
    }
  },
  components: {
    ArticleList
  }
}
</script>

<style>
</style>
