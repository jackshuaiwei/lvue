<script>
  import MyFooter from '../components/MyFooter.vue'

  export default{
    components:{
      MyFooter
    },
    data(){
      return {
        "newsList":[
            {"time":"2021-05-24","content":"【硕士答辩】热烈祝贺本课题组硕士俞奕飞毕业答辩圆满结束！"},
            {"time":"2021-05-25","content":"【硕士答辩】热烈祝贺本课题组硕士俞奕飞毕业答辩圆满结束！"},
            {"time":"2021-05-26","content":"【硕士答辩】热烈祝贺本课题组硕士俞奕飞毕业答辩圆满结束！"},
            {"time":"2021-05-27","content":"【硕士答辩】热烈祝贺本课题组硕士俞奕飞毕业答辩圆满结束！"},
            {"time":"2021-05-28","content":"【硕士答辩】热烈祝贺本课题组硕士俞奕飞毕业答辩圆满结束！"},
            {"time":"2021-05-29","content":"【硕士答辩】热烈祝贺本课题组硕士俞奕飞毕业答辩圆满结束！"},
            {"time":"2021-05-21","content":"【硕士答辩】热烈祝贺本课题组硕士俞奕飞毕业答辩圆满结束！"},
            {"time":"2021-05-22","content":"【硕士答辩】热烈祝贺本课题组硕士俞奕飞毕业答辩圆满结束！"},
            {"time":"2021-05-23","content":"【硕士答辩】热烈祝贺本课题组硕士俞奕飞毕业答辩圆满结束！"},
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
  <div class="newsCon">
    <div class="newsCon2">
        <div class="newsTitle">
            <span style="width: 100px;display: inline-block;">时间</span>
            <span style="">新闻 & 活动</span>
        </div>
        <div class="oneNew" v-for="(oneNew,index) in newsList">
            <div class="oneNewTime">{{ oneNew.time }}</div>
            <div class="oneNewDetail">{{ oneNew.content }}</div>
        </div>
    </div>
  </div>
  
  <MyFooter />
</template>

<style>
  .newsCon{
    width: 1200px;
    margin: 0 auto;
    background-color: #fff;
    overflow: hidden;
    min-height: 900px;
  }

  .newsCon2{
    width: 1150px;
    margin: 0 auto;
    background-color: #fff;
    overflow: hidden;
  }

  .newsTitle{
    margin-top: 30px;
    background-color: #6a0061;
    height: 40px;
    line-height: 40px;
    color: #fff;
  }

  .oneNew{
    height: 40px;
    display: flex;
    align-items: center;
    border-bottom: 1px solid #ccc;
  }

  .oneNewTime{
    width: 100px;
    line-height: 40px;
    height: 100%;
    font-size: 16px;
    font-family: Arial;
  }

  .oneNewTime{
    line-height: 40px;
    height: 100%;
    font-family: Arial;
    font-size: 16px;
  }

  
</style>
