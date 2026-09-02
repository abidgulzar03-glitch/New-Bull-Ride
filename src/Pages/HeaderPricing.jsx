import { useEffect, useState } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import "./HeaderPricing.css";



const FEATURES = [
  "Cloud storage",
  "Chat history",
  "Optimization",
  "Unlimited viewers",
  "Live reporting",
  "24/7 Support",
];

const PLANS = [
  {
    name: "Basic",
    audience: "For single users",
    price: "$15",
    values: ["Up to 10 GB", "30 days", false, false, "30 Days", "30 Days"],
  },
  {
    name: "Premium",
    audience: "For agencies",
    price: "$45",
    values: ["Up to 100 GB", "Unlimited", true, true, "90 Days", "90 Days"],
  },
  {
    name: "Standard",
    audience: "For team",
    price: "$30",
    values: ["Up to 30 GB", "60 days", true, true, "60 Days", "60 Days"],
  },
];

const FAQ_COLUMNS = [
  [
    {
      id: "one",
      q: "How app will useful for my business ?",
      a: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since an unknown printer took a galley of type and scrambled it to make a type specimen book.",
    },
    {
      id: "two",
      q: "What support i will get in premium package?",
      a: "Premium members receive 24/7 priority support, live chat assistance, email support, and dedicated onboarding whenever you need help.",
    },
    {
      id: "three",
      q: "Can i get update for free ?",
      a: "Yes. All plans include free product updates, bug fixes, security patches, and regular feature improvements without any extra cost.",
    },
    {
      id: "four",
      q: "How to setup account ?",
      a: "Create your account using your email, verify your email address, complete your profile, and start using the application in just a few minutes.",
    },
  ],
  [
    {
      id: "five",
      q: "Is there any hidden cost?",
      a: "No. Our pricing is completely transparent. You'll only pay the plan price you choose with no hidden charges or surprise fees.",
    },
    {
      id: "six",
      q: "What is process to get refund ?",
      a: "Simply contact our support team within the eligible refund period. After approval, your refund will be processed to your original payment method.",
    },
    {
      id: "seven",
      q: "How to setup account ?",
      a: "Download the app, sign up with your email, verify your account, and follow the quick setup wizard to get started.",
    },
    {
      id: "eight",
      q: "What is process to get refund ?",
      a: "Approved refunds are usually completed within 5–7 business days depending on your payment provider.",
    },
    {
      id: "nine",
      q: "Is there any discount on packages ?",
      a: "Yes. We offer discounted annual plans, special team pricing, and custom enterprise packages for larger organizations.",
    },
  ],
];

export default function HeaderPricing() {
  const [openFaq, setOpenFaq] = useState("one");

  // Init AOS once on mount. `once: true` stops the animation from
  // replaying on refresh (when the browser restores scroll position)
  // or when you scroll an already-animated element back into view.
  useEffect(() => {
    AOS.init({
      once: true,
      duration: 700,
      easing: "ease-out-cubic",
      offset: 80,
    });
  }, []);

  return (
    <div className="pp_root">
      <div className="page_wrapper">
        {/* Pricing */}
        <section className="pricing_page_block">
          <div className="container">
            <div className="section_title" data-aos="fade-up">
              <span className="title_badge">Pricing</span>

              <h2>
                Best <span>pricing plans</span>
              </h2>

              <p>
                Lorem Ipsum is simply dummy text of the printing indus orem
                Ipsum
                <br />
                has been the industry's standard dummy text ever since.
              </p>
            </div>

            <div className="table_content" data-aos="fade-up" data-aos-delay="100">
              <div className="pricing_table">
                <div className="pricing_block">
                  <div className="pricing_title">
                    <h3>Features</h3>
                  </div>

                  <ul className="features">
                    {FEATURES.map((f) => (
                      <li key={f}>
                        <p>{f}</p>
                      </li>
                    ))}
                  </ul>
                </div>

                {PLANS.map((plan, i) => (
                  <div
                    className="pricing_block"
                    key={plan.name}
                    data-aos="fade-right"
                    data-aos-delay={150 + i * 100}
                  >
                    <div className="pricing_title">
                      <h3>{plan.name}</h3>
                      <span>{plan.audience}</span>

                      <div className="pricing">
                        <h3>
                          {plan.price} <span>/month</span>
                        </h3>
                      </div>

                      <div className="btn_block">
                        <a
                          href="/contact"
                          className="btn puprple_btn ml-0"
                        >
                          Choose Plan
                        </a>
                        <div className="btn_bottom"></div>
                      </div>
                    </div>

                    <ul>
                      {FEATURES.map((f, i) => {
                        const val = plan.values[i];

                        return (
                          <li key={f}>
                            <span className="mobile_text">{f}</span>

                            <p>
                              {typeof val === "boolean"
                                ? val
                                  ? "✔"
                                  : "✖"
                                : val}
                            </p>
                          </li>
                        );
                      })}
                    </ul>
                  </div>
                ))}
              </div>

              <div className="bottom_text text-center">
                <p>
                  Have question ? <a href="#faqsec">Read FAQ</a>
                </p>

                <p>
                  Not sure what to choose ?{" "}
                  <a href="/contact">Contact us</a> for custom packages
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* FAQ */}
        <section className="row_am faq_section" id="faqsec">
          <div className="container">
            <div className="section_title" data-aos="fade-up">
              <span className="title_badge">Question & Answer</span>

              <h2>
                <span>FAQs</span> - Frequently Asked Questions
              </h2>
            </div>

            <div className="row">
              {FAQ_COLUMNS.map((col, idx) => (
                <div
                  className="col-md-6"
                  key={idx}
                  data-aos="fade-right"
                  data-aos-delay={idx * 150}
                >
                  {col.map((item) => (
                    <div className="card" key={item.id}>
                      <div className="card-header">
                        <button
                          className={`faq_btn ${
                            openFaq === item.id ? "active" : ""
                          }`}
                          onClick={() =>
                            setOpenFaq(openFaq === item.id ? null : item.id)
                          }
                        >
                          <span>{item.q}</span>

                          <span className="icons">
                            {openFaq === item.id ? "−" : "+"}
                          </span>
                        </button>
                      </div>

                      {openFaq === item.id && (
                        <div className="card-body">
                          <p>{item.a}</p>
                        </div>
                      )}
                    </div>
                  ))}
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Download */}
        <section className="row_am download_app">
          <div className="task_block" data-aos="fade-up">
            {/* Background dots */}
            <div className="dotes_blue">
              <img src="/blue_dotes.png" alt="Dots" />
            </div>

            <div className="row">
              <div className="col-md-6" data-aos="fade-right" data-aos-delay="100">
                <div className="task_text">
                  <div className="section_title white_text">
                    <span className="title_badge">Download</span>

                    <h2>Our app is available for Android & iOS</h2>

                    <p>
                      Lorem Ipsum is simply dummy text of the printing industry.
                      Lorem Ipsum has been the industry's standard dummy text.
                    </p>
                  </div>

                  {/* Store Buttons */}
                  <ul className="app_btn">
                    <li>
                      <a href="#">
                        <img
                          src="/black_google_play.png"
                          alt="Google Play"
                        />
                      </a>
                    </li>
                    <li>
                      <a href="#">
                        <img
                          src="/black_appstore.png"
                          alt="App Store"
                        />
                      </a>
                    </li>
                  </ul>
                </div>
              </div>

              <div className="col-md-6" data-aos="fade-right" data-aos-delay="200">
                <div className="task_img">
                  <img src="/our_app.png" alt="Our App" />
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
}