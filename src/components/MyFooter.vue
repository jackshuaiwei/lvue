<template>
  <div class="footer">
    <div class="footerMainContent">
      <div class="footerMainContentLeft">
        <img src="/img/school.png" class="footerImg">
      </div>
      <div class="footerMainContentRight">
        <div class="footerText">
          <a href="#">浙江大学</a>
           | 
          <a href="#">物理学院</a>
           | 
          <a href="#">复杂与生命系统物理研究中心</a>
        </div>
        <div class="footerText">
          地址：浙江省杭州市西湖区浙大路38号
        </div>
        <div class="footerText">
          Copyright © 2023 <a href="#">Biomech ZJU </a>. All Rights Reserved
        </div>
      </div>
    </div>
  </div>
</template>

<style>
  .footer{
    margin-top: 30px;
    width: 100%;
    height: 200px;
    background-color: #63065f;
  }

  .footerMainContent{
    width:800px;
    margin: 0 auto;
    height: 100%;
    display: flex;
    align-items: center;
  }

  .footerMainContentLeft{
    width: 246px;
    height: 70px;
    overflow: hidden;
  }

  .footerImg{
    width: 100%;
    height: 100%;
    object-fit: cover;
  }

  .footerMainContentRight{
    margin-left: 20px;
  }

  .footerMainContentRight a{
    color: #fff;
  }

  .footerText{
    color: #fff;
    margin-top: 10px;
  }
</style>
