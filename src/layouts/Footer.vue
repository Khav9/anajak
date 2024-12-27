<template>
  <footer class="footer bg-dark text-white py-4" id="site">
    <div class="container">
      <div class="row align-items-center">
        <!-- Left Section: Company Info -->
        <div class="col-md-6 text-center text-md-start mb-2 mb-md-0">
          <p class="mb-0">© 2022 Anajak Group Co., Ltd. All Rights Reserved.</p>
        </div>

        <!-- Right Section: Location and Contact -->
        <div class="col-md-6 text-center text-md-end">
          <p class="mb-0">
            <i class="bi bi-geo-alt-fill text-warning"></i>
            #190, St.51, Beoung Keng Kang, Phnom Penh
            <a
              href="mailto:info@anajak.com.kh"
              class="text-white text-decoration-none ms-3"
            >
              <i class="bi bi-envelope text-warning"></i>
              info@anajak.com.kh
            </a>
          </p>
        </div>
      </div>
    </div>
  </footer>
</template>

<style scoped>
.footer {
  background-color: #343a40;
  color: #ffffff;
}

.footer a {
  color: #ffd700; 
  transition: color 0.3s ease-in-out;
}

.footer a:hover {
  color: #ffffff; 
}

.footer p {
  margin: 0;
  font-size: 14px;
}

@media (max-width: 576px) {
  .footer p {
    font-size: 12px;
  }
}
</style>