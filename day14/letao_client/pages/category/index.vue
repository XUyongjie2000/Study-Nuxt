<template>
  <div class="category">
    <van-tree-select
      height="80vh"
      :items="oneCategoryList"
      :main-active-index.sync="active"
    >
      <!-- 二级分类 -->
      <template #content>
        <div
          class="category_sencond"
          v-for="item in twoCategoryList"
          :key="item.id"
        >
          <van-image width="4rem" :src="item.brandLogo" />
          <p>{{ item.brandName }}</p>
        </div>
      </template>
    </van-tree-select>
  </div>
</template>

<script>
export default {
  data() {
    return {
      active: 0,
      items: [{ text: "分组 1" }, { text: "分组 2" }]
    };
  },
  async asyncData({ $api }) {
    let active = 0;
    let { oneCategoryList } = await $api.OneCategory();
    // 按照vant 组件对数据的要求，所以我们需要对返回的数据进行加工处理
    oneCategoryList = oneCategoryList.map(item => {
      return {
        text: item.categoryName,
        ...item
      };
    });
    // 加载二级分类
    const { twoCategoryList } = await $api.TwoCategory(
      oneCategoryList[active]["id"]
    );
    return {
      active,
      oneCategoryList,
      twoCategoryList
    };
  }
};
</script>

<style>
.category_sencond {
  float: left;
  text-align: center;
}
</style>
