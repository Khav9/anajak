<template>
  <footer class="bg-dark text-white py-3">
    <div class="container">
      <div class="row align-items-center">
        <!-- Left Content -->
        <div class="col-md-6 text-center text-md-start mb-2 mb-md-0">
          <small>© 2022 Anajak Group Co., Ltd. All Rights Reserved.</small>
        </div>
        <!-- Right Content -->
        <div class="col-md-6 text-center text-md-end">
          <small class="d-block d-md-inline">
            <i class="bi bi-geo-alt-fill text-warning me-1"></i>
            Location #190, St.51, Beoung Keng Kang
          </small>
          <span class="mx-2 d-none d-md-inline">|</span>
          <a
              href="mailto:info@anajak.com.kh"
              class="text-white text-decoration-none"
            >
              <i class="bi bi-envelope text-warning"></i>
              info@anajak.com.kh
            </a>
        </div>
      </div>
    </div>
  </footer>
</template>

<script>
export default {
  name: "Footer",
};
</script>

<style scoped>
footer {
  font-size: 0.9rem;
}
</style>
