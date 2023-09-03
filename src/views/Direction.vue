<script>
  import MyFooter from '../components/MyFooter.vue'

  export default{
    components:{
      MyFooter
    },
    data(){
      return {
        titleList:[
         {title:'发表文章',index:'publishedArticles'},
         {title:'细胞外基质力生物学',index:'test'},
        ],
        activeContent:"",
        activeTitle:"",
        activeTitleName:"",
      }
    },
    methods:{
      changeActiveTitle(activeIndex,activeName){
        this.activeTitleName = activeName
        this.activeTitle = activeIndex
        this.activeContent = "细胞外基质(ECM)不仅提供了力支持，而且还提供了调节细胞基本功能的重要力线索。ECM的结构和机械特性在健康组织的发育、体内平衡和衰老过程中以及在病理组织(包括纤维化和癌症)中可能发生显著变化。目前，我们致力于将单分子力学表征和水凝胶工程相结合，了解水凝胶中细胞产生的力对合成ECM网络重构的影响。我们也有兴趣探索ECM结构和力性能对细胞迁移、干细胞分化和心肌细胞搏动同步的影响"
      }
    },
    mounted(){
      this.activeTitleName = "发表文章",
      this.activeTitle = "publishedArticles"
      this.activeContent =  "Hai Lei, Quan Ma, Zhangxia Wang, Di Zhang, Xiaoyu Huang, Meng Qin, Haibo Ma*, Wei Wang* and Yi Cao*. Ester Bond: Chemically Labile Yet Mechanically Stable. ACS Nano, 2023, DOI: 10.1021/acsnano.3c03807."
    }
  }
</script>
<template>
  <div class="commonContent">
    <div class="commonContentLeft">
      <div class="commonContentLeftFirstTitle">
        研究方向
      </div>

      <div class="commonContentLeftTitle" v-for="(oneTitle,index) in titleList" :class="activeTitle == oneTitle.index ? 'commonContentLeftTitleActive' : ''" @click="changeActiveTitle(oneTitle.index,oneTitle.title)">
        {{ oneTitle.title }}
      </div>
    </div>
    <div class="commonContentRight">
      <div class="commonContentRightTitle">
        <div class="commonContentRightTitleMain">{{ activeTitleName }}</div>
        <div class="commonContentRightTitleDetail">
          <span>当前位置：</span>
          <n-breadcrumb>
            <n-breadcrumb-item separator="|">首页</n-breadcrumb-item>
            <n-breadcrumb-item separator="|">研究方向</n-breadcrumb-item>
            <n-breadcrumb-item separator="|">{{ activeTitleName }}</n-breadcrumb-item>
          </n-breadcrumb>
        </div>
      </div>
      <div class="commonContentRightContent" v-html="activeContent">
      </div>
    </div>
  </div>
  
  <MyFooter />
</template>

<style scoped>
  .all_artitle_con{
    width: 1200px;
    margin: 0 auto;
    background-color: #fff;
    overflow: hidden;
    min-height: 900px;
  }

  .content{
    margin-top: 20px;
    width: 1150px;
    display: flex;
  }

  .occupyPosition{
    width: 1150px;
    height: 30px;
    border-bottom: #eee solid 1px;
  }

  .conLeft{
    width: 200px;
    border-right: #eee solid 1px;
  }

  .yearTitle{
    border-left: 5px solid #6a0061;
    border-bottom: 1px solid #DDD;
    padding-left: 15px;
    font-weight: 700;
    color: #555;
    font-size: 16px;
    line-height: 27px;
  }

  .oneYearDetail{
    padding-left: 20px;
    color: #50144a;
    height: 40px;
    line-height: 40px;
    font-family: Arial !important;
    cursor: pointer;
  }

  .oneYearDetailClick{
    padding-left: 20px;
    color: #fff;
    height: 40px;
    line-height: 40px;
    font-family: Arial !important;
    cursor: pointer;
    background-color: #50144a;
  }

  .conRight{
    width: 950px;
  }

  .ArtitleCon{
    width: 900px;
    margin: 0 auto;
  }

  .oneArtitle{
    border-bottom: 1px solid #ccc;
    line-height: 36px;
    font-family: 'Arial' !important;
  }
</style>
