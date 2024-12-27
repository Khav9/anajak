<template>
  <div class="d-flex flex-column min-vh-100">
    <NavBar />
    <RouterView id="site"/>
    <Footer />
  </div>
</template>

<script>
import Footer from "./Footer.vue";
import NavBar from "./NavBar.vue";

export default {
  components: {
    NavBar,
    Footer,
  },
};
</script>