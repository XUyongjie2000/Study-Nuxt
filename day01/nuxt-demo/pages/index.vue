<template>
  <div class="home">
    <h3>Home Page</h3>
    <nuxt-link to="/about">go about</nuxt-link>
    <nuxt-link to="/login">go login</nuxt-link>
    <!-- <nuxt-link to="/goods/100">goods/100</nuxt-link>
    <nuxt-link to="/goods/100/200">goods/100/200</nuxt-link> -->
    <nuxt-link to="/goods?cid=100">goods?cid=100</nuxt-link>
    <nuxt-link to="/goods?cid=100&gid=200">goods?cid=100&gid=200</nuxt-link>
    <Goods />
  </div>
</template>

<script>
export default {
  //指定要使用的布局文件
  // layout: "blog"
};
</script>

<style></style>
