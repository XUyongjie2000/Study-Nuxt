<template lang="pug">
    //-   <div>
    //-     <h1>hello nuxters😂</h1>
    //-     <p> this is pug</p>
    //-   </div>

    div
        h1 hello nuxters😂
        p this is pug
        img(src='~/assets/imgs/1.png')
</template>

<script>
export default {};
</script>

<style lang="scss">
h1 {
  //less  lang="less"
  /* color: @secondary; */
  //scss lang="scss"
  color: $secondary;
}
</style>
