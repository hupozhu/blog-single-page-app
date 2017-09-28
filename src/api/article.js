import fetch from '@/utils/fetch'

const articleApi = {
  methods: {
    fetchAllArticlesList (query) {
      return fetch({
        url: '/article/getallarticles',
        method: 'get',
        params: query
      })
    }
  }
}

export default articleApi
// export function fetchAllArticlesList (query) {
//   return fetch({
//     url: '/article/getallarticles',
//     method: 'get',
//     params: query
//   })
// }
