<template>
  <div class="container">
    <h1 align="center" style="margin-bottom:2%;" class="display-4">Browse for videos</h1>
    <search-bar @termChange="onTermChange"/>
    <div class="row">
      <video-detail :video="selectedVideo"/>
      <video-list @videoSelect="onVideoSelect" :videos="videos" />
    </div>
  </div>
</template>

<script>
import axios from 'axios'
import SearchBar from './components/SearchBar'
import VideoList from './components/VideoList'
import VideoDetail from './components/VideoDetail'
import config from '../config/config.js'

const API = config.API_KEY
// 'AIzaSyDyVuGC3OAnG-mFnDpISEVrg3YwadVt5xI'
export default {
  name: 'App',
  data() {
    return {
      videos: [],
      selectedVideo: null
    }
  },
  components: {
    SearchBar,
    VideoList,
    VideoDetail
  },
  methods: {
    onTermChange(searchTerm) {
      axios.get('https://www.googleapis.com/youtube/v3/search', {
        params: {
          key: API,
          type: 'video',
          part: 'snippet',
          q: searchTerm
        }
      }).then(response => {
        this.videos = response.data.items
      })
    },
    onVideoSelect(video) {
      this.selectedVideo = video
    }
  }
}
</script>

<style>
body {
  background-color: rgb(240, 248, 248);
}
</style>
