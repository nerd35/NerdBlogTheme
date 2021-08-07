import React from "react";

const Newsletter = () => {
  return (
      <>
    <div className="container text-center newsletter-container d-none d-md-block">
      <h1 className="newsletter-title">Subscribe to our Newslatter</h1>
      <p className="newsletter-info">
        Sign up for free and be the first to get notified about new posts.
      </p>

      <form class="input-group mb-3 ">
    <div className="form-section">

        <input
          type="text"
          class="form-control"
          placeholder="Your email address"
          aria-label="Recipient's username"
          aria-describedby="basic-addon2"
        />
        <button class="submit-btn" >
          Subscribe
        </button>
    </div>
      </form>
      <div className="py-3 text-center newsletter-socials">
            <span className="me-3"><i class="fab fa-facebook-f me-2"></i>Facebook</span>
            <span className="me-3"><i class="fab fa-twitter me-2"></i>Twitter</span>
            <span className="me-3"><i class="fab fa-instagram me-2"></i>Instagram</span>
            <span className="me-3"><i class="fab fa-youtube me-2"></i>Youtube</span>
      </div>
    </div>
    <div className="container text-center mobile-newsletter-container d-block d-md-none">
      <h1 className="newsletter-title">Subscribe to our Newslatter</h1>
      <p className="newsletter-info">
        Sign up for free and be the first to get notified about new posts.
      </p>

      <form class="form-group mb-3 ">
    <div className="form-section">

        <input
          type="text"
          class="form-control mb-3"
          placeholder="Your email address"
          aria-label="Recipient's username"
          aria-describedby="basic-addon2"
        />
        <button class="submit-btn" >
          Subscribe
        </button>
    </div>
      </form>
      <div className="py-3 text-center newsletter-socials">
            <span className="me-3"><i class="fab fa-facebook-f me-2"></i>Facebook</span>
            <span className="me-3"><i class="fab fa-twitter me-2"></i>Twitter</span>
            <span className="me-3"><i class="fab fa-instagram me-2"></i>Instagram</span>
            <span className="me-3"><i class="fab fa-youtube me-2"></i>Youtube</span>
      </div>
    </div>
    </>
  );
};

export default Newsletter;
