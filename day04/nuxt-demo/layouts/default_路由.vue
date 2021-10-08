<template>
  <div>
    <nav>
      <ul>
        <!-- <li><nuxt-link to="/">Home</nuxt-link></li>
        <li><nuxt-link to="/parent">Parent</nuxt-link></li> -->
        <li><a :class="{ active: flag }" @click="go('/')">Home</a></li>
        <li><a :class="{ active: !flag }" @click="go('/parent')">Parent</a></li>
      </ul>
    </nav>
    <main>
      <Nuxt />
    </main>
  </div>
</template>

<script>
export default {
  data() {
    return {
      flag: true
    };
  },
  methods: {
    go(path) {
      this.flag = !this.flag;
      this.$router.push(path);
    }
  }
};
</script>

<style></style>
