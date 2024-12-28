<template>
    <button
      class="go-top"
      :class="{ show: isVisible }"
      @click="scrollToTop"
    >
      <i class="bi bi-chevron-up"></i>
    </button>
  </template>
  
  <script>
  export default {
    name: "GoToTop",
    data() {
      return {
        isVisible: false,
      };
    },
    methods: {
      scrollToTop() {
        window.scrollTo({
          top: 0,
          behavior: "smooth",
        });
      },
      handleScroll() {
        this.isVisible = window.scrollY > 90;
      },
    },
    mounted() {
      window.addEventListener("scroll", this.handleScroll);
    },
    beforeUnmount() {
      window.removeEventListener("scroll", this.handleScroll);
    },
  };
  </script>
  
  <style>
/* Go to Top Button Styling */
.go-top {
  position: fixed;
  bottom: 20px;
  right: 20px;
  width: 30px;
  height: 35px;
  background-color: #007bff;
  color: white;
  border: none;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
  font-size: 24px;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  opacity: 0;
  visibility: hidden;
  transition: all 0.3s ease-in-out;
}
.go-top i:hover {
  color: orange;
}

.go-top:hover {
  background-color: #0056b3;
}

.go-top.show {
  opacity: 1;
  visibility: visible;
}
  </style>
  