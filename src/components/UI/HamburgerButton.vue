<template>
  <div :class="['hamburger', buttonClass]">
    <span class="hamburger-top"></span>
    <span class="hamburger-middle"></span>
    <span class="hamburger-bottom"></span>
  </div>
</template>

<script>

export default{
  computed: {
    buttonClass(){
      return {
        open: this.$store.state.isMenuOpen,
      }
    }
  }
}
</script>