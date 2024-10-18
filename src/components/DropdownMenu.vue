<template>
  <transition name="slide">
    <div
      v-show="isMenuOpen"
      id="menu"
      class="fixed z-20 h-full w-full shadow-2xl md:w-1/3"
      @mouseleave="hideMenu"
    >
      <nav
        class="flex flex-col space-y-5 h-full pt-8 px-5 bg-white opacity-75 md:opacity-85"
      >
        <section id="menu">
          <div>
            <router-link to="/items/kitchen">Kitchen</router-link>
            <hr />
          </div>
          <div>
            <router-link to="/items/lighting">Lighting</router-link>
            <hr />
          </div>
          <div>
            <router-link to="/items/furniture">Furniture</router-link>
            <hr />
          </div>
        </section>
        <div class="flex flex-col text-sm text-zinc-700">
          <a href="#" class="mb-2">Search</a>
          <a href="#">Login</a>
        </div>
      </nav>
    </div>
  </transition>
</template>

<script>
import { mapState, mapMutations } from "vuex";
// import TheHeader from "./layout/TheHeader.vue";

export default {
  components: {
    // TheHeader,
  },
  computed: {
    ...mapState(["isMenuOpen"]),
  },
  methods: {
    ...mapMutations(["toggleMenu"]),
    hideMenu() {
      this.toggleMenu(false);
    },
  },
  watch: {
    isMenuOpen(newVal) {
      document.body.style.overflow = newVal ? "hidden" : "";
    },
  },
};
</script>

<style scoped>
/*Animations*/

.slide-enter-active,
.slide-leave-active {
  transition: all 0.5s ease-in-out;
}

.slide-enter-from {
  transform: translateX(-100%);
}

.slide-leave-to {
  transform: translateX(-100%);
}
</style>
