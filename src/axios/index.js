import Vue from 'vue'
import axios from 'axios'

axios.interceptors.response.use(res => {
  res = res.data;
  if(res.data && res.ret) {
    return res.data
  } else {
    return res
  }
}, err => {
  return Promise.reject(err)
})

Vue.prototype.$axios = axios;