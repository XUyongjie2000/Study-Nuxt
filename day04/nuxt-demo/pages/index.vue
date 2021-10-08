<template>
  <div>
    <h1>{{ count }}</h1>
    <h3>{{ $store.state.todolist.list }}</h3>
    <button @click="increment(200)">同步加</button>
    <button @click="asyncIncrement">异步加</button>
  </div>
</template>

<script>
import { mapState, mapMutations, mapActions } from "vuex";
export default {
  computed: {
    //传统方适
    // count() {
    //   return this.$store.state.count;
    // }
    //mapState调用之后返回一个对象{count:function(){}}
    ...mapState(["count"])
  },
  methods: {
    increment(num) {
      // this.$store.commit("increment", 100);
      this.$store.commit("increment", num);
    },
    asyncIncrement() {
      this.$store.dispatch("asyncIncrement", 1000);
    }
  }
};
</script>

<style></style>
