<template>
  <ul class="list-group col-md-4">
    <video-list-item 
      v-for="video in videos" 
      :key="video.etag"
      :video="video"
      @videoSelect="onVideoSelect"
      >
    </video-list-item>
  </ul>
</template>

<script>
import VideoListItem from './VideoListItem'

export default {
  name: 'VideoList',
  props: ['videos'],
  components: {
    VideoListItem
  },
  methods: {
    onVideoSelect(video) {
      this.$emit('videoSelect', video)
    }
  }
}
</script>

<style>
</style>
