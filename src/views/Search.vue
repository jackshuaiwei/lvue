<script>
  import MyFooter from '../components/MyFooter.vue'

  export default{
    components:{
      MyFooter
    },
    data(){
      return {
        "headerList":["聚合物力化学","细胞外基质力生物学","定制特殊力学性能的水凝胶","水下粘合剂和防污表面"],
        "contentList":[
          {"title":"POLYMER MECHANOCHEMISTRY","imgUrl":"/img/1.png","text":"Tensile force is usually considered a destructive factor, as it can cause bond rupture, but recently this force has been demonstrated to be productive if the compounds are properly designed. Some force-responsive compounds (or mechanophores) with specific structural elements, such as strained rings, weak bonds or isomerizable bonds, are force activable to change color, emit light, release small molecules, or trigger new reactions if the appropriate force is applied. We are interested in exploring the effect of force to chemical reactions from the physical perspective. Using single molecule force spectroscopy as the major tool, we discover unconventional mechanophors that are sensitive to force directions and amplitudes and study their force-dependent transitions."},
          {"title":"细胞外基质力生物学","imgUrl":"","text":"细胞外基质(ECM)不仅提供了力支持，而且还提供了调节细胞基本功能的重要力线索。ECM的结构和机械特性在健康组织的发育、体内平衡和衰老过程中以及在病理组织(包括纤维化和癌症)中可能发生显著变化。目前，我们致力于将单分子力学表征和水凝胶工程相结合，了解水凝胶中细胞产生的力对合成ECM网络重构的影响。我们也有兴趣探索ECM结构和力性能对细胞迁移、干细胞分化和心肌细胞搏动同步的影响。"},
          {"title":"定制特殊力学性能的水凝胶","imgUrl":"/img/2.png","text":"在自然界中，不同的组织已经进化为具有不同的生物功能的独特的力特征。例如，关节软骨强度强(强度为9 - 40 Mpa)，韧性强(断裂能为1000 - 15000 Jm−2)，有弹性(破坏应变为60-120%)；升主动脉较软(强度0.3 ~ 0.8 MPa)，而哺乳动物肌腱较强(强度50 ~ 100 MPa)，有弹性(弹性约90%)，但相对不能伸长(破坏应变12 ~ 16%)。生物材料研究的一个关键挑战是生产出可以复制天然组织的各种机械性能的合成水凝胶，用于各种生物医学应用。我们正在尝试利用重组蛋白和合成肽作为主要的原料来设计具有所需力学性能的水凝胶。目前我们正在研究具有极端力学性能的水凝胶和具有动态力学响应的水凝胶。"},
          {"title":"水下粘合剂和防污表面","imgUrl":"/img/3.jpg","text":"合成胶黏剂由于表面的水化作用和高盐条件，在潮湿的环境中很难使用，然而海洋贻贝可以通过过量表达含有一种罕见的儿茶酚氨基酸的多巴，形成各种胶黏蛋白，从而牢固地附着在潮湿的岩石表面。我们正试图揭示各种海洋生物分泌的天然黏附蛋白湿黏著的基本物理和力学原理，因此，我们也对海洋生物污染问题和表面防污工程具有极大兴趣。"},
        ]
      }
    }
  }
</script>
<template>
  <div class="all_con">
    <div class="searchHeader">
      <a href="#" v-for="(oneTitle,index) in headerList" class="oneTitle">{{ oneTitle }}</a>
    </div>

    <div class="searchContent">
      <div class="oneSearchContent" v-for="(oneSearchContent,index) in contentList">
        <div class="oneSearchContentTitle">{{ oneSearchContent.title }}</div>
        <div class="oneSearchContentDetail">{{ oneSearchContent.text }}</div>
        <div class="oneSearchContentImg" v-if="oneSearchContent.imgUrl">
          <img :src="oneSearchContent.imgUrl">
        </div>
      </div>
    </div>
    <div style="width: 1200px;margin: 50px auto 0;height: 50px;background-color: #fff;"></div>
  </div>
  
  <MyFooter />
</template>

<style scoped>
  .all_con{
    width: 1200px;
    margin: 0 auto;
    background-color: #fff;
    overflow: hidden;
  }

  .searchHeader{
    width: 1100px;
    margin: 20px auto 0px ;
    height: 50px;
    background-color: #6a0061;
    display: flex;
    align-items: center;
    padding-left: 60px;
  }

  .oneTitle{
    color: #fff;
    margin-right: 30px;
  }

  .searchContent{
    width: 1200px;
    overflow: hidden;
  }

  .oneSearchContent{
    margin-top: 30px;
  }


  .oneSearchContentTitle{
    border-left: 5px solid #6a0061;
    border-bottom: 1px solid #DDD;
    padding-left: 15px;
    font-weight: 700;
    color: #555;
    font-size: 16px;
    line-height: 27px;
    margin-left: 20px;
  }

  .oneSearchContentDetail{
    width: 1000px;
    margin: 30px auto 0;
    color: #333;
    font-size: 16px;
    display: block;
    line-height: 28px;
    text-align: justify;
    font-family: Arial;
  }

  .oneSearchContentImg{
    width: 800px;
    height: 420px;
    margin: 30px auto 50px;
  }

  .oneSearchContentImg img{
    width: 100%;
    height: 100%;
    object-fit: cover;
  }
</style>
