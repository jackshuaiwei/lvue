<script>
  import MyFooter from '../components/MyFooter.vue'
  export default{
    components:{
      MyFooter
    },
    data(){
      return {
        "firstMemberList":[
            {"img":"/img/m1.png","name":"雷海","job":"教授，物理学院，南京大学","nativePlace":"汉口路22号，费彝民楼A520","eduExperience":[{"yearRange":"1978.9 ~ 1990.7","yearJob":"博士","yearWordAdd":"南京大学"}],"workExperience":[{"yearRange":"1985.7 ~ 1992.11","yearJob":"讲师","yearWordAdd":"南京大学"},{"yearRange":"1992.12 ~","yearJob":"教授","yearWordAdd":"南京大学"}],"contact":{"tel":"+86-025-83686031","email":"wangwei@nju.edu.cn"}},
        ]
      }
    },
    methods:{
      choseYear(year,index){
        this.defalutYearIndex = index;
        this.defalutArtitleList = this.artitleObj[year];
        console.log(this.artitleObj[2023]);
      }
    }
  }
</script>
<template>
  <div class="membersCon">
    <div class="membersCon2">
        <div class="firstMember">
            <div class="memberTitle">
                <span>首席研究员</span>
            </div>
            <div class="oneFirstMemer">
                <div class="oneFirstMemerCon" v-for="(oneFirstMemer,index) in firstMemberList">
                    <div class="oneFirstMemerImg">
                        <img :src="oneFirstMemer.img" alt="">
                    </div>
                    <div class="oneFirstMemerDetail">
                        <div class="oneFirstMemerDetailName">
                            <div class="memberName">{{oneFirstMemer.name}}</div>
                            <div class="jobPosition">{{oneFirstMemer.job}}</div>
                            <div class="memberAddress">{{oneFirstMemer.nativePlace}}</div>
                        </div>
                        <div class="oneFirstMemerDetail2Con">
                            <div class="memberEduexperience">
                                <div class="memberEduexperienceTitle">教育经历</div>
                                <div v-for="(eduEx,eindex) in oneFirstMemer.eduExperience">
                                    <div class="memberEduexperienceDate">{{eduEx.yearRange}}</div>
                                    <div class="memberEduexperiencNowJob">
                                        <span class="oneFirstMemerDetail2ConNjuSpan">{{eduEx.yearWordAdd}}</span>|<span class="oneFirstMemerDetail2ConJobSpan">{{eduEx.yearJob}}</span>
                                    </div>
                                </div>
                            </div>
                            <div class="memberWorkexperience">
                                <div class="memberWorkexperienceTitle">工作经历</div>
                                <div v-for="(workEx,eindex) in oneFirstMemer.workExperience">
                                    <div class="memberWorkexperienceDate">{{workEx.yearRange}}</div>
                                    <div class="memberWorkexperienceNowJob">
                                        <span class="oneFirstMemerDetail2ConNjuSpan">{{workEx.yearWordAdd}}</span>|<span class="oneFirstMemerDetail2ConJobSpan">{{workEx.yearJob}}</span>
                                    </div>
                                </div>
                            </div>
                            <div class="memberContact">
                                <div class="memberContactTitle">联系方式</div>
                                <div class="memberContactTel">Tel：{{ oneFirstMemer.contact.tel }}</div>
                                <div class="memberContactEmail">E-mail：{{ oneFirstMemer.contact.email }}</div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
  </div>
  
  <MyFooter />
</template>

<style>
  .membersCon{
    width: 1200px;
    margin: 0 auto;
    background-color: #fff;
    overflow: hidden;
    min-height: 900px;
  }

  .membersCon2{
    width: 1150px;
    margin: 30px auto 0;
  }

  .memberTitle{
    border-left: 5px solid #6a0061;
    border-bottom: 1px solid #DDD;
    padding-left: 15px;
    font-weight: 700;
    color: #555;
    font-size: 16px;
    line-height: 27px;
  }

  .oneFirstMemer{
    height: 245px;
    display: flex;
  }

  .oneFirstMemerCon{
    display: flex;
    margin-top: 20px;
    justify-content: center;
  }

  .oneFirstMemerImg{
    width: 100px;
    height: 100px;
    border-radius: 50%;
    overflow: hidden;
  }

  .oneFirstMemerImg img{
    width: 100%;
    height: 100%;
    object-fit: cover;
  }

  .oneFirstMemerDetail{
    margin-left: 50px;
    width: 900px;
    height: 245px;
    border-bottom: 1px solid #DDD;
  }

  .oneFirstMemerDetail2Con{
    width: 100%;
    display: flex;
    margin-top: 30px;
  }

  .memberName{
    font-size: 20px;
    color: #50144a;
    font-weight: 600;
  }

  .jobPosition{
    font-size: 14px;
    color: #4d4d4d;
    margin-top: 6px;
  }

  .memberAddress{
    font-size: 14px;
    color: #000;
    margin-top: 6px;
  }

  .memberEduexperience,.memberWorkexperience,.memberContact{
    flex: 1;
  }

  .memberEduexperienceTitle,.memberWorkexperienceTitle,.memberContactTitle{
    font-size: 16px;
    color: #000;
    font-weight: 600;
    margin-bottom: 12px;
  }

  .memberEduexperienceDate,.memberWorkexperienceDate{
    font-size: 13px;
    color: #000;
  }

  .oneFirstMemerDetail2ConNjuSpan{
    font-size: 13px;
    font-weight: 600;
    color: #000;
  }

  .oneFirstMemerDetail2ConJobSpan{
    font-size: 13px;
    color: #000;
  }

  .memberContactTel,.memberContactEmail{
    font-size: 13px;
    color: #000;
  }
</style>
