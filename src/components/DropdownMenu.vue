<template>
  <!-- <transition name="slide"> -->
  <div
    v-show="isMenuOpen"
    id="menu"
    class="fixed z-20 h-full w-full shadow-2xl md:w-1/4"
    @mouseleave="hideMenu"
  >
    <section
      class="flex flex-col space-y-5 h-full pt-8 px-5 bg-white opacity-80"
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
import { mapState, mapMutations} from "vuex";
// import TheHeader from "./layout/TheHeader.vue";

export default {
  components: {
    // TheHeader,
  },
  computed: {
    ...mapState(["isMenuOpen"]),
  },
  methods: {
    ...mapMutations(['toggleMenu']),
    hideMenu(){
      this.toggleMenu(false)
    }
  }
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
