<template>
    <mu-paper class="reply">
        <div class="reply-meta">
            <router-link :to="{ name: 'member', params: { username: reply.member.username }}"><img class="reply-avatar" :src="reply.member.avatar_mini"/></router-link>
            <span class="reply-author"><router-link :to="{ name: 'member', params: { username: reply.member.username }}">{{reply.member.username}}</router-link></span>
            <span class="reply-at">{{replyAt}}</span>
        </div>
        
        <div class="reply-content" v-html="reply.content_rendered"></div>

        <span>❤️ {{reply.thanks}}</span>
    </mu-paper>
</template>
<script>
export default {
    props: {
        reply: {
            type: Object,
            required: true
        }
    },
    computed: {
        replyAt: function() {
            var date = new Date(this.reply.created * 1000)
            return date.toLocaleString()
        }
    }
}
</script>
<style scoped>
.reply {
    overflow: hidden;
    padding: 10px 20px;
    margin-bottom: 15px;
}
.reply-meta {
    position: absolute;
}
.reply-avatar {
    margin-right: 5px;
    border-radius: 4px;
}
.reply-author {
    position: relative;
    top: -5px;
}
.reply-at {
    position: relative;
    left: 5px;
    top: -5px;
    font-size: 12px;
    color: #999;
    font-style: italic;
}
.reply-content {
    margin-top: 30px;
}
</style>

