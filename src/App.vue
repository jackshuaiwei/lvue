<script>
  import { h,ref } from 'vue';
  import { NIcon } from "naive-ui";
  import { RouterLink, RouterView  } from 'vue-router'
  import {IosMegaphone} from '@vicons/ionicons4'
  import {Home32Filled,BoxSearch20Filled,PeopleTeamToolbox20Filled,TextParagraphDirection20Filled,PeopleCommunity20Filled} from '@vicons/fluent'

  function renderIcon(icon) {
    return () => h(NIcon, null, { default: () => h(icon) });
  }

  const menuOptions = [
    {
      label:() => h(RouterLink,{"to":{name:"home"},"style":{"fontSize":"20px"}},()=>"首页"),
      key: "home",
      icon: renderIcon(Home32Filled)
    },
    {
      label:() => h(RouterLink,{"to":{name:"searchCenter"},"style":{"fontSize":"20px"}},()=>"研究中心概况"),
      key: "searchCenter",
      icon: renderIcon(BoxSearch20Filled)
    },
    {
      label:() => h(RouterLink,{"to":{name:"direction"},"style":{"fontSize":"20px"}},()=>"研究方向"),
      key: "direction",
      icon: renderIcon(TextParagraphDirection20Filled)
    },
    {
      label:() => h(RouterLink,{"to":{name:"members"},"style":{"fontSize":"20px"}},()=>"团队成员"),
      key: "team",
      icon: renderIcon(PeopleTeamToolbox20Filled)
    },
    {
      label:() => h(RouterLink,{"to":{name:"news"},"style":{"fontSize":"20px"}},()=>"新闻动态"),
      key: "news",
      icon: renderIcon(PeopleCommunity20Filled)
    },
    {
      label:() => h(RouterLink,{"to":{name:"contact"},"style":{"fontSize":"20px"}},()=>"招贤纳士"),
      key: "contact",
      icon: renderIcon(IosMegaphone)
    },
  ];

  const menuThemeOverrides = {
    itemTextColorHoverHorizontal:"#003F88",
    itemIconColorHoverHorizontal:"#003F88",
    itemTextColorActiveHoverHorizontal:"#003F88",
    itemIconColorActiveHoverHorizontal:"#003F88",
    itemIconColorActiveHorizontal:"#003F88",
    itemTextColorActiveHorizontal:"#003F88"
    // color:"blue",
  }

  export default{
    data(){
      return {
        activeKey: ref("home"),
        menuOptions,
        menuThemeOverrides
      }
    },
    components: {
      RouterLink,RouterView
    },
    created(){
      this.$router.afterEach((to)=>{
        this.activeKey = ref(to.name)
      })
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
      <n-menu v-model:value="activeKey" mode="horizontal" :options="menuOptions" :theme-overrides="menuThemeOverrides"/>
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
    display: flex;
    align-items: center;
  }


  
</style>
