import { Link } from "react-router-dom";
import "../Pages/SignUp.css";

export default function SignUp() {
  return (
    <section className="signup_section">
      <div className="container">
        {/* Top Header */}
        <div className="top_part" data-aos="fade-up" data-aos-duration="1200">
          <Link to="/" className="back_btn">
            <i className="icofont-arrow-left"></i> Back to home
          </Link>

          <Link to="/" className="navbar-brand">
            <img src="/logo2.png" alt="logo" />
          </Link>
        </div>

        <div className="form_block">
          {/* Left */}
          <div
            className="form_side"
            data-aos="fade-right"
            data-aos-duration="1200"
          >
            <div className="section_title">
              <span className="title_badge">Get Started</span>

              <h2>
                Create your <span>account</span>
              </h2>

              <p>Join us and start using all premium features today.</p>
            </div>

            <form>
              <div className="form-group">
                <input
                  type="text"
                  className="form-control"
                  placeholder="Full Name"
                />
              </div>

              <div className="form-group">
                <input
                  type="email"
                  className="form-control"
                  placeholder="Email Address"
                />
              </div>

              <div className="form-group">
                <input
                  type="password"
                  className="form-control"
                  placeholder="Password"
                />
              </div>

              <div className="form-group">
                <input
                  type="password"
                  className="form-control"
                  placeholder="Confirm Password"
                />
              </div>

              <label className="remember_check">
                <input type="checkbox" />
                <span>I agree to the Terms & Privacy Policy</span>
              </label>

              <button type="submit" className="puprple_btn">
                Create Account
              </button>

              <button type="button" className="google_btn">
                <img src="/google_G.svg" alt="" />
                Sign up with Google
              </button>

              <div className="sign_in_here">
                <p>
                  Already have an account? <Link to="/sign-in">Sign In</Link>
                </p>
              </div>
            </form>
          </div>

          {/* Right */}
          <div
            className="side_screen"
            data-aos="fade-left"
            data-aos-duration="1200"
          >
            <div className="dotes_blue">
              <img src="/blue_dotes.png" alt="" />
            </div>

            <div className="left_icon">
              <img src="/smallStar.png" alt="" />
            </div>

            <div className="right_icon">
              <img src="/bigstar.png" alt="" />
            </div>

            <div className="scrren">
              <img src="/sign_in_screen.png" alt="" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}