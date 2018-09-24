<template>
  <div>
    <input @input="onInput" placeholder="Search for a video . . ." autofocus/>
  </div>
</template>

<script>
export default {
  name: 'SearchBar',
  methods: {
    onInput(event) {
      this.$emit('termChange', event.target.value)
    }
  }
}
</script>

<style scoped>
input {
  width: 70%;
  margin-bottom: 2%;
  border-radius: 5px;
  height: 40px;
  font-size: 1.1em;
}
div {
  text-align:  center;
  margin: 20px;
}
</style>

