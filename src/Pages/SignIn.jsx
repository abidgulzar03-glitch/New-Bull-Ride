import { Link } from "react-router-dom";
import "../Pages/SignIn.css";

export default function SignIn() {
  return (
    <section className="signup_section">
      <div className="container">
        {/* Top Header */}
        <div className="top_part" data-aos="fade-up" data-aos-duration="1200">
          <Link to="/" className="back_btn">
            <i className="icofont-arrow-left"></i> Back to home
          </Link>

          <Link className="navbar-brand" to="/">
            <img src="/logo2.png" alt="logo" />
          </Link>
        </div>

        {/* Sign In Form */}
        <div className="form_block">
          {/* Left Form */}
          <div
            className="form_side"
            data-aos="fade-right"
            data-aos-duration="1200"
          >
            <div className="section_title">
              <span className="title_badge">Welcome Back</span>

              <h2>
                <span>Sign in</span> to your account
              </h2>

              <p>Quickly access your products and features.</p>
            </div>

            <form>
              <div className="form-group">
                <input
                  type="email"
                  className="form-control"
                  placeholder="Email"
                />
              </div>

              <div className="form-group">
                <input
                  type="password"
                  className="form-control"
                  placeholder="Password"
                />
              </div>

              <div className="forgate_check">
                <label className="remember_check">
                  <input type="checkbox" />
                  <span>Remember for 30 days</span>
                </label>

                <Link to="#">Forgot password?</Link>
              </div>
<div className="signin_btn_block">
  <button type="submit" className="btn puprple_btn">
    Sign In Now
  </button>
</div>

              <button type="button" className="btn google_btn">
                <img src="/google_G.svg" alt="google" />
                Sign In with Google
              </button>

              <div className="sign_in_here">
                <p>
                  Don’t have an account? <Link to="/sign-up">Sign Up here</Link>
                </p>
              </div>
            </form>
          </div>

          {/* Right Image */}
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
              <img src="/sign_in_screen.png" alt="screen" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}