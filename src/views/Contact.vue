<script>
  import MyFooter from '../components/MyFooter.vue'

  export default{
    components:{
      MyFooter
    },
    data(){
      return {
        "contactList":{
            "welcome":"本课题组常年招收各类优秀的研究人员，包括博士后、博士、硕士及本科生，有意者请联系曹毅教授（caoyi@nju.edu.cn)，简要说明申请理由，并附上您的简历。",
            "contactDetail":{"contact1":"南京大学固体微结构国家重点实验室","contact2":"物理学院","contact3":"人工协同创新中心","contact4":"南京大学，南京，中国"},
            "address":{"add1":"唐仲英楼A508","add2":"南京市鼓楼区金银街15号","add3":"210093"},
            "emailTel":{"email":"caoyi@nju.ed.cn","tel1":"025-83688960（教授办公室）","tel2":"025-83688980（学生办公室）"}
        }
      }
    },
    methods:{
      choseYear(year,index){
        this.defalutYearIndex = index;
        this.defalutArtitleList = this.artitleObj[year];
      }
    }
  }
</script>
<template>
  <div class="contactCon">
    <div class="contactCon2">
        <div class="contactWelcome">
            <span style="width: 100px;display: inline-block;">欢迎加入</span>
        </div>
        <div>&nbsp;&nbsp;{{ contactList.welcome }}</div>
        <div class="contactDetail">
            <span style="width: 100px;display: inline-block;">联系方式</span>
        </div>
        <div>{{ contactList.contactDetail.contact1 }}</div>
        <div>{{ contactList.contactDetail.contact2 }}</div>
        <div>{{ contactList.contactDetail.contact3 }}</div>
        <div>{{ contactList.contactDetail.contact4 }}</div>
        <div class="contactAdd">
            <span style="width: 100px;display: inline-block;">地址</span>
        </div>
        <div>{{ contactList.address.add1 }}</div>
        <div>{{ contactList.address.add2 }}</div>
        <div>{{ contactList.address.add3 }}</div>
        <div class="contactEmailTel">
            <span style="width: 100px;display: inline-block;">邮箱/电话</span>
        </div>
        <div>{{ contactList.emailTel.email }}</div>
        <div>{{ contactList.emailTel.tel1 }}</div>
        <div>{{ contactList.emailTel.tel2 }}</div>
    </div>
  </div>
  
  <MyFooter />
</template>

<style scoped>
  .contactCon{
    width: 1200px;
    margin: 0 auto;
    background-color: #fff;
    overflow: hidden;
    min-height: 900px;
  }

  .contactCon2{
    width: 1150px;
    margin: 30px auto 0;
    background-color: #fff;
    overflow: hidden;
    line-height: 40px;
  }

  .contactWelcome,.contactDetail,.contactAdd,.contactEmailTel{
    margin-top: 20px;
    border-left: 5px solid #6a0061;
    border-bottom: 1px solid #DDD;
    padding-left: 15px;
    font-weight: 700;
    color: #555;
    font-size: 16px;
    line-height: 27px;
  }

  
</style>
