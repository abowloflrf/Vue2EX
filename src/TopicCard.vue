<template>
    <mu-card class="topic-card">
        <div class="topic-card-header">
            <img :src="topic.member.avatar_normal"/>
            <span class="topic-card-author"><router-link :to="{ name: 'member', params: { username: topic.member.username }}">{{topic.member.username}}</router-link></span>
        </div>
        <mu-card-text class="topic-card-title">
            <router-link :to="{ name: 'topic-detail', params: { id: topic.id }}">{{topic.title}}</router-link>
        </mu-card-text>
        <mu-divider/>
        <mu-card-actions class="topic-card-footer">
            <mu-chip class="node-chip">
                {{topic.node.title}}
            </mu-chip>
            <mu-chip class="reply-num-chip">
                {{topic.replies}}
            </mu-chip>
            <span class="created-at">{{createdAt}}</span>
        </mu-card-actions>
    </mu-card>
</template>
<script>
export default {
    props: {
        topic: {
            type: Object,
            required: true
        }
    },
    computed:{
        createdAt:function(){
            var date=new Date(this.topic.created*1000)
            return date.toLocaleString()
        }
    }
}
</script>
<style>
.topic-card {
    margin: 0 40px 15px 40px;
}
.topic-card-header {
    padding: 12px;
}
span.topic-card-author {
    margin-bottom: 15px;
}
.topic-card-header img {
    height: 30px;
    width: 30px;
    border-radius: 50%;
}
.topic-card-title {
    padding: 0 12px;
}
.topic-card-title a {
    font-size: 20px;
    color: #212121;
}
.topic-card-footer {
    padding: 12px;
}
.topic-card-footer .created-at{
    font-style: italic;
    color: #444;
    font-size: 12px;
    margin-left: 10px;
}
.topic-card .mu-chip {
    line-height: 24px;
    border-radius: 12px;
}
</style>

