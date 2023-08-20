<script>
  export default{
    data(){
      return {
        "defaultHeaderIndex":0,
        "headerList":["主页","研究方向","发表文章","成员","新闻","联系方式"],
      }
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
        <a href="#" :class="index == defaultHeaderIndex ? 'titleDetailClick':'titleDetail'" v-for="(oneHeader,index) in headerList">{{ oneHeader }}</a>
      </div>
    </div>
  </div>
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

  .titleDetailClick{
    font-size: 20px;
    line-height: 50px;
    color: #fff;
    margin-left: 50px;
    border-bottom: 2px solid #fff;
  }

</style>
