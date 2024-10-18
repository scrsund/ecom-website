<template>
  <main>
    <TheHeader v-if="!isMenuOpen" />
    <DropdownMenu />
    <router-view></router-view>
    <TheFooter />
  </main>
</template>

<script>
import TheHeader from "./components/layout/TheHeader.vue";
import DropdownMenu from "./components/DropdownMenu.vue";
import TheFooter from "./components/layout/TheFooter.vue";
import { mapState } from "vuex";

export default {
  name: "App",
  components: {
    TheHeader,
    DropdownMenu,
    TheFooter,
  },
  computed: {
    ...mapState(["isMenuOpen"]),
  },
};
</script>

<style scoped>
main {
  height: 100%;
  width: 100%;
}
</style>
