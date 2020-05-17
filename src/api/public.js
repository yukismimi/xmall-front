import axios from 'axios'
import {getStore} from '/utils/storage'
axios.defaults.timeout = 10000
axios.defaults.headers.post['Content-Type'] = 'application/x-www=form-urlencoded'
// if (getStore('token') !== null) { axios.defaults.headers.common['token'] = getStore('token') }
export default {
  fetchGet (url, params = {}) {
    return new Promise((resolve, reject) => {
      axios.get(url, {
        params: params,
        headers: {
          'token': getStore('token') !== null ? getStore('token') : ''
        }
      }).then(res => {
        resolve(res.data)
      }).catch(error => {
        reject(error)
      })
    })
  },
  fetchPost (url, params = {}) {
    return new Promise((resolve, reject) => {
      axios.post(url, params, {
        headers: {
          'token': getStore('token') !== null ? getStore('token') : ''
        }
      }).then(res => {
        resolve(res.data)
      }).catch(error => {
        reject(error)
      })
    })
  },
  fetchPut (url, params = {}) {
    return new Promise((resolve, reject) => {
      axios.put(url, params, {
        headers: {
          'token': getStore('token') !== null ? getStore('token') : ''
        }
      }).then(res => {
        resolve(res.data)
      }).catch(error => {
        reject(error)
      })
    })
  },
  fetchDelete (url, params = {}) {
    return new Promise((resolve, reject) => {
      axios.delete(url, {
        params: params,
        headers: {
          'token': getStore('token') !== null ? getStore('token') : ''
        }
      }).then(res => {
        resolve(res.data)
      }).catch(error => {
        reject(error)
      })
    })
  }
}
