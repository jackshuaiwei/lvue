<script>
  import MyFooter from '../components/MyFooter.vue'

  export default{
    components:{
      MyFooter
    },
    data(){
      return {
        titleList:[
         {title:'中心简介',index:'centerDesc'}
        ],
        contentList:{centerDesc:"<p>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;1991年，由浙江大学43级校友、美国哥伦比亚大学教授、诺贝尔奖获得者李政道先生与时任浙江大学校长的路甬祥院士协商提议，在浙江大学成立了浙江近代物理中心。王淦昌先生任首任学术委员会主任，陈云同志题写了中心名，中心现任主任为李政道，副主任贺贤土。中心面向世界科技前沿和国家重大需求相关领域长期布局，形成了场论与粒子物理、凝聚态物理理论、天体物理、统计物理、量子信息、核科学技术与工程六大特色学科方向，并且已经在相应领域建成国际领先的团队。</p><p>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;浙江近代物理中心的建设基础是浙江大学理论物理国家重点学科，也是学科目前的依托单位。浙江大学理论物理学科1981年成为我国首批博士点之一，为我国理论物理事业的发展做出了重要贡献。浙江近代物理中心的成立延续了相关学科自王淦昌、束星北起在浙江大学近九十年从未中断的历史传统。中心于1991年设立了物理学博士后流动站，先后吸引一批优秀青年进入博士后流动站从事科研工作。目前，在中心聚集了一批在学科前沿领域积极工作的年轻人，他们中的一些人现已是中心的学术中坚。</p><p>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;中心现有近40位教师，形成了以院士领军，长江杰青为中坚，优秀拔尖创新人才为新生力量的高水平师资团队。其中，双聘院士2人（贺贤土、罗民兴），杰青6人（曹新伍、冯波、李有泉、康熙、王晓光、郑波），四青8人（渡边元太郎、林励庆、刘钊、王凯、汪玲、杨李林、袁野、朱华星）。在量子场论的形式理论方法、微扰量子场论、强关联电子体系、拓扑量子态等几个方向取得了一批教科书级成果和荣获多项国际重要奖项。在输运理论大规模数值模拟方向，开发了具有自主知识产权的计算软件，为多项国家重点工程提供了理论支撑，服务国家重大国防和能源需求。</p>"}
        ,
        activeContent:"",
        activeTitle:"",
        activeTitleName:"",
      }
    },
    methods:{
      changeActiveTitle(activeIndex,activeName){
        this.activeTitleName = activeName
        this.activeTitle = activeIndex
        this.activeContent = this.contentList[activeIndex]
      }
    },
    mounted(){
      this.activeTitleName = "中心简介",
      this.activeTitle = "centerDesc"
      this.activeContent =  this.contentList['centerDesc']
    }
  }
</script>
<template>
  <div class="commonContent">
    <div class="commonContentLeft">
      <div class="commonContentLeftFirstTitle">
        研究中心概况
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
            <n-breadcrumb-item separator="|">首页 </n-breadcrumb-item>
            <n-breadcrumb-item separator="|">研究中心概况 </n-breadcrumb-item>
            <n-breadcrumb-item separator="|">{{ activeTitleName }} </n-breadcrumb-item>
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
  

</style>
