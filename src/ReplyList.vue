<template>
    <div>
        <reply-card v-for="reply in replies" :reply="reply" :key="replies.indexOf(reply)"></reply-card>
    </div>
</template>
<script>
import ReplyCard from "./ReplyCard.vue"
import axios from "axios"
export default {
    props:['topicId'],
  data(){
      return{
          replies:[]
      }
  },
  created:function(){
    var self=this
    axios.get("/api/replies/show.json?topic_id="+self.topicId).then(function(reseponse) {
                self.replies = reseponse.data;
    })
  },
  components:{
      ReplyCard
  }
}
</script>
<style scoped>

</style>

