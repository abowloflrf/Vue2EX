<template>
  <div v-if="member">
      <h1>{{member.username}}</h1>
      <p>bio:{{member.bio}}</p>
      <p>status:{{member.status}}</p>
      <!-- TODO: 这里只有域名时错误的跳转 -->
      <p>website:<a :href="member.website" target="_blank">{{member.website}}</a></p>
  </div>
</template>

<script>
import axios from "axios"
export default {
    data(){
        return {
            username:this.$route.params.username,
            member:null
        }
    },
    created:function(){
        var self=this
        axios.get("/api/members/show.json?username="+self.username)
        .then(function(reseponse){
            self.member=reseponse.data
        })
    }
}
</script>
