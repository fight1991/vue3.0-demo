import axios from 'axios'
export default class Base {
  constructor (url) {
    this.url = url
    this.instance = axios.create({
      baseURL: import.meta.env.API,
      timeout: 15000
    })
  }
  get () {
    return this.instance.get(this.url)
  }
  post (params) {
    return this.instance.post(this.url, params)
  }
}
