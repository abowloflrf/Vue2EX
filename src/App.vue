<template>
<div class="layout">
    <div class="header">
      <div class="logo">
        <router-link :to="{name:'topics'}">Vue2EX</router-link>
      </div>
    </div>
    <div class="content">
          <router-view></router-view>
    </div>
    <site-footer></site-footer>
</div>    
</template>
<script>
import SiteFooter from "./SiteFooter.vue";
export default {
    components:{
        SiteFooter
    }
}
</script>

<style>
html,body{
    height: 100%;
    width: 100%;
}
.layout {
    background-color: rgb(236, 236, 236);
}

.header {
    background:#fff;
    box-shadow:0 0.125rem 0.3125rem rgba(0,0,0,.26);
}

.logo a {
    font-size: 24px;
    color: #212121;
    display: inline-block;
    padding: 10px 20px;
}

.nav {
    display: inline-block;
    width: calc(100% - 150px);
    margin: 0 auto;
}

.footer {
    padding: 20px 0;
    text-align: center;
    background: #fff;
    border-top: 1px solid #c7c7c7;
}
.content {
    padding: 0 15px;
    max-width: 900px;
    margin: 20px auto;
}
</style>
