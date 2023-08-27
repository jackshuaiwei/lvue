<script>
  import { RouterLink, RouterView } from 'vue-router'

  export default{
    components: {
      RouterLink,RouterView
    }
  }
</script>

<template>
  <div class="headerParent">
    <div class="headerParentLogo">
      <div class="headerParentLogoImg">
        <img src="/img/logo.png" alt="">
      </div> 
    </div>
  </div>
  <div class="newHeaderParent">
    <div class="newHeader">
      <n-breadcrumb>
        <n-breadcrumb-item>
          <router-link to="/" class="titleDetail">首页</router-link>
        </n-breadcrumb-item>
        <n-breadcrumb-item>
          <router-link to="/search" class="titleDetail">研究中心概况</router-link>
        </n-breadcrumb-item>
        <n-breadcrumb-item>
          <router-link to="/article" class="titleDetail">师资队伍</router-link>
        </n-breadcrumb-item>
        <n-breadcrumb-item>
          <router-link to="/members" class="titleDetail">研究方向</router-link>
        </n-breadcrumb-item>
        <n-breadcrumb-item>
          <router-link to="/news" class="titleDetail">团队成员</router-link>
        </n-breadcrumb-item>
        <n-breadcrumb-item>
          <router-link to="/contact" class="titleDetail">招贤纳士</router-link>
        </n-breadcrumb-item>
      </n-breadcrumb>
    </div>
  </div>
  <router-view/>
</template>

<style scoped>
  .header{
    width: 100%;
    background-color: #63065f;
  }

  .header_con{
    color: #000;
    width: 1200px;
    margin: 0 auto;
    height: 50px;
    display: flex;
    justify-content: space-between;
  }

  .iconCon{
    width: 200px;
  }

  .titleCon{
    width: 700px;
  }

  .iconDetail{
    font-size: 40px;
    line-height: 50px;
    color: #fff;
  }

  .headerParent{
    width: 100%;
    height: 156px;
    background-image: url("/img/header-bg.png");
  }

  .headerParentLogo{
    width: 1600px;
    margin: 0 auto;
    height: 156px;
    display: flex;
    align-items: center;
  }

  .headerParentLogoImg{
    width: 376px;
    height: 90px;
  }

  .newHeaderParent{
    width:100%;
    background-color: #fff;
  }

  .newHeader{
    width:1600px;
    height: 67px;
    margin: 0 auto;
  }

  .titleDetail{
    display: block;
    font-size: 20px;
    line-height: 60px;
    margin-left: 30px;
    margin-right: 30px;
    color: #000;
  }
  
  .router-link-active{
    color: cornflowerblue;
  }
</style>
