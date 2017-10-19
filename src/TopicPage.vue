<template>
    <mu-content-block class="topic-main">
        <h1>{{topic.title}}</h1>
        <span>{{topic.member.username}}</span>
        <mu-divider/>
        <div class="topic-content" v-html="topic.content_rendered"></div>
        <reply-list :topic-id="id"></reply-list>
    </mu-content-block>
</template>
<script>
import ReplyList from './ReplyList.vue'
import axios from "axios"
export default {
  data(){
      return {
          id:this.$route.params.id,
          topic:null
      }
  },
  created:function(){
    var self=this
    axios.get("/api/topics/show.json?id="+self.id).then(function(reseponse) {
                self.topic = reseponse.data[0];
    })
  },
  components:{
      ReplyList
  }
}
</script>
<style scoped>
.topic-main{
    margin: 10px 30px;
}
</style>


