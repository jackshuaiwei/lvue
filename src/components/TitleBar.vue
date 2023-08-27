<template>
    <div style="display: flex;width: 400px;">
      <div style="display: flex;align-items: center;height: 50px;">
          <slot></slot>
          <div :class="showStyle">{{ titleZn }}</div>
      </div>
      <img src="/img/xiegang.png" style="width: 29px;height: 62px;">
      <div :class="showStyle2">{{ titleEn }}</div>
    </div>
</template>

<script>
    export default{
        props: {
            titleZn: {
                tyep:String,
            },
            titleEn: {
                tyep:String,
            },
            showStyle: {
                type: String,
                default: "titleBlack"
            },
            showStyle2: {
                type: String,
                default: "titleBlack2"
            }
        }
    }
</script>

<style>
    .titleBlack{
        font-size: 28px;
        color:#333333;
        margin-left: 10px;
        line-height: 50px;
    }

    .titleWhite{
        font-size: 28px;
        color:#ffffff;
        margin-left: 10px;
        line-height: 50px;
    }

    .titleBlack2{
        margin-top: 26px;
        margin-left: 5px;
        color: #333333;
    }

    .titleWhite2{
        margin-top: 26px;
        margin-left: 5px;
        color: #ffffff;
    }
</style>