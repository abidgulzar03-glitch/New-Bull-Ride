import "../Style/Service.css";

const textFlow = [
  "Multiple campaigns",
  "User friendly",
  "Advanced analytics",
  "Task management",
  "Event Scheduler",
  "Group Video Calls",
  "Live Chat",
  "Activity Stream",
];

const services = [
  {
    badge: "📋 Task Manage",
    titleRed: "Task creation",
    titleBlack: "& manage lorem ipsum dollar",
    image: "/service1.png",
    reverse: false,
    desc: "Lorem Ipsum is simply dummy text of the printing and typesetting industry  Lorem Ipsum is simply dummy text of the printing and typesetting industry  Lorem Ipsum is simply ",
    list: [
      {
        title: "Automate all task",
        text: "Lorem Ipsum is simply dummy text. lorem Ipsum is simply dummy text ting and typesetti.",
      },
      {
        title: "Get notify lorem",
        text: "Dummy text of the printing industry  Lorem Ipsum is simply.Dummy text of the printing.",
      },
    ],
  },
  {
    badge: "🕛️ Schedule Meeting",
    titleRed: "Manage project",
    titleBlack: "and track lorem",
    image: "/service2.png",
    reverse: true,
    desc: "Lorem Ipsum is simply dummy text of the printing and typesetting industry.",
    feature: [
      "Lorem Ipsum is simply dummy text",
      "The printing and typesetting industry",
      "Has been the industry's dummy",
    ],
  },
  {
    badge: "📝 History",
    titleRed: "Task creation",
    titleBlack: "& manage lorem ipsum dollar",
    image: "/service3.png",
    reverse: false,
    desc: "Lorem Ipsum is simply dummy text of the printing and typesetting industry.",
    feature: [
      "Lorem Ipsum is simply dummy text",
      "The printing and typesetting industry",
      "Has been the industry's dummy",
    ],
  },
];

function Service() {
  return (
    <>
      {/* Text Flow */}
      <section className="text_list_section">
        <div className="container">
          <span
            className="title_badge down_fix"
            data-aos="fade-up"
            data-aos-duration="1200"
          >
            Why choose our app
          </span>
        </div>

        <div className="slider_block">
          <div className="text_slider">
            {[...textFlow, ...textFlow].map((item, i) => (
              <div className="text_block" key={i}>
                <span>{item}</span>
                <span className="mark_star">•</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Services */}
      <section className="service_section">
        <div className="container">
          <div className="section_title">
            <span
              className="title_badge"
              data-aos="fade-up"
              data-aos-duration="1200"
            >
              Services
            </span>
            <h2 data-aos="fade-up" data-aos-duration="1200">
              Premium <span>services</span> of <br />
              our application
            </h2>
          </div>

          {services.map((service, index) => (
            <div
              className={`service_blocks ${service.reverse ? "reverse" : ""}`}
              key={index}
            >
              <div
                className="service_text"
                data-aos={service.reverse ? "fade-left" : "fade-right"}
                data-aos-duration="1200"
              >
                <div className="service_badge">{service.badge}</div>

                <h2>
                  <span>{service.titleRed}</span> {service.titleBlack}
                </h2>

                <p>{service.desc}</p>

                {service.list && (
                  <ul className="listing_block">
                    {service.list.map((item, i) => (
                      <li key={i}>
                        <div className="icon">✓</div>
                        <div className="text">
                          <h3>{item.title}</h3>
                          <p>{item.text}</p>
                        </div>
                      </li>
                    ))}
                  </ul>
                )}

                {service.feature && (
                  <ul className="feature_list">
                    {service.feature.map((item, i) => (
                      <li key={i}>
                        <span>✓</span>
                        <p>{item}</p>
                      </li>
                    ))}
                  </ul>
                )}

                <div className="btn_block">
                  <a href="/contact" className="trial_btn">
                    Start Free Trial
                  </a>
                  <div className="btn_bottom"></div>
                </div>
              </div>

              <div
                className="service_img"
                data-aos={service.reverse ? "fade-up" : "fade-up"}
                data-aos-duration="1200"
              >
                <img src={service.image} alt="" />
              </div>
            </div>
          ))}
        </div>
      </section>
    </>
  );
}

export default Service;