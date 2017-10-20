<template>
    <div>
        <mu-content-block class="topic-main" v-if="topic">
            <h1 class="topic-title">{{topic.title}}</h1>
            <span class="topic-author">{{topic.member.username}}</span>
            <mu-divider/>
            <div class="topic-content" v-html="topic.content_rendered"></div>
        </mu-content-block>
    <reply-list :topic-id="id" class="topic-replies"></reply-list>
    </div>
</template>
<script>
import ReplyList from "./ReplyList.vue"
import axios from "axios"
export default {
    data() {
        return {
            id: this.$route.params.id,
            topic: null
        }
    },
    created: function() {
        var self = this
        axios
            .get("/api/topics/show.json?id=" + self.id)
            .then(function(reseponse) {
                self.topic = reseponse.data[0]
            })
    },
    components: {
        ReplyList
    }
}
</script>
<style scoped>
.topic-main {
    background: #fff;
    border-radius: 4px;
    margin: 15px auto;
    max-width: 900px;
}
.topic-main hr {
    margin: 10px 0;
}
.topic-title {
    margin: 10px 0;
}
.topic-author {
    font-style: italic;
    color: #666;
    margin-bottom: 10px;
}
.topic-replies {
    margin: 15px auto;
    max-width: 900px;
}
</style>


