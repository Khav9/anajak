<template>
  <div id="site" class="mynav">
    <nav class="navbar navbar-expand-lg p-3">
      <div class="container-fluid p-0">
        <!-- Left: Logo -->
        <router-link to="/" class="navbar-brand m-0 p-0">
          <img
            src="../components/logo/Logo_Anajak_Group_small.png"
            alt="Anajak Group Logo"
            style="width: 10rem; height: auto"
          />
        </router-link>

        <!-- Toggle button for mobile view -->
        <button
          class="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNav"
          aria-controls="navbarNav"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span class="navbar-toggler-icon"></span>
        </button>

        <!-- Center: Navigation links -->
        <div class="collapse navbar-collapse" id="navbarNav">
          <ul class="navbar-nav mx-auto">
            <li class="nav-item px-2">
              <!-- Use exact-active-class for the home link -->
              <router-link to="/" class="nav-link text-white" exact-active-class="active-link">HOME</router-link>
            </li>
            <li class="nav-item px-2">
              <router-link to="/aboutus" class="nav-link text-white" active-class="active-link">ABOUT US</router-link>
            </li>
            <li class="nav-item px-2">
              <router-link to="/portfolio" class="nav-link text-white" active-class="active-link">PORTFOLIO</router-link>
            </li>
            <li class="nav-item px-2">
              <router-link to="/contactus" class="nav-link text-white" active-class="active-link">CONTACT US</router-link>
            </li>
          </ul>

          <!-- Right: Icon -->
          <a href="#">
            <div class="d-flex align-items-center">
              <div class="icon-right">
                <div class="icon-button">
                  <i class="bi bi-grid-fill"></i>
                </div>
              </div>
            </div>
          </a>
        </div>
      </div>
    </nav>
  </div>
</template>

<style>
.mynav {
  background-color: #c49abc;
  background: linear-gradient(to right, #00294d, #ff8b42);
}

.navbar-nav .nav-link {
  font-size: 16px;
  padding: 8px 15px;
  transition: color 0.3s ease-in-out;
  font-weight: bold;
}

.navbar-nav .nav-link:hover {
  color: #ffd700 !important;
}

.navbar-nav .active-link {
  color: #ffd700 !important; 
}

.icon-right {
  background-color: white;
  border-radius: 50%;
  width: 50px;
  height: 50px;
  display: flex;
  align-items: center;
  justify-content: center;
  margin-left: 15px;
}

.icon-button {
  background-color: #ff7f00;
  border-radius: 50%;
  width: 40px;
  height: 40px;
  display: flex;
  align-items: center;
  justify-content: center;
}

.icon-button i {
  color: white;
  font-size: 20px;
}

/* Adjust size for mobile screens */
@media (max-width: 767px) {
  .icon-right {
    width: 40px;
    height: 40px;
  }

  .icon-button {
    width: 30px;
    height: 30px;
  }

  .icon-button i {
    font-size: 16px;
  }
}
</style>
