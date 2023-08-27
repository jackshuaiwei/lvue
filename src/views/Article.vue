<script>
  import MyFooter from '../components/MyFooter.vue'

  export default{
    components:{
      MyFooter
    },
    data(){
      return {
        "yearTitle":"年份",
        "yearDetail":["2023","2022","2021","2020","2019"],
        "defalutYearIndex":0,
        "defalutArtitleList":["Ester Bonds for Modulation of the Mechanical Properties of Protein Hydrogels International Journal of Molecular Sciences 24 (13), 10778","Single-Molecule Force Spectroscopy Reveals Cation- Interactions in Aqueous Media Are Highly Affected by Cation Dehydration Physical Review Letters 130 (11), 118101"],
        "artitleObj":{"2023":["Ester Bonds for Modulation of the Mechanical Properties of Protein Hydrogels International Journal of Molecular Sciences 24 (13), 10778","Single-Molecule Force Spectroscopy Reveals Cation- Interactions in Aqueous Media Are Highly Affected by Cation Dehydration Physical Review Letters 130 (11), 118101"],"2022":["Quantifying cation-π interactions in marine adhesive proteins using single-molecule force spectroscopy Supramolecular Materials 1, 100005","Strong and Reversible Covalent Double Network Hydrogel Based on Force‐Coupled Enzymatic Reactions Angewandte Chemie International Edition 61 (25), e202201765","Biophysical approaches for applying and measuring biological forces Biophysical approaches for applying and measuring biological forces","Dynamic Covalent Hydrogels: Strong yet Dynamic Gels 8 (9), 577","Histidine-Specific Bioconjugation for Single-Molecule Force Spectroscopy ACS nano 16 (9), 15440-15449","Intramolecular Covalent Bonds in Gram‐Positive Bacterial Surface Proteins ChemBioChem 23 (20), e202200316"],"2021":["ChemBioChem 23 (20), e202200316 Advanced Materials 33 (48), 2105765","Regulating mechanical properties of polymer‐supramolecular double‐network hydrogel by supramolecular self‐assembling structures Chinese Journal of Chemistry 39 (10), 2711-2717","An ester bond underlies the mechanical strength of a pathogen surface protein Nature Communications 12 (1), 5082"]},
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
  <div class="all_artitle_con">
    <div class="occupyPosition"></div>

    <div class="content">
        <div class="conLeft">
            <div class="yearTitle">
                <span>{{yearTitle}}</span>
            </div>
            <div class="yearDetail">
                <div class="oneYearDetail">全部</div>
                <div :class="index == defalutYearIndex ? 'oneYearDetailClick':'oneYearDetail'" v-for="(val,index) in yearDetail" @click="choseYear(val,index)">
                    {{ val }}
                </div>
            </div>
        </div>
        <div class="conRight">
            <div class="ArtitleCon">
                <div class="oneArtitle" v-for="(oneArtitle,index) in defalutArtitleList">
                    {{ oneArtitle }}
                </div>
            </div>
            
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
