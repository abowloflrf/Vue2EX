<template>
    <div v-if="topic">
        <mu-content-block class="topic-main">
            <h1 class="topic-title">{{topic.title}}</h1>
            <span class="topic-author"><router-link :to="{ name: 'member', params: { username: topic.member.username }}">{{topic.member.username}}</router-link></span>
            <span class="created-at">{{createdAt}}</span>
            <mu-divider/>
            <div class="topic-content" v-html="topic.content_rendered"></div>
        </mu-content-block>
    <reply-list v-if="topic.replies>0" :topic-id="id" class="topic-replies"></reply-list>
    <div class="no-reply" v-else>
        <span style="color: rgba(0, 0, 0, 0.25);">目前尚无回复</span>
    </div>
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
<style>
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
.topic-content img{
    max-width:100%;
}
.topic-content pre{
    display: block;
    padding: 1em;
    overflow-y: auto;
    overflow-x: hidden;
    background:#f6f8fa;
    border-radius:4px;
    border:1px solid #eaecef;
}
.no-reply{
    border:2px dashed rgba(0, 0, 0, 0.1);
    border-radius:3px;
    padding:10px 20px;
    text-align:center;
}
.no-reply span{
    font-size:18px;
    line-height:150%;
}
</style>


