import Vue from 'vue'
import App from './App'
import axios from 'axios'

axios.defaults.baseURL = 'https://www.googleapis.com/youtube/v3/search'

new Vue ({
  render: h => h(App)
}).$mount('#app')