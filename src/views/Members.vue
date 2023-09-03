<script>
  import MyFooter from '../components/MyFooter.vue'
  export default{
    components:{
      MyFooter
    },
    data(){
      return {
        titleList:[
         
        ],
        activeContent:"",
        activeTitle:"",
        activeTitleName:"",
        memberList:[
          {name:"林海青",email:"hqlin@zju.edu.cn",searchDirection:"凝聚态物理·计算物理",mainPage:"https://person.zju.edu.cn/0022018",imgUrl:"/img/lhq.png",post:"教授|博士生导师"},
          {name:"雷海",email:"leihai@zju.edu.cn",searchDirection:"单分子生物物理，软物质物理，生物力学，微纳技术与测量",mainPage:"https://person.zju.edu.cn/0023355#975835",imgUrl:"/img/lh.png",post:"长聘副教授|研究员|博士生导师"},
        ]
      }
    },
    methods:{
      changeActiveTitle(activeIndex,activeName){
        this.activeTitleName = activeName
        this.activeTitle = activeIndex
        this.activeContent = ""
      }
    },
    mounted(){
      this.activeTitle = "teamMembers"
      this.activeContent =  ""
    }
  }
</script>
<template>
  <div class="commonContent">
    <div class="commonContentLeft">
      <div class="commonContentLeftFirstTitle">
        团队成员
      </div>

      <!-- <div class="commonContentLeftTitle" v-for="(oneTitle,index) in titleList" :class="activeTitle == oneTitle.index ? 'commonContentLeftTitleActive' : ''" @click="changeActiveTitle(oneTitle.index,oneTitle.title)">
        {{ oneTitle.title }}
      </div> -->
    </div>
    <div class="commonContentRight">
      <div class="commonContentRightTitle">
        <div class="commonContentRightTitleMain">团队成员</div>
        <div class="commonContentRightTitleDetail">
          <span>当前位置：</span>
          <n-breadcrumb>
            <n-breadcrumb-item separator="|">首页</n-breadcrumb-item>
            <n-breadcrumb-item separator="|">团队成员</n-breadcrumb-item>
            <n-breadcrumb-item separator="|" v-if="activeTitleName">{{ activeTitleName }}</n-breadcrumb-item>
          </n-breadcrumb>
        </div>
      </div>
      <div class="commonContentRightContent">
        <div class="membersCon">
          <div class="onePerson" v-for="(onePerson,index) in memberList">
            <n-card hoverable content-style="display:flex;">
              <div class="personImg">
                <img :src="onePerson.imgUrl" alt="">
              </div>
              <div class="personContent">
                <p style="font-size: 18px;color: #0F429B;font-weight: bold;">{{ onePerson.name }}</p>
                <p style="letter-spacing: 3px;">{{ onePerson.post }}</p>
                <p>E-mail：{{ onePerson.email }}</p>
                <p>研究方向：<n-ellipsis style="max-width: 140px">{{ onePerson.searchDirection }}</n-ellipsis></p>
                <p>
                  个人主页：<n-ellipsis style="max-width: 160px">
                  <a :href="onePerson.mainPage" target="_blank">{{ onePerson.mainPage }}</a>
                  <template #tooltip>
                    <div style="color: #fff">
                      {{ onePerson.mainPage }}
                    </div>
                  </template>
                </n-ellipsis>
              </p>
              </div>
            </n-card>
          </div>
        </div>
      </div>
    </div>
  </div>
  
  <MyFooter />
</template>

<style scoped>
  .membersCon{
    width: 100%;
    display: flex;
    justify-content: space-between;
    flex-direction: row;
    margin-top: 30px;
  }

  .onePerson{
    width: 480px;
    height: 260px;
    overflow: hidden;
  }

  .personImg{
    width: 156px;
    height: 208px;
  }

  .personImg img{
    width: 100%;
    height: 100%;
    object-fit: cover;
  }

  .personContent{
    width: 295px;
    overflow: hidden;
    margin-left: 20px;
  }
  
</style>
