<template>
  <div>
    <h1>assets目录下图片资源可以使用</h1>
    <h3>img标签显示图片</h3>
    <img src="~assets/imgs/1.png" alt="" />
    <h3>类名显示图片</h3>
    <div class="picimg"></div>
    <h3>行内样式显示图片</h3>
    <p :style="backgroundImg"></p>
  </div>
</template>

<script>
export default {
  data() {
    return {
      backgroundImg: `background:url(${require("~/assets/imgs/3.png")})`
    };
  }
};
</script>

<style>
.picimg {
  width: 200px;
  height: 200px;
  border: 1px;
  background: url(~assets/imgs/2.png) no-repeat;
  background-size: contain;
}
p {
  width: 200px;
  height: 200px;
  background-size: contain;
}
</style>
