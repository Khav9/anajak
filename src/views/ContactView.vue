<script setup></script>

<template>
  <div class="row pt-4 m-0 page" id="site">
    <div class="row p-0 my-4 contact-us">
      <!-- Address and Map Section -->
      <div class="col-7 map-contact">
        <p>
          <span class="text-primary"
            ><i class="bi bi-geo-alt-fill"></i> Address:</span
          >
          #190, St.51, Beoung Keng Kang1, Khan Beoung Keng Kang, Phnom Penh,
          Kingdom of Cambodia
        </p>
        <p>
          <span class="text-primary"
            ><i class="bi bi-telephone-fill"></i> Tel:</span
          >
          +855 23 216 169
        </p>
        <a href="mailto:info@anajak.com.kh" class="text-decoration-none">
          <i class="bi bi-envelope-fill"></i> E-mail:
          <span class="text-black">info@anajak.com.kh</span>
        </a>
        <br />
        <br />
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m17!1m12!1m3!1d3909.046823010827!2d104.927386!3d11.548499!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m2!1m1!2zM13CsDMyJzU0LjYiTiAxMDTCsDU1JzM4LjYiRQ!5e0!3m2!1sen!2skh!4v1735317443168!5m2!1sen!2skh"
          width="100%"
          height="72%"
          style="border: 0"
          allowfullscreen=""
          loading="lazy"
          referrerpolicy="no-referrer-when-downgrade"
        ></iframe>
      </div>

      <!-- Contact Form Section -->
      <div
        class="col-5 justify-content-center px-5 py-3 form-contact border border-primary rounded"
      >
        <h4 class="text-center mb-4 text-white">Connect with us</h4>
        <form action="#">
          <!-- Your Name -->
          <div class="mb-3">
            <label for="name" class="form-label text-white">Your Name</label>
            <input
              type="text"
              class="form-control"
              id="name"
              name="name"
              required
            />
          </div>

          <!-- Your Email -->
          <div class="mb-3">
            <label for="email" class="form-label text-white">Your Email</label>
            <input
              type="email"
              class="form-control"
              id="email"
              name="email"
              required
            />
          </div>

          <!-- Subject -->
          <div class="mb-3">
            <label for="subject" class="form-label text-white">Subject</label>
            <input
              type="text"
              class="form-control"
              id="subject"
              name="subject"
              required
            />
          </div>

          <!-- Your Message -->
          <div class="mb-3">
            <label for="message" class="form-label text-white"
              >Your Message (Optional)</label
            >
            <textarea
              class="form-control"
              id="message"
              name="message"
              rows="4"
            ></textarea>
          </div>

          <!-- Submit Button -->
          <button type="submit" class="btn btn-outline-primary w-100">
            Submit Now
          </button>
        </form>
      </div>
    </div>
  </div>
</template>

<style>
.form-contact {
  background-color: #e58f5a;
}

.contact-us {
  display: flex;
  flex-wrap: wrap;
}

.map-contact {
  flex: 2;
  min-width: 60%;
}

.form-contact {
  flex: 1;
  min-width: 35%;
}

@media (max-width: 868px) {
  iframe {
    min-width: 100%;
  }
  .contact-us {
    flex-direction: column;
    align-items: center;
  }

  /* .map-contact,
  .form-contact {
    min-width: 100%;
  } */

  .map-contact {
    min-width: 90%;
    margin-bottom: 120px;
  }

  .form-contact {
    min-width: 90%;
    margin-left: 10px;
  }
}
</style>
