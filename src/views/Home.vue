<template>
  <n-carousel show-arrow direction="vertical" dot-placement="right" style="width: 100%; height: 608px">
    <img
      class="carousel-img"
      src="https://naive-ui.oss-cn-beijing.aliyuncs.com/carousel-img/carousel1.jpeg"
    >
    <img
      class="carousel-img"
      src="https://naive-ui.oss-cn-beijing.aliyuncs.com/carousel-img/carousel2.jpeg"
    >
    <img
      class="carousel-img"
      src="https://naive-ui.oss-cn-beijing.aliyuncs.com/carousel-img/carousel3.jpeg"
    >
    <img
      class="carousel-img"
      src="https://naive-ui.oss-cn-beijing.aliyuncs.com/carousel-img/carousel4.jpeg"
    >
  </n-carousel>
  <div style="width: 100%;height: 60px;"></div>
  <div class="contentCon">
    <div class="news">
      <div class="newsTitle">
        <TitleBar titleZn="新闻动态" titleEn="NEWS">
          <n-icon size="35" color="#333333" :component="NewspaperOutline" />
        </TitleBar>
      </div>
      
      <div class="newsList">
        <div class="listItemCon" v-for="(item,index) in newsList" :key="index">
          <div class="oneExampleItem">
            <div class="oneExampleItemTime">
              <div class="oneExampleItemDay">{{item.day}}</div>
              <div class="oneExampleItemYear">{{item.year}}</div>
            </div>
            <div class="oneExampleItemContent">
              {{item.content}}
            </div>
          </div>
        </div>
      </div>
    </div>
    <div class="notices">
      <div class="noticesTitle">
        <TitleBar titleZn="通知公告" titleEn="NOTICE">
          <n-icon size="35" color="#333333" :component="NewspaperOutline" />
        </TitleBar>
      </div>
      <div class="noticesList">
        <div class="listItemCon" v-for="(item,index) in noticesList" :key="index">
          <div class="oneExampleItem">
            <div class="oneExampleItemTime">
              <div class="oneExampleItemDay">{{item.day}}</div>
              <div class="oneExampleItemYear">{{item.year}}</div>
            </div>
            <div class="oneExampleItemContent">
              {{item.content}}
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>

  <div class="academic">
    <div class="academicTitle">
      <TitleBar titleZn="学术活动" titleEn="ACADEMIC TALK" showStyle="titleWhite" showStyle2="titleWhite2">
          <n-icon size="35" color="#ffffff" :component="Book" />
        </TitleBar>
    </div>

    <n-carousel
      effect="card"
      prev-slide-style="transform: translateX(-150%) translateZ(-800px);"
      next-slide-style="transform: translateX(50%) translateZ(-800px);"
      style="height: 304px"
    >
      <n-carousel-item :style="{ width: '880px' }" v-for="(oneAcademic,index) in academicList">
        <div class="academicListCon">
          <div class="oneAcademic">
            <div class="academicTime">
              <div class="academicDay">{{oneAcademic.day}}</div>
              <div class="academicYear">{{ oneAcademic.year }}</div>
            </div>
            <div class="academicContent">
              <div class="academicContentTitle">{{ oneAcademic.title }}</div>
              <div class="oneAcademicSpanCon">
                <n-icon size="22" color="#666666" :component="Mic" />
                <span class="oneAcademicSpan">主讲人：{{ oneAcademic.speaker }}</span>
              </div>
              <div class="oneAcademicSpanCon">
                <n-icon size="22" color="#666666" :component="TimerOutline" />
                <span class="oneAcademicSpan">时 间：{{ oneAcademic.dtime }}</span>
              </div>
              <div class="oneAcademicSpanCon">
                <n-icon size="22" color="#666666" :component="Map" />
                <span class="oneAcademicSpan">地 点：{{ oneAcademic.address }}</span>
              </div>
              <div class="oneAcademicSpanCon">
                <n-button type="info" ghost color="#003F88">查看详情</n-button>
              </div>
            </div>
          </div>
        </div>
      </n-carousel-item>
    </n-carousel>
  </div>

  <MyFooter />
</template>

