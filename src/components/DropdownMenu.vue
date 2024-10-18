<template>
  <!-- <transition name="slide"> -->
    <div v-show="isMenuOpen" id="menu" class="fixed inset-0 z-20 m-h-screen w-full h-full bg-white opacity-75 shadow-2xl">
      <TheHeader />
      <section class="flex flex-col space-y-5 mt-8 px-4">
        <div>
          <a href="#">Kitchen</a>
          <hr>
        </div>
        <div>
          <a href="#">Bowls</a>
          <hr>
        </div>
        <div>
          <a href="#">Bowls</a>
          <hr>
        </div>
      </section>
    </div>
  <!-- </transition> -->
</template>

<script>
import TheHeader from './layout/TheHeader.vue';

export default{
  components: {
    TheHeader,
  },
  computed: {
    isMenuOpen(){
      return this.$store.state.isMenuOpen;
    }
  },
}
</script>

<style scoped>
/*Animations*/

.slide-enter-active,
.slide-leave-active {
  transition: all 0.5s ease;
}

.slide-enter,
.slide-leave-to {
  transform: translateX(-100%);
}
</style>