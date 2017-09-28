import fetch from '@/utils/fetch'

const tagsApi = {
  methods: {
    getQuickNav () {
      return fetch({
        url: '/index/getQuickNav',
        method: 'get'
      })
    }
  }
}

export default tagsApi
