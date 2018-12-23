<template>
  <div>
    <question-header></question-header>
    <question-navigation></question-navigation>
    <main-part></main-part>
  </div>
</template>
<script>
import QuestionHeader from './header'
import QuestionNavigation from './navigation'
import MainPart from './mainpart'
export default {
  name: 'Question',
  components: {
    QuestionHeader,
    QuestionNavigation,
    MainPart
  }
}
</script>
<style>

</style>
