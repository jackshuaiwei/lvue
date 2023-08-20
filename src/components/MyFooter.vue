<template>
  <div class="footer">
    <div class="footerMainContent">
      <div class="footerMainContentLeft">
        <img src="/img/nju.jpg" class="footerImg">
      </div>
      <div class="footerMainContentRight">
        <div class="footerText">
          <a href="#">南京大学</a>
           | 
          <a href="#">物理学院</a>
           | 
          <a href="#">固体微结构物理国家重点实验室</a>
        </div>
        <div class="footerText">
          地址：江苏省南京市鼓楼区
        </div>
        <div class="footerText">
          Copyright © 2019 <a href="#">Biomech NJU </a>. All Rights Reserved
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
    width:600px;
    margin: 0 auto;
    height: 100%;
    display: flex;
    align-items: center;
  }

  .footerMainContentLeft{
    width: 100px;
    height: 100px;
    background-color: red;
    border-radius: 50%;
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
