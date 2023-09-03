<script>
  import MyFooter from '../components/MyFooter.vue'

  export default{
    components:{
      MyFooter
    },
    data(){
      return {
        newsList:[
            {year:"2023-07",day:"04",title:"数十载各追梦，重逢惹情牵——浙江大学物理学院举办88级入学三十五周年返校活动"},
            {year:"2023-06",day:"12",title:"校友企业——物理学院师生走访校友企业杭州秋光科技有限公司"},
            {year:"2023-05",day:"29",title:"杰出校友——“求是情深 梦想物院”浙江大学物理学院校友企业家交流会成功举办"},
        ],
        activeContent:"",
      }
    },
    methods:{
      
    }
  }
</script>
<template>
  <div class="commonContent">
    <div class="commonContentLeft">
      <div class="commonContentLeftFirstTitle">
        新闻动态
      </div>

      <!-- <div class="commonContentLeftTitle" v-for="(oneTitle,index) in titleList" :class="activeTitle == oneTitle.index ? 'commonContentLeftTitleActive' : ''" @click="changeActiveTitle(oneTitle.index,oneTitle.title)">
        {{ oneTitle.title }}
      </div> -->
    </div>
    <div class="commonContentRight">
      <div class="commonContentRightTitle">
        <div class="commonContentRightTitleMain">新闻动态</div>
        <div class="commonContentRightTitleDetail">
          <span>当前位置：</span>
          <n-breadcrumb>
            <n-breadcrumb-item separator="|">首页</n-breadcrumb-item>
            <n-breadcrumb-item separator="|">新闻动态</n-breadcrumb-item>
          </n-breadcrumb>
        </div>
      </div>
      <div class="commonContentRightContent">
        <div class="oneNew" v-for="(oneNew,index) in newsList">
          <div class="oneNewDate">
            <div class="oneNewDateDay">{{ oneNew.day }}</div>
            <div class="oneNewDateYear">{{ oneNew.year }}</div>
          </div>
          <div class="oneNewTitle">
            <div class="oneNewTitleBig">{{ oneNew.title }}</div>
            <div class="oneNewTitleSmall">{{ oneNew.title }}</div>
          </div>
        </div>
      </div>
    </div>
  </div>
  
  <MyFooter />
</template>

<style scoped>
  .oneNew{
    display: flex;
    width: 100%;
    height: 122px;
    margin-top: 30px;
    border: 1px solid #f1f1f1;
  }

  .oneNew:hover{
    cursor: pointer;
    background-color: #0e3989;
  }

  .oneNew:hover div{
    color: #fff;
  }

  .oneNewDate{
    width: 130px;
    margin-top: 18px;
  }

  .oneNewTitle{
    margin-left: 50px;
  }
  .oneNewDateDay{
    font-size: 30px;
    width: 100%;
    text-align: center;
    color: #0F429B;
    border-right: 1px solid #f1f1f1;
  }

  .oneNewDateYear{
    font-size: 20px;
    width: 100%;
    text-align: center;
    color: #0F429B;
    border-right: 1px solid #f1f1f1;
  }

  .oneNewTitleBig{
    width: 100%;
    font-size: 18px;
    color: #333333;
    font-weight: bold;
    margin-top: 10px;
  }

  .oneNewTitleSmall{
    width: 100%;
    font-size: 16px;
    color: #999999;
    margin-top: 20px;
  }
</style>
