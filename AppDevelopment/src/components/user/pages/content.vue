<template>
  <div class="content">
    <content-left></content-left>
    <content-right></content-right>
  </div>
</template>
<script>
import ContentLeft from './contentLeft'
import ContentRight from './contentRight'
export default {
  name: 'UserContent',
  components: {
    ContentLeft,
    ContentRight
  }
}
</script>
<style scoped>
.content{
  position: relative;
  height: 8.88rem;
  overflow: hidden;
  width: 23.04rem;
  margin-top: 1rem;
  margin-left: .5rem;
  border-radius: 8px;
}
</style>
