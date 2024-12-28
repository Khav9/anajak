<template>
  <div id="site" class="row pt-4 m-0">
    <!-- Logo Section -->
    <div class="col-12 col-md-4 text-center">
      <img
        src="../components/logo/Logo_Anajak-Group-small.png"
        class="responsive-logo"
        alt="Anajak Group Logo"
      />
    </div>
    <!-- Text Section -->
    <div class="col-12 col-md-8">
      <p class="text-justify">
        <span class="font-weight-bold text-black text"
          >ANAJAK GROUP Co., Ltd.</span
        >
        is a registered investment company headquartered in Phnom Penh, Kingdom
        of Cambodia. We strategically corporate with investors in multi-sectors
        such as
        <span class="font-weight-bold text-black text"
          >Real Estate Investment & Development Agriculture, Industry, Tourism
          and Services</span
        >
        through
        <span class="font-weight-bold text-black text"
          >ANAJAK GROUP Co., Ltd.</span
        >
        as the only trusted, transparent, innovative, synergized and
        professional partners which adds greater value.
      </p>
      <p>
        In the future, we aim to expand our investment in other lucrative
        business and investment opportunities.
      </p>
      <p>
        Our company's visionary and demonstrated leadership, deep sector and
        industry knowledge, strong network and connection with our partners,
        demonstrated problem-solving and financial management skills, and unique
        structures and tailored strategies are our strengths that set us apart
        from others.
      </p>
      <p>
        We are experienced professionals with a track record in the sectors and
        industries we invest in. Our professional team has the experience and
        expertise in serving our partners, including MNCs (multinational
        corporations) and UHNWIs (Ultra-High Net Worth Individuals).
      </p>
    </div>
  </div>
</template>

<style>
.text {
  color: black;
  font-weight: bold;
}
.text-justify {
  text-align: justify;
}
.responsive-logo {
  width: 90%;
  height: auto;
}
@media (max-width: 768px) {
  #site {
    flex-direction: column;
  }
  .about-us{
    margin: 0 auto 15px;
  }
  .responsive-logo {
    margin: 0 auto 15px;
  }
}
</style>
