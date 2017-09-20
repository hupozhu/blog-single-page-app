import fetch from '@/utils/fetch'

export function fetchAllArticlesList (query) {
  return fetch({
    url: '/article/getallarticles',
    method: 'get',
    params: query
  })
}
