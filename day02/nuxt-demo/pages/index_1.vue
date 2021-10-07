<template>
  <div>
    <ul>
      <li v-for="item in topics" :key="item.id">
        <a href="#">{{ item.title }}</a>
      </li>
    </ul>
  </div>
</template>

<script>
import axios from "axios";
export default {
  // 第一种（推荐） async await返回数据
  // async asyncData() {
  //   const {
  //     data: { data: topics }
  //   } = await axios.get(" https://cnodejs.org/api/v1/topics");
  //   // console.log(data, "data");
  //   return {
  //     topics
  //   };
  // }
  //第二种  返回promise
  asyncData() {
    return axios.get("https://cnodejs.org/api/v1/topics").then(res => {
      return {
        topics: res.data.data
      };
    });
  }
};
</script>

<style></style>
