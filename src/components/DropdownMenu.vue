<template>
  <!-- <transition name="slide"> -->
  <div
    v-show="isMenuOpen"
    id="menu"
    class="fixed inset-0 z-20 m-h-screen w-full h-full shadow-2xl"
  >
    <TheHeader />
    <section
      class="flex flex-col space-y-5 h-full pt-8 px-5 bg-white opacity-75"
    >
      <div>
        <a href="#">Kitchen</a>
        <hr />
      </div>
      <div>
        <a href="#">Lighting</a>
        <hr />
      </div>
      <div>
        <a href="#">Furniture</a>
        <hr />
      </div>
    </section>
  </div>
  <!-- </transition> -->
</template>

<script>
import { mapState } from "vuex";
import TheHeader from "./layout/TheHeader.vue";

export default {
  components: {
    TheHeader,
  },
  computed: {
    ...mapState(["isMenuOpen"]),
  },
};
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
