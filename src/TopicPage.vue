<template>
    <div>
        <mu-content-block class="topic-main" v-if="topic">
            <h1 class="topic-title">{{topic.title}}</h1>
            <span class="topic-author">{{topic.member.username}}</span>
            <span class="created-at">{{createdAt}}</span>
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
    computed:{
        createdAt:function(){
            var date=new Date(this.topic.created*1000)
            return date.toLocaleString()
        }
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
.topic-main .created-at{
    margin-left: 20px;
    color:#666;
    font-style:italic;
}
.topic-title {
    margin: 10px 0;
    font-size: 22px;
    font-weight: 400;
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
.topic-content{
    word-break:break-all;
}
.topic-content code{
    padding: 0 5px 2px;
    font-size: 0.8em;
    line-height: 1em;
    font-weight: 400!important;
    border-radius: 3px;
}
.topic-content pre {
    max-width: 100%;
    overflow-x: auto;
    margin: 1.5em 0 3em;
    padding: 20px;
    font-size: 1.3rem;
    line-height: 1.4em;
    background: #292c35;
    border-radius: 5px;
}
.topic-content pre code {
    padding: 0;
    font-size: inherit;
    line-height: inherit;
    background: transparent;
}
</style>


