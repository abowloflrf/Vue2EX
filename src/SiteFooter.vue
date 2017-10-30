<template>
    <div class="footer" v-if="siteStats">
        <div>
            <span>Vue2EX ©2017 Created by ruofeng / </span>
            <span>话题总数：{{siteStats.topic_max}} / </span>
            <span>会员总数：{{siteStats.member_max}}</span>
        </div>
        <div>
            <span class="footer-title">{{siteInfo.title}}</span>
            <p class="footer-slogan">{{siteInfo.slogan}}</p>
            <p class="footer-description">{{siteInfo.description}}</p>
        </div>        
    </div>
</template>

<script>
import axios from "axios"
export default {
    data() {
        return {
            siteInfo:null,
            siteStats:null
        }
    },
    created:function(){
        var self=this
        axios.get("/api/site/info.json").then(function(reseponse) {
            self.siteInfo = reseponse.data
        })
        axios.get("/api/site/stats.json").then(function(reseponse) {
            self.siteStats = reseponse.data
        })
    }
}
</script>

<style>
.footer p{
    margin:0 0 5px 0;
}
.footer-title{
    margin:0;
    font-weight:600;
    font-size:32px;
}
</style>