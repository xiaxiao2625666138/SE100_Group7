<template>
    <div class="user">
        <user-header></user-header>
        <user-content></user-content>
    </div>
</template>

<script>
import UserHeader from '../home/pages/Header'
import UserContent from './pages/content'
export default{
    name: 'UserHome',
    components: {
        UserHeader,
        UserContent
    }
}

</script>

<style scoped>

</style>