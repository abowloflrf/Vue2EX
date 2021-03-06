import Vue from 'vue'
import Router from 'vue-router'
import TopicList from '../TopicList.vue'
import TopicPage from '../TopicPage.vue'
import MemberPage from '../MemberPage.vue'
Vue.use(Router)
export default new Router({
    routes:[
        {
            path:'/',
            name:"topics",
            component:TopicList
        },
        {
            path:'/t/:id',
            name:"topic-detail",
            component:TopicPage
        },
        {
            path:'/go/:tag',
            name:"tag",
            component:TopicList
        },
        {
            path:'/member/:username',
            name:"member",
            component:MemberPage
        }
    ]
})