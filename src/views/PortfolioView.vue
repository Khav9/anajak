<template>
  <div class="container">
    <h2 class="text-center mb-5">Our Portfolio</h2>
    <div class="timeline position-relative">
      <!-- Vertical Line -->
      <div class="timeline-vertical-line"></div>

      <!-- Real Estate Project -->
      <div class="timeline-item d-flex align-items-center mb-5">
        <div class="col-md-6 timeline-text">
          <div class="timeline-point-on-line" style="top: 10px"></div>
          <h4 class="text-center mb-3 p-3">Real Estate Project</h4>
          <img
            src="../components/logo/Logo_Anajak-Group-small.png"
            alt="Real Estate Project"
            class="img-fluid rounded"
          />
        </div>
      </div>

      <!-- Agriculture -->
      <div class="timeline-item d-flex align-items-center mb-5">
        <div class="col-md-6 ms-auto timeline-text">
          <div class="timeline-point-on-line" style="top: 10px"></div>
          <h4 class="text-center mb-3 p-3">Agriculture</h4>
          <img
            src="../components/logo/Logo_Anajak-Group-small.png"
            alt="Agriculture"
            class="img-fluid rounded"
          />
        </div>
      </div>

      <!-- Tourism and Services -->
      <div class="timeline-item d-flex align-items-center mb-5">
        <div class="col-md-6 timeline-text">
          <div class="timeline-point-on-line" style="top: 10px"></div>
          <h4 class="text-center mb-3 p-3">Tourism and Services</h4>
          <img
            src="../components/logo/Logo_Anajak-Group-small.png"
            alt="Tourism and Services"
            class="img-fluid rounded"
          />
        </div>
      </div>

      <!-- Special Economic Zones -->
      <div class="timeline-item d-flex align-items-center mb-5">
        <div class="col-md-6 ms-auto timeline-text">
          <div class="timeline-point-on-line" style="top: 10px"></div>
          <h4 class="text-center mb-3 p-3">Special Economic Zones</h4>
          <img
            src="../components/logo/Logo_Anajak-Group-small.png"
            alt="Special Economic Zones"
            class="img-fluid rounded"
          />
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "Portfolio",
};
</script>

<style scoped>
.container {
  padding: 2rem;
}

.timeline {
  position: relative;
}

.timeline-vertical-line {
  position: absolute;
  left: 50%;
  top: 0;
  bottom: 0;
  width: 2px;
  background-color: #ccc;
  transform: translateX(-50%);
}

.timeline-point-on-line {
  position: absolute;
  left: 50%;
  width: 12px;
  height: 12px;
  background-color: black;
  border-radius: 50%;
  transform: translateX(-50%);
  z-index: 1;
  top: 10px;
}

.timeline-item {
  display: flex;
  justify-content: space-between;
  flex-wrap: wrap;
  position: relative;
}

.col-md-6 {
  flex: 0 0 48%;
}

h4 {
  font-weight: bold;
  margin-top: 1rem;
  background-color: aliceblue;
}

img {
  width: 80%;
  height: auto;
  border-radius: 0.5rem;
}

@media (max-width: 768px) {
  .timeline-item {
    flex-direction: row-reverse;
  }

  .timeline-vertical-line {
    left: 10%;
  }

  .col-md-6 {
    width: 100%;
  }

  .timeline-text {
    order: 1;
  }

  img {
    width: 100%;
    margin-top: 1rem;
  }
}
</style>
