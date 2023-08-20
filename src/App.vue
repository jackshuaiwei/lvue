<script>
  import { RouterLink, RouterView } from 'vue-router'

  export default{
    components: {
      RouterLink,RouterView
    }
  }
</script>

<template>
  <div class="header">
    <div class="header_con">
      <div class="iconCon">
        <span class="iconDetail">Lhlab</span>
      </div>
      <div class="titleCon">
        <router-link to="/" class="titleDetail">主页</router-link>
        <router-link to="/search" class="titleDetail">研究方向</router-link>
        <router-link to="/article" class="titleDetail">发表文章</router-link>
        <router-link to="/members" class="titleDetail">成员</router-link>
        <router-link to="/news" class="titleDetail">新闻</router-link>
        <router-link to="/contact" class="titleDetail">联系方式</router-link>
      </div>
    </div>
  </div>
  
  <router-view/>
</template>

<style>
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

  .titleDetail{
    font-size: 20px;
    line-height: 50px;
    color: #fff;
    margin-left: 50px;
  }

  .router-link-active{
    font-size: 20px;
    line-height: 50px;
    color: #fff;
    margin-left: 50px;
    border-bottom: 2px solid #fff;
  }
</style>
