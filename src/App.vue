<template><div class="layout">
    <div class="header">
      <div class="logo">
        Muse-UI
      </div>
    </div>
    <div class="content">
      <div class="body">
            <router-view></router-view>
      </div>
    </div>
    <div class="footer">
      Muse-UI ©2017 Created by Muse-UI
    </div>
  </div>
    
</template>

<script>
export default {

};
</script>

<style scoped>
.layout{
  background-color: rgb(236, 236, 236);
}

.header{
  background-color: #7e57c2;
}

.logo{
  font-size: 24px;
  color: white;
  display: inline-block;
  padding: 10px 20px;
}

.nav{
  display: inline-block;
  width: calc(100% - 150px);
  margin: 0 auto;
}

.tab{
  margin: 0 auto;
  width: 400px;
  background-color: rgba(0, 0, 0, 0);
}

.content{
  max-width: 1200px;
  margin: 20px auto;
}

.breadcrumb{
  margin: 10px 0;
}

.body{
  background-color: white;
  border-radius: 5px;
  min-height: 500px;
}

.footer{
  padding: 20px 0;
  text-align: center;
}
</style>
