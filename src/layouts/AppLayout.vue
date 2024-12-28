<template>
  <div class="d-flex flex-column min-vh-100">
    <NavBar />
    <RouterView id="site" />
    <Footer />
    <GoToTop/>
  </div>
</template>

<script>
import GoToTop from "@/components/GoToTop.vue";
import Footer from "./Footer.vue";
import NavBar from "./NavBar.vue";
export default {
  components: {
    NavBar,
    Footer,
    GoToTop
  },
};
</script>