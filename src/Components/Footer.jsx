import { useEffect, useState } from "react";
import "../Style/Footer.css";
function Footer() {
  const [showGoTop, setShowGoTop] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 300) {
        setShowGoTop(true);
      } else {
        setShowGoTop(false);
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  

  const goToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    <>
      {/* Footer Section */}
      <footer
      
        className="white_text"
        data-aos="fade-in"
        data-aos-duration="1500"
      >
        <div className="container">
          <div className="row">
            {/* Left Side */}
            <div className="col-md-6">
              <div className="logo_side">
                {/* Logo */}
                <div className="logo">
                  <a href="/">
                    <img src="/logo2.png" alt="Logo" />
                  </a>
                </div>

                {/* Newsletter */}
                <div className="news_letter">
                  <h3>Subscribe newsletter</h3>

                  <p>Be the first to receive all latest post in your inbox</p>

                  <form onSubmit={(e) => e.preventDefault()}>
                    <div className="form-group">
                      <input
                        type="email"
                        className="form-control"
                        placeholder="Enter your email"
                      />

                      <button type="submit" className="btn">
                        <i className="icofont-paper-plane"></i>
                      </button>
                    </div>

                    <p className="note">
                      By clicking send link you agree to receive message.
                    </p>
                  </form>
                </div>

                {/* Contact Information */}
                <ul className="contact_info">
                  <li>
                    <a href="mailto:support@example.com">support@example.com</a>
                  </li>

                  <li>
                    <a href="tel:+19001234567">+1-900-123 4567</a>
                  </li>
                </ul>

                {/* Social Media */}
                <ul className="social_media">
                  <li>
                    <a href="#" aria-label="Facebook">
                      <i className="icofont-facebook"></i>
                    </a>
                  </li>

                  <li>
                    <a href="#" aria-label="Twitter">
                      <i className="icofont-twitter"></i>
                    </a>
                  </li>

                  <li>
                    <a href="#" aria-label="Instagram">
                      <i className="icofont-instagram"></i>
                    </a>
                  </li>

                  <li>
                    <a href="#" aria-label="Pinterest">
                      <i className="icofont-pinterest"></i>
                    </a>
                  </li>
                </ul>
              </div>
            </div>

            {/* Right Side */}
            <div className="col-md-6">
              <div className="download_side">
                <h3>Download app</h3>

                <ul className="app_btn">
                  <li>
                    <a href="#">
                      <img
                        className="blue_img"
                        src="/googleplay.png"
                        alt="Google Play"
                      />
                    </a>
                  </li>

                  <li>
                    <a href="#">
                      <img
                        className="blue_img"
                        src="/appstorebtn.png"
                        alt="App Store"
                      />
                    </a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>

        {/* Footer Bottom */}
        <div className="footer_bottom">
          <div className="container">
            <div className="ft_inner">
              {/* Copyright */}
              <div className="copy_text">
                <p>© Copyrights 2023. All rights reserved.</p>
              </div>

              {/* Links */}
              <ul className="links">
                <li>
                  <a href="/">Home</a>
                </li>

                <li>
                  <a href="/about">About us</a>
                </li>

                <li>
                  <a href="/pricing">Pricing</a>
                </li>

                <li>
                  <a href="/blog">Blog</a>
                </li>

                <li>
                  <a href="/contact">Contact us</a>
                </li>
              </ul>

              {/* Designer */}
              <div className="design_by">
                <p>
                  Crafted by{" "}
                  <a
                    href="https://themeforest.net/user/kalanidhithemes"
                    target="_blank"
                    rel="noreferrer"
                  >
                    Kalanidhi Themes
                  </a>
                </p>
              </div>
            </div>
          </div>
        </div>
      </footer>

      {/* Go Top Button */}
<div
  className={`go_top ${showGoTop ? "show" : ""}`}
  onClick={goToTop}
  role="button"
  tabIndex="0"
  aria-label="Go to top"
  onKeyDown={(e) => {
    if (e.key === "Enter" || e.key === " " || e.key === "ArrowUp") {
      e.preventDefault();
      goToTop();
    }
  }}
>
  <span>
    <i className="icofont-arrow-up"></i>
  </span>
</div>
    </>
  );
}

export default Footer;
