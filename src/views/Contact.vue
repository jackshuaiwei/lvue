<script>
  import MyFooter from '../components/MyFooter.vue'

  export default{
    components:{
      MyFooter
    },
    data(){
      return {
        postList:[
          {postName:"博士后2-3名",postDesc:["独立承担课题研究","协助指导研究生"],postRequire:["具有博士学位，具有物理、生物、化学、生物医学工程、材料、仪器等专业背景，熟悉生物物理方向实验技术与仪器等优先","近三年以第一作者发表过高水平SCI论文","具有独立完成课题工作的能力","工作踏实勤奋；具有扎实的生物物理相关理论基础，较强的实验操作能力，严谨的科学态度和良好的团队协作意识","年龄不超过35岁，身心健康；具有较强的英语阅读和写作能力"],postTreatment:"在浙江大学规定基础上，物理高等研究院将给予倾斜，并可根据研究成果由课题组给予额外奖励，保障有竞争力的薪酬。具体待遇面谈。"},
          {postName:"科研助理1-2名",postDesc:["协助培养研究生，为相关课题提供有力支持","协助PI负责实验室管理","在PI指导下做探索性课题"],postRequire:["具有本科或以上学位，具有物理学、化学、材料学、生物、生物医学工程、仪器等专业背景，熟悉生物物理方面实验技术与仪器操作等优先","在相关领域发表过学术论文优先","工作踏实勤奋；具有扎实的生物物理理论基础，较强的实验操作能力，严谨的科学态度和良好的团队协作意识","身心健康，具有较强的英语阅读和写作能力","未来有意向继续攻读博士学位者优先，表现优秀者有机会直接转入博士生研究计划"],postTreatment:"薪资待遇浙江大学相关规定执行，享受国家规定的社会保险等福利"},
        ],
      }
    },
  }
</script>
<template>
  <div class="commonContent">
    <div class="commonContentLeft">
      <div class="commonContentLeftFirstTitle">
        招生招聘
      </div>
    </div>
    <div class="commonContentRight">
      <div class="commonContentRightTitle">
        <div class="commonContentRightTitleMain">诚聘英才</div>
        <div class="commonContentRightTitleDetail">
          <span>当前位置：</span>
          <n-breadcrumb>
            <n-breadcrumb-item separator="|">首页 </n-breadcrumb-item>
            <n-breadcrumb-item separator="|">招贤纳士 </n-breadcrumb-item>
            <n-breadcrumb-item separator="|">诚聘英才 </n-breadcrumb-item>
          </n-breadcrumb>
        </div>
      </div>
      <div class="commonContentRightContent">
        <p>
          &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;浙江大学物理高等研究院复杂与生命系统物理研究中心成立于2023年3月，是浙江大学大力发展的研究方向之一。研究中心是由欧阳颀院士领衔，目前研究方向包括合成生物学、系统生物学、蛋白质机器、DNA信息存储、生物大分子、仿生材料与工程、细胞力学、细胞冷冻电子断层技术、活性物质等。
        </p>
        <p>
          &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;复杂与生命系统物理研究中心招聘独立PI、博士后、实验技术岗。欢迎物理、生物、化学、计算机、数学、信息、材料等学科专业的本科生、研究生加入。
        </p>
        <p>
          &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;本课题组研究方向包括单分子生物物理、软物质、生物力学、柔性电子器件等研究方向。
        </p>
        <div class="onePost" v-for="(onePost,index) in postList">
          <div class="postName">
            岗位：{{ onePost.postName }}
          </div>
          <div class="postDesc">
            <p>岗位描述</p>
            <ul>
              <li v-for="(oneDesc,rindex) in onePost.postDesc">{{ oneDesc }}</li>
            </ul>
          </div>
          <div class="postRequire">
            <p>岗位要求</p>
            <ul>
              <li v-for="(oneRequire,rindex) in onePost.postRequire">{{ oneRequire }}</li>
            </ul>
          </div>
          <div class="postTreatment">
            <p>岗位待遇</p>
            <p>{{ onePost.postTreatment }}</p>
          </div>
        </div>
        <p style="margin-top: 30px;">
          有意应聘者请发送个人简历、研究简介和发表论文至：<a href="mailto:leihai@zju.edu.cn">leihai@zju.edu.cn</a>。对符合条件的申请者，我们将尽快回复并通知面试。有任何问题我们随时联系。
        </p>
        <p>
          欢迎青年才俊加入我们的研究团队
        </p>
      </div>
    </div>
  </div>
  
  <MyFooter />
</template>

<style scoped>
  .postName,.postRequire,.postTreatment{
    margin-top: 30px;
  }

  .postName{
    font-weight: bold;
  }
</style>
