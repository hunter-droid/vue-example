import http from './http.js'

export default {
  arctypeUrl: '/api/arctype',
  singleUrl: '/api/single',
  archivesUrl: '/api/Archives',
  articleUrl: '/api/Article',
  imagesDetailUrl: '/api/Images',

  getArcType: async function (id) {
    const res = await http.get(this.arctypeUrl, { id: id })
    return res.data
  },
  getSingle: async function (id) {
    const res = await http.get(this.singleUrl, { id: id })
    return res.data
  },
  getArchives: async function (typeId) {
    const res = await http.get(this.archivesUrl, { typeId: typeId })
    return res.data
  },
  getArticle: async function (aid) {
    const res = await http.get(this.articleUrl, { aid: aid })
    return res.data
  },
  getImagesDetail: async function (aid) {
    const res = await http.get(this.imagesDetailUrl, { aid: aid })
    return res.data
  }
}
