<script>
  import Lunbo from '../components/Lunbo.vue'
  import MyFooter from '../components/MyFooter.vue'

  export default{
    components:{
      Lunbo,MyFooter
    },
    data(){
      return {
        "sTitle":"简介",
        "sDetail":"功能性软材料是许多现代技术的基础，包括软机器人、柔性电子、能源材料、组织工程支架和生物医学设备。软材料的力学性能在其实际应用中起着举足轻重的作用;但如何合理设计和控制其力学性能仍是一个难题。我们的实验室致力于更好地理解具有优异机械性能的天然材料的设计原则，以及具有类似甚至更优越机械性能的工程合成软材料。我们将单分子力谱与合成生物学和高分子化学相结合来解决这一跨学科领域的基础问题和应用挑战。",
        "joinUsTitle":"加入我们",
        "joinUsDetail":"本课题组常年招收各类优秀的研究人员，包括博士后、博士、硕士及本科生，有意者请联系曹毅教授（caoyi@nju.edu.cn)，简要说明申请理由，并附上您的简历。",
        "newsTitle":"新闻&活动",
        "newsDetail":[
          "【硕士答辩】热烈祝贺本课题组硕士俞奕飞毕业答辩圆满结束！",
          "【博士答辩】热烈祝贺本课题组博士生邸维帅、王天阔毕业答辩圆满结束！",
          "【邀请报告】焦放研究员（中国科学院物理研究所）-基于高速原子力显微镜的生物物理研究",
          "【邀请报告】钟超研究员（中国科学院深圳先进研究院）-材料合成生物学：利用生命体编程功能生物材料",
          "【学术沙龙】MDPI化学材料学术周南京大学专场",
          "【邀请报告】戴卓君副研究员（中国科学院深圳先进技术研究院）-结合工程细菌与智能材料实现生物智造",
        ],
      }
    }
  }
</script>
<template>
  <Header />
  <Lunbo />
  <div style="width: 1200px;height: 30px;background-color: #fff;margin: 0 auto;"></div>
  <div class="homeContent">
    <div class="homeConLeft">
      <div class="simpleIntroduce">
        <div class="sTitle">
          <span>{{sTitle}}</span>
        </div>
        <div class="sDetail">
          &nbsp;&nbsp;{{sDetail}}
        </div>
      </div>
      <div class="joinUs">
        <div class="joinUsTitle">
          <span>{{joinUsTitle}}</span>
        </div>
        <div class="joinUsDetail">
          &nbsp;&nbsp;{{joinUsDetail}}
        </div>
      </div>
    </div>
    <div class="homeConRight">
      <div class="news">
        <div class="newsTitle">
          <span>{{newsTitle}}</span>
        </div>
        <div class="newsDetail">
          <a class="oneNewsDetail" href="#"  v-for="(oneNewsDetail, index) in newsDetail">
            {{ oneNewsDetail }}
          </a>
        </div>
      </div>
    </div>
  </div>
  <MyFooter />
</template>

<style>
  .homeContent{
    width: 1200px;
    margin: 0 auto;
    height: 500px;
    display: flex;
    background-color: #fff;
  }

  .homeConLeft{
    width: 700px;
    height: 100%;
  }

  .simpleIntroduce{
    margin-left: 50px;
    width: 630px;
    height: 300px;
  }

  .joinUs{
    margin-left: 50px;
    width: 630px;
    height: 200px;
  }

  .news{
    margin-left: 50px;
    width: 470px;
    height: 500px;
  }

  .sTitle,.joinUsTitle,.newsTitle{
    border-left: 5px solid #6a0061;
    border-bottom: 1px solid #DDD;
    padding-left: 15px;
    font-weight: 700;
    color: #555;
    font-size: 16px;
    line-height: 27px;
  }

  .sDetail,.joinUsDetail{
    font-size: 16px;
    line-height: 30px;
    margin-top: 20px;
    font-family: 'Arial' !important;
    color: #333;
  }

  .oneNewsDetail{
    margin-top: 10px;
    color: #333;
    font-size: 16px;
    display: block;
    line-height: 28px;
    border-bottom: 1px solid #DDD;
  }


</style>
