<template>
    <div>
        <div class="breadcrumb">
            <span>V2EX / </span>
            <span>最新主题</span>
        </div>
        <TopicCard v-for="topic in topics" :topic="topic" :key="topics.indexOf(topic)"></TopicCard>
    </div>
</template>

<script>
import TopicCard from "./TopicCard.vue"
import axios from "axios"
//使用export default默认输出时，使用import进行模块的导入不需要加上大括号，因为只可能对应一个方法所以也可以取任何名字
export default {
    data() {
        return {
            topics: []
        }
    },
    created: function() {
        var self = this
        axios.get("/api/topics/latest.json").then(function(reseponse) {
            self.topics = reseponse.data
        })
    },
    components: {
        TopicCard
    }
}
</script>

<style>
.breadcrumb{
    margin: 10px 40px;
}
.breadcrumb span{
    font-size:18px;
}
</style>
