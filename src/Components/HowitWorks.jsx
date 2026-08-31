import "../Style/Howitworks.css";

const steps = [
  {
    icon: "/howstep1.png",
    title: "Download app",
    social: true,
    tagText: null,
    desc: (
      <>
        Download App. It will work for <br /> Android, Mac & Windows
      </>
    ),
    stepNumber: "01",
    border: true,
  },
  {
    icon: "/howstep2.png",
    title: "Create account",
    social: false,
    tagText: "Free for 14 days",
    desc: (
      <>
        Our app is FREE for 14 days, Sign up free <br /> for trial period
      </>
    ),
    stepNumber: "02",
    border: true,
  },
  {
    icon: "/howstep3.png",
    title: "Enjoy the app",
    social: false,
    tagText: "Read FAQs for any query",
    desc: (
      <>
        Enjoy our app & share <br /> most amazing app experience
      </>
    ),
    stepNumber: "03",
    border: false,
  },
];

function HowItWorks() {
  return (
    <section className="how_it_section white_text">
      <div className="how_it_inner" data-aos="fade-in" data-aos-duration="1500">
        <div className="dotes_blue">
          <img src="/blue_dotes.png" alt="image" />
        </div>

        <div className="container">
          <div
            className="section_title"
            data-aos="fade-up"
            data-aos-duration="1500"
          >
            <span className="title_badge">Quick & easy</span>
            <h2>How it works in 3 steps</h2>
          </div>

          <div className="row">
            {steps.map((step, index) => (
              <div className="col-md-4" key={index}>
                <div
                  className={`steps_block ${step.border ? "step_border" : ""}`}
                  data-aos="fade-up"
                  data-aos-duration="1500"
                >
                  <div className="steps">
                    <div className="icon">
                      <img src={step.icon} alt="image" />
                    </div>
                    <div className="text">
                      <h3>{step.title}</h3>

                      {step.social && (
                        <ul className="social">
                          <li>
                            <a href="#">
                              <i className="icofont-brand-android-robot"></i>
                            </a>
                          </li>
                          <li>
                            <a href="#">
                              <i className="icofont-brand-apple"></i>
                            </a>
                          </li>
                          <li>
                            <a href="#">
                              <i className="icofont-brand-windows"></i>
                            </a>
                          </li>
                        </ul>
                      )}

                      {step.tagText && (
                        <span className="tag_text">{step.tagText}</span>
                      )}

                      <p>{step.desc}</p>
                    </div>
                  </div>
                  <span className="step">{step.stepNumber}</span>
                </div>
              </div>
            ))}
          </div>

          <div className="text-center">
            <div className="btn_block">
              <a href="/contact" className="btn puprple_btn ml-0">
                Get started now
              </a>
              <div className="btn_bottom"></div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default HowItWorks;