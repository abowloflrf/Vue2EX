<template>
    <mu-card class="topic-card">
        <div class="topic-card-header">
            <div class="header-avatar">
                <img :src="topic.member.avatar_normal"/>
            </div>
            <div class="header-title">
                <router-link :to="{ name: 'topic-detail', params: { id: topic.id }}">{{topic.title}}</router-link>
            </div>
        </div>
        <mu-divider/>
        <mu-card-actions class="topic-card-footer">
            <mu-chip class="node-chip">
                {{topic.node.title}}
            </mu-chip>
            <mu-chip class="reply-num-chip">
                {{topic.replies}}
            </mu-chip>
            <span class="topic-card-author"><router-link :to="{ name: 'member', params: { username: topic.member.username }}">{{topic.member.username}}</router-link></span>
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
.topic-card-header div{
    display:inline;
}
.topic-card-header .header-avatar img{
    float:left;
    margin-right:10px;
}
.topic-card-header .header-title a{
    font-size: 18px;
    color: #212121;
}

.topic-card-header img {
    height: 30px;
    width: 30px;
    border-radius:4px;
    vertical-align:text-top;
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
    background:#f5f5f5;
    color:#999999;
}
.topic-card .mu-chip:hover{
    background:#e2e2e2;
    color:#777777;
}
.topic-card-author a{
    margin-left:5px;
    color:#4d5256;
    font-weight:bold;
}
</style>

