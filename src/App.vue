<template>
  <main>
    <TheHeader />
    <router-view></router-view>
    <TheFooter />
  </main>
</template>

<script>
import TheHeader from "./components/layout/TheHeader.vue";
import TheFooter from "./components/layout/TheFooter.vue";
import { mapState } from "vuex";

export default {
  name: "App",
  components: {
    TheHeader,
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
