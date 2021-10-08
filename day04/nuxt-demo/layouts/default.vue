<template>
  <div>
    <nav>
      <ul>
        <li><nuxt-link to="/">home</nuxt-link></li>
        <li><nuxt-link to="/fade">fade</nuxt-link></li>
        <li><nuxt-link to="/bounce">bounce</nuxt-link></li>
      </ul>
    </nav>
    <main>
      <Nuxt />
    </main>
  </div>
</template>

<script>
export default {
  middleware: "auth2"
};
</script>

<style>
.page-enter,
.page-leave-to {
  opacity: 0;
}
.page-enter-active,
.page-leave-active {
  transition: opacity 0.8s;
}
.bounce-enter-active {
  animation: bounce-in 0.8s;
}
.bounce-leave-active {
  animation: bounce-out 0.5s;
}
@keyframes bounce-in {
  0% {
    transform: scale(0);
  }
  50% {
    transfrom: scale(1.25);
  }
  100% {
    transform: scale(1);
  }
}
@keyframes bounce-out {
  0% {
    transform: scale(1);
  }
  50% {
    transform: scale(1.25);
  }
  100% {
    transform: scale(0);
  }
}

body {
  font-family: system-ui, -apple-system, BlinkMacSystemFont, Segoe UI, Roboto,
    Helvetica Neue, Arial, Noto Sans, sans-serif, Apple Color Emoji,
    Segoe UI Emoji, Segoe UI Symbol, Noto Color Emoji;
  margin: 0;
}

nav a {
  color: inherit;
  text-decoration: none;
}

a.nuxt-link-exact-active {
  color: #00c58e;
}

main {
  margin: 0 auto;
  margin-top: 50px;
  padding: 0 1rem;
  max-width: 1280px;
  text-align: center;
}

ul {
  list-style-type: none;
  padding: 0;
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
}
li {
  margin: 0 0.5rem;
  padding: 0.25rem;
  font-size: 1.2rem;
}

nav {
  padding: 0 1rem;
}
</style>
