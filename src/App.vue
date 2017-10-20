<template><div class="layout">
    <div class="header">
      <div class="logo">
        <router-link :to="{name:'topics'}">Vue2EX</router-link>
      </div>
    </div>
    <div class="content">
          <router-view></router-view>
    </div>
    <div class="footer">
      Vue2EX ©2017 Created by ruofeng
    </div>
  </div>
    
</template>

<script>
export default {};
</script>

<style scoped>
.layout {
  background-color: rgb(236, 236, 236);
}

.header {
  background-color: #7e57c2;
}

.logo a{
  font-size: 24px;
  color: white;
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
}
.content{
  padding: 0 15px;
}
</style>
