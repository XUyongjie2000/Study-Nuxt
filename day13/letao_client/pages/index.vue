<template>
  <div class="home">
    <!-- 1.轮播图组件 -->
    <IndexCarousel :swiperList="swiperList" />
    <!-- 2.宫格组件 -->
    <IndexGridList :gridlist="gridlist" />
    <!-- 3.活动组件 -->
    <IndexActive />
    <!-- 4.品牌组件 -->
    <IndexBrand />
    <!-- 5.运动专区 -->
    <IndexSports :sports="sports" />
  </div>
</template>

<script>
export default {
  async asyncData({ $axios }) {
    // const { swiperList } = await $axios.$get("/banners");
    // console.log(swiperList, "swiperList");
    //轮播图接口
    const { swiperList } = await $axios.$get("/banners");
    const { gridlist } = await $axios.$get("/gridlist");
    const { sports } = await $axios.$get("/sports");
    return {
      swiperList,
      gridlist,
      sports
    };
  }
};
</script>

<style></style>
