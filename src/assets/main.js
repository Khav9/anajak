export default {
  scrollToTop() {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  },
  handleScroll(callback) {
    const onScroll = () => {
      const isVisible = window.scrollY > 100;
      callback(isVisible);
    };
    window.addEventListener("scroll", onScroll);

    return () => {
      window.removeEventListener("scroll", onScroll);
    };
  },
};

// whidow.function : global function js