<script>
  import MyFooter from '../components/MyFooter.vue'
  import TitleBar from '../components/TitleBar.vue'
  import { NewspaperOutline,Book,Mic,TimerOutline,Map } from '@vicons/ionicons5'

  export default{
    components:{
      MyFooter,TitleBar
    },
    data(){
      return {
        newsList:[
          {year:"2023-07",day:"06",content:"数十载各追梦，重逢惹情牵——浙江大学物理学院举办88级入学三十五周年返校活动",url:"https://wwww.baidu.com"},
          {year:"2023-07",day:"06",content:"数十载各追梦，重逢惹情牵——浙江大学物理学院举办88级入学三十五周年返校活动",url:"https://wwww.baidu.com"},
          {year:"2023-07",day:"06",content:"数十载各追梦，重逢惹情牵——浙江大学物理学院举办88级入学三十五周年返校活动",url:"https://wwww.baidu.com"},
          {year:"2023-07",day:"06",content:"数十载各追梦，重逢惹情牵——浙江大学物理学院举办88级入学三十五周年返校活动",url:"https://wwww.baidu.com"},
        ],
        noticesList:[
          {year:"2023-07",day:"08",content:"关于景俊同志的考察预告",url:"https://wwww.baidu.com"},
          {year:"2023-07",day:"08",content:"关于景俊同志的考察预告",url:"https://wwww.baidu.com"},
          {year:"2023-07",day:"08",content:"关于景俊同志的考察预告",url:"https://wwww.baidu.com"},
          {year:"2023-07",day:"08",content:"关于景俊同志的考察预告",url:"https://wwww.baidu.com"},
        ],
        academicList:[
          {year:"2023-07",day:"08",title:"关于6月28日（周三）张帆学术报告的通知（Seminar）",speaker:"张帆",dtime:"2023年6月28日（周三），下午15：00",address:"2023年6月28日（周三），下午15：00"},
          {year:"2023-07",day:"18",title:"关于6月28日（周三）张帆学术报告的通知（Seminar）",speaker:"张帆",dtime:"2023年6月28日（周三），下午15：00",address:"2023年6月28日（周三），下午15：00"},
          {year:"2023-07",day:"28",title:"关于6月28日（周三）张帆学术报告的通知（Seminar）",speaker:"张帆",dtime:"2023年6月28日（周三），下午15：00",address:"2023年6月28日（周三），下午15：00"},
          {year:"2023-07",day:"06",title:"关于6月28日（周三）张帆学术报告的通知（Seminar）",speaker:"张帆",dtime:"2023年6月28日（周三），下午15：00",address:"2023年6月28日（周三），下午15：00"},
          {year:"2023-07",day:"12",title:"关于6月28日（周三）张帆学术报告的通知（Seminar）",speaker:"张帆",dtime:"2023年6月28日（周三），下午15：00",address:"2023年6月28日（周三），下午15：00"},
        ],
        NewspaperOutline,
        Book,
        Mic,
        TimerOutline,
        Map
      }
    }
  }
</script>

<style scoped>
  .carousel-img {
    width: 100%;
    height: 608px;
    object-fit: cover;
  }

  .contentCon{
    width: 1600px;
    margin: 0 auto;
    height: 758px;
    display: flex;
    justify-content: space-between;
  }

  .news{
    width: 770px;
    height: 758px;
  }

  .notices{
    width: 770px;
    height: 758px;
  }
  
  .newsList,.noticesList{
    margin-top: 60px;
  }

  .listItemCon{
    width: 100%;
    height: 126px;
    border-bottom: 1px solid #ededed;
    display: flex;
    align-items: center;
    cursor: pointer;
  }

  .listItemCon:hover{
    background-color: #003F88;
    color: #ffffff;
    transition: 0.3s;
  }

  .listItemCon:hover .oneExampleItemTime{
    color: #ffffff;
    border-top: 5px solid #ffffff;
    transition: 0.3s;
  }

  .listItemCon:hover .oneExampleItemContent{
    color: #ffffff;
  }

  .oneExampleItem{
    width: 100%;
    height: 90px;
    display: flex;
    justify-content: space-between;
  }

  .oneExampleItemTime{
    width: 102px;
    height: 100%;
    border-top: 5px solid #003F88;
    color: #003F88;
  }

  .oneExampleItemDay{
    height: 60px;
    font-size: 40px;
    text-align: right;
  }

  .oneExampleItemYear{
    height: 20px;
    font-size: 16px;
    text-align: right;
  }

  .oneExampleItemContent{
    width: 607px;
    height: 100%;
    font-size: 20px;
    color: #333333;
    font-weight: 400;
    overflow: hidden;
  }

  .academic{
    width: 100%;
    height: 590px;
    background: url("/img/academic-bg.png") no-repeat center center / cover;
    overflow: hidden;
  }

  .academicTitle{
    width: 1600px;
    margin: 60px auto 0;
  }

  .academicListCon{
    width: 100%;
    height: 100%;
    background-color: #ffffff;
  }

  .oneAcademic{
    width: 90%;
    height: 100%;
    display: flex;
    margin: 0 auto;
  }

  .academicTime{
    width: 80px;
    height: 90px;
    border-right: 3px solid #ededed;
    margin-top: 30px;
  }

  .academicDay{
    font-size: 36px;
    font-weight: bold;
    color: #003F88;
  }

  .academicYear{
    font-size: 14px;
    color: #003F88;
  }

  .academicContent{
    margin-top: 30px;
    margin-left: 50px;
  }

  .academicContentTitle{
    color: #003F88;
    font-size: 20px;
    font-weight: bold;
  }

  .oneAcademicSpanCon{
    margin-top: 20px;
    margin-left: 10px;
    display: flex;
    align-items: center;
  }

  .oneAcademicSpan{
    margin-left: 5px;
    color: #666666;
    font-size: 16px;
  }
  

</style>
