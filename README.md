# none

# home with key frame

<template>
  <div class="background" id="site">
    <div class="row pt-4 m-0 home" id="site">
      <div class="detail">
        <div class="text-center">
          <span class="text-warning"
            >Real Estate | Agriculture | Industry | Tourism and Services</span
          >
        </div>
        <p class="mt-5 texts">
          <span class="text-white">ANAJAK GROUP Co., Ltd.</span>
          is a registered investment company headquartered in Phnom Penh,
          Kingdom of Cambodia. We strategically corporate with investors in
          multi-sectors such as
          <span class="text-white"
            >Real Estate Investment & Development, Agriculture, Industry,
            Tourism and Services</span
          >
          through <span class="text-white"> ANAJAK GROUP Co.,Ltd.</span> as the
          only trusted, transparent, innovative, synergized and professional
          partners which adds greater value.
        </p>
      </div>
    </div>
    <div class="lines">
      <div v-for="i in 20" :key="i" class="line"></div>
    </div>
  </div>
</template>

<script>
export default {
  name: "homepage",
};
</script>

<style scoped>
.background {
  position: relative;
  height: 80vh;
  background: linear-gradient(135deg, #001f3f, #003366);
  overflow: hidden;
}

#site{
  padding-top: 8%;
}

.content {
  color: #fff;
  text-align: center;
  max-width: 800px;
  z-index: 1;
}

.content h1 {
  font-size: 1.5rem;
  color: #ffc107;
}

.content p {
  font-size: 1.2rem;
  line-height: 1.6;
}

/* Animated Lines */
.lines {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  z-index: 0;
  overflow: hidden;
}

.line {
  position: absolute;
  width: 2px;
  height: 100%;
  background: rgba(255, 255, 255, 0.2);
  animation: moveLines 8s linear infinite;
}

.line:nth-child(odd) {
  background: rgba(255, 255, 255, 0.1);
}

@keyframes moveLines {
  0% {
    transform: translateY(-100%) scaleX(1);
  }
  100% {
    transform: translateY(100%) scaleX(1);
  }
}

/* Positioning lines randomly */
.line:nth-child(1) {
  left: 5%;
  animation-duration: 6s;
}
.line:nth-child(2) {
  left: 10%;
  animation-duration: 7s;
}
.line:nth-child(3) {
  left: 15%;
  animation-duration: 5s;
}
.line:nth-child(4) {
  left: 20%;
  animation-duration: 8s;
}
.line:nth-child(5) {
  left: 25%;
  animation-duration: 4s;
}
.line:nth-child(6) {
  left: 30%;
  animation-duration: 9s;
}
.line:nth-child(7) {
  left: 35%;
  animation-duration: 6s;
}
.line:nth-child(8) {
  left: 40%;
  animation-duration: 7s;
}
.line:nth-child(9) {
  left: 45%;
  animation-duration: 5s;
}
.line:nth-child(10) {
  left: 50%;
  animation-duration: 8s;
}
.line:nth-child(11) {
  left: 55%;
  animation-duration: 6s;
}
.line:nth-child(12) {
  left: 60%;
  animation-duration: 7s;
}
.line:nth-child(13) {
  left: 65%;
  animation-duration: 4s;
}
.line:nth-child(14) {
  left: 70%;
  animation-duration: 9s;
}
.line:nth-child(15) {
  left: 75%;
  animation-duration: 5s;
}
.line:nth-child(16) {
  left: 80%;
  animation-duration: 8s;
}
.line:nth-child(17) {
  left: 85%;
  animation-duration: 6s;
}
.line:nth-child(18) {
  left: 90%;
  animation-duration: 7s;
}
.line:nth-child(19) {
  left: 95%;
  animation-duration: 5s;
}
.line:nth-child(20) {
  left: 98%;
  animation-duration: 8s;
}
</style>
