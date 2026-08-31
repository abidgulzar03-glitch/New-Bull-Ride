import { useState } from "react";
import "../Style/Pricing.css";

const monthlyPlans = [
  {
    key: "free",
    name: "Free",
    subtitle: "For single users",
    price: "$15",
    period: "/month",
    highlighted: false,
    offer: null,
    features: [
      { text: "Up to 15 GB cloud storage", included: true },
      { text: "30 day chat history", included: true },
      { text: "Data security", included: false },
      { text: "5 People access", included: false },
      { text: "24/7 Support", included: false },
    ],
  },
  {
    key: "premium",
    name: "Premium",
    subtitle: "For agencies",
    price: "$45",
    period: "/month",
    highlighted: true,
    offer: "Save 50%",
    features: [
      { text: "Up to 15 GB cloud storage", included: true },
      { text: "30 day chat history", included: true },
      { text: "Data security", included: true },
      { text: "5 People access", included: true },
      { text: "24/7 Support", included: true },
    ],
  },
  {
    key: "standard",
    name: "Standard",
    subtitle: "For team",
    price: "$30",
    period: "/month",
    highlighted: false,
    offer: null,
    features: [
      { text: "Up to 15 GB cloud storage", included: true },
      { text: "30 day chat history", included: true },
      { text: "Data security", included: true },
      { text: "5 People access", included: false },
      { text: "24/7 Support", included: false },
    ],
  },
];

const yearlyPlans = [
  {
    key: "free",
    name: "Free",
    subtitle: "For single users",
    price: "$99",
    period: "/month",
    highlighted: false,
    offer: null,
    features: [
      { text: "Up to 15 GB cloud storage", included: true },
      { text: "30 day chat history", included: true },
      { text: "Data security", included: false },
      { text: "5 People access", included: false },
      { text: "24/7 Support", included: false },
    ],
  },
  {
    key: "premium",
    name: "Premium",
    subtitle: "For agencies",
    price: "$399",
    period: "/month",
    highlighted: true,
    offer: "Save 50%",
    features: [
      { text: "Up to 15 GB cloud storage", included: true },
      { text: "30 day chat history", included: true },
      { text: "Data security", included: true },
      { text: "5 People access", included: true },
      { text: "24/7 Support", included: true },
    ],
  },
  {
    key: "standard",
    name: "Standard",
    subtitle: "For team",
    price: "$299",
    period: "/month",
    highlighted: false,
    offer: null,
    features: [
      { text: "Up to 15 GB cloud storage", included: true },
      { text: "30 day chat history", included: true },
      { text: "Data security", included: true },
      { text: "5 People access", included: false },
      { text: "24/7 Support", included: false },
    ],
  },
];

function PricingCard({ plan }) {
  return (
    <div className="col-md-4">
      <div
        className={`pannel_block ${plan.highlighted ? "highlited_block" : ""}`}
        data-aos="fade-up"
        data-aos-duration="1500"
      >
        <div className="heading">
          <h3>{plan.name}</h3>
          <span>{plan.subtitle}</span>
          {plan.offer && <span className="offer">{plan.offer}</span>}
        </div>

        <div className="pricing">
          <h3>
            {plan.price} <span>{plan.period}</span>
          </h3>
        </div>

        <ul className="features">
          {plan.features.map((feature, i) => (
            <li key={i}>
              <span className="icon">
                <i
                  className={
                    feature.included
                      ? "icofont-check-circled"
                      : "icofont-close-circled"
                  }
                ></i>
              </span>
              <p>{feature.text}</p>
            </li>
          ))}
        </ul>

        <div className={`btn_block ${plan.highlighted ? "white_btn" : ""}`}>
          <a href="/contact" className="btn puprple_btn ml-0">
            Choose Plan
          </a>
          <div className="btn_bottom"></div>
        </div>
      </div>
    </div>
  );
}

function Pricing() {
  const [activeTab, setActiveTab] = useState("monthly");
  const plans = activeTab === "monthly" ? monthlyPlans : yearlyPlans;

  return (
    <section
      className="row_am pricing_section white_text"
      // data-aos="fade-in"
      // data-aos-duration="1500"
    >
      <div
        className={`pricing_inner ${activeTab === "yearly" ? "year_active" : ""}`}
      >
        <div className="container">
          <div className="dotes_blue">
            <img src="/blue_dotes.png" alt="image" />
          </div>

          <div
            className="section_title"
            data-aos="fade-up"
            data-aos-duration="1500"
            data-aos-delay="300"
          >
            <span className="title_badge">Pricing</span>
            <h2>Choose your plan</h2>
          </div>

          {/* Pricing Table Tabs */}
          <ul
            className="nav nav-tabs"
            role="tablist"
            data-aos="fade-up"
            data-aos-duration="1500"
          >
            <li className="nav-item" role="presentation">
              <button
                className={`nav-link ${activeTab === "monthly" ? "active" : ""}`}
                type="button"
                role="tab"
                aria-selected={activeTab === "monthly"}
                onClick={() => setActiveTab("monthly")}
              >
                Monthly
              </button>
            </li>
            <li className="nav-item" role="presentation">
              <button
                className={`nav-link ${activeTab === "yearly" ? "active" : ""}`}
                type="button"
                role="tab"
                aria-selected={activeTab === "yearly"}
                onClick={() => setActiveTab("yearly")}
              >
                Yearly
              </button>
            </li>
          </ul>

          {/* Tab Content */}
          <div className="tab-content">
            <div className="tab-pane fade show active">
              <div className="pricing_pannel">
                <div className="row">
                  {plans.map((plan) => (
                    <PricingCard plan={plan} key={plan.key} />
                  ))}
                </div>
              </div>
            </div>

            <p
              className="contact_text text-center"
              data-aos="fade-up"
              data-aos-duration="1500"
            >
              Not sure what to choose ? <a href="/contact">contact us</a> for
              custom packages
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Pricing;