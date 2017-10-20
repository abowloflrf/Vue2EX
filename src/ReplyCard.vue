<template>
    <mu-paper class="reply">
        <img :src="reply.member.avatar_mini"/>
        <span>{{reply.member.username}}</span>
        <div v-html="reply.content_rendered"></div>
        <span>感谢：{{reply.thanks}}</span>
    </mu-paper>
</template>
<script>
export default {
    props: {
        reply: {
            type: Object,
            required: true
        }
    }
}
</script>
<style scoped>
.reply {
    padding: 10px 30px;
    margin-bottom: 15px;
}
</style>

