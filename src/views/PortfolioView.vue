<template>
  <div class="row pt-4 m-0 portfolio pb-4 page" id="site">
    <h2 class="text-center mb-5">Our Portfolio</h2>
    <div class="timeline position-relative">
      <!-- Vertical Line -->
      <div class="timeline-vertical-line"></div>

      <!-- Real Estate Project -->
      <div class="timeline-item d-flex align-items-center text-center">
        <div class="col-md-6 timeline-text">
          <div class="timeline-point-on-line" style="top: 10px"></div>
          <h5 class="text-center py-3 m-0">Real Estate Project</h5>
          <img
            src="../components/images/real-estate-project.jpg"
            alt="Real Estate Project"
            class="img-fluid rounded"
          />
        </div>
      </div>

      <!-- Agriculture -->
      <div class="timeline-item d-flex align-items-center text-center">
        <div class="col-md-6 ms-auto timeline-text">
          <div class="timeline-point-on-line" style="top: 10px"></div>
          <h5 class="text-center p-3 m-0">Agriculture</h5>
          <img
            src="../components/images/agriculture-v2.jpg"
            alt="Agriculture"
            class="img-fluid rounded"
          />
        </div>
      </div>

      <!-- Tourism and Services -->
      <div class="timeline-item d-flex align-items-center text-center">
        <div class="col-md-6 timeline-text">
          <div class="timeline-point-on-line" style="top: 10px"></div>
          <h5 class="text-center p-3 m-0">Tourism and Services</h5>
          <img
            src="../components/images/tourism-and-services.jpg"
            alt="Tourism and Services"
            class="img-fluid rounded"
          />
        </div>
      </div>

      <!-- Special Economic Zones -->
      <div class="timeline-item d-flex align-items-center text-center">
        <div class="col-md-6 ms-auto timeline-text">
          <div class="timeline-point-on-line" style="top: 10px"></div>
          <h5 class="text-center p-3 m-0">Special Economic Zones</h5>
          <img
            src="../components/images/economic.jpg"
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
  margin-top: -0.6rem;
}

h5 {
  font-weight: bold;
  background-color: #E1E6E0;
}

img {
  width: 100%;
  height: auto;
  border-radius: 0.5rem;
  border: 15px solid white;
}

@media (max-width: 768px) {
  .timeline-item {
    flex-direction: column;
    text-align: center; 
  }

  .timeline-vertical-line {
    left: 5%;
  }

  .timeline-point-on-line {
    left: 2.5%;
  }

  img {
    width: 90%;
  }

  h5 {
    font-size: 1rem;
  }
}

</style>
