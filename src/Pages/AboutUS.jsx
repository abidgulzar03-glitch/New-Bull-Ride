import { useEffect, useRef, useState } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import "./AboutUS.css";

const stats = [
  { value: 150, suffix: "+", label: "Countries" },
  { value: 2300, suffix: "+", label: "Reviews" }, 
  { value: 8, suffix: "M+", label: "Followers" },
  { value: 17, suffix: "M+", label: "Download" },
];
const aboutSlides = [1, 2, 3, 4, 5, 4].map((n) => `/public/abtslide_${n}.png`);
const aboutSlidesLoop = [...aboutSlides, ...aboutSlides];
const values = [
  { icon: "/public/ourvalue_1.png", title: "Skilled Team", text: "Lorem Ipsum is simply dummy text of the printing and typesetting industry lorem Ipsum has." },
  { icon: "/public/ourvalue_2.png", title: "Creative Thinking", text: "Lorem Ipsum is simply dummy text of the printing and typesetting industry lorem Ipsum has." },
  { icon: "/public/ourvalue_3.png", title: "Growth Support", text: "Lorem Ipsum is simply dummy text of the printing and typesetting industry lorem Ipsum has." },
];
const flowWords = [
  "Multiple campaigns", "User friendly", "Advanced analytics",
  "Task management", "Event Scheduler", "Group Video Calls",
  "Live Chat", "Activity Streem",
];

const team = [
  { img: "/team_01.png", name: "Willium Scott", role: "CEO & Managing Director" },
  { img: "/team_02.png", name: "Averill Rack", role: "Team Lead" },
  { img: "/team_03.png", name: "Geo Back", role: "Product Manager" },
];

const clients = ["paypal", "spoty", "shopboat", "slack", "envato", "jquery", "woocommerce", "themeforest"];

const faqs = [
  { q: "How app will useful for my business ?", a: "Lorem Ipsum is simply dummy text of the printing and typesetting industry lorem Ipsum has been the industrys standard dummy text ever since the when an unknown printer." },
  { q: "What support i will get in premium package?", a: "Some placeholder content for the second accordion panel." },
  { q: "Can i get update for free ?", a: "And lastly, the placeholder content for the third and final accordion panel." },
  { q: "How to setup account ?", a: "Some placeholder content for the second accordion panel." },
  { q: "Is there any hidden cost?", a: "Some placeholder content for the second accordion panel." },
  { q: "What is process to get refund ?", a: "And lastly, the placeholder content for the third and final accordion panel." },
];

function useCounters(items) {
  const ref = useRef(null);
  const [counts, setCounts] = useState(items.map(() => 0));
  const [played, setPlayed] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !played) {
          setPlayed(true);
          items.forEach((item, i) => {
            let start = 0;
            const duration = 1800;
            const step = item.value / (duration / 16);
            const timer = setInterval(() => {
              start += step;
              if (start >= item.value) {
                start = item.value;
                clearInterval(timer);
              }
              setCounts((prev) => {
                const arr = [...prev];
                arr[i] = Math.floor(start);
                return arr;
              });
            }, 16);
          });
        }
      },
      { threshold: 0.3 }
    );
    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, [played, items]);

  return { ref, counts };
}

function AboutUS() {
  const { ref: statsRef, counts } = useCounters(stats);
  const [openFaq, setOpenFaq] = useState(0);
  const [videoOpen, setVideoOpen] = useState(false);

  useEffect(() => {
    AOS.init({
      duration: 800,
      easing: "ease-out",
      once: true,
      offset: 80,
    });
  }, []);

  return (
    <div className="about-page">
      {/* About Us Intro */}
      <section className="about_us_section">
        <div className="container">
          <div className="section_title" data-aos="fade-up">
            <span className="title_badge">About us</span>
            <h2>
              We are app agency <br />
              <span>building high level of smart app</span>
            </h2>
            <p>
              Lorem Ipsum is simply dummy text of the printing indus orem Ipsum <br />
              has been the industrys standard dummy text ever since.
            </p>
          </div>
        </div>

        <div className="about_slider row_am" data-aos="fade-up">
          <div className="slider_track">
            {aboutSlidesLoop.map((src, i) => (
              <div className="abt_slides" key={i}>
                <img src={src} alt="" />
              </div>
            ))}
          </div>
        </div>

        <div className="container">
          <div className="row abt_text">
            <div className="col-md-5" data-aos="fade-up">
              <h2>
                <span>Our story</span> behind our success & achievement
              </h2>
            </div>
            <div className="col-md-7" data-aos="fade-up" data-aos-delay="150">
              <p>
                Lorem Ipsum is simply dummy text of the printing and typesetting
                industry lorem Ipsum has been the industrys standard dummy text
                ever since the when an unknown printer took a galley of type and
                scrambled it to make a type specimen book. It has survived not
                only five centuries, but also the leap into electronic
                typesetting, remaining essentially unchanged.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Company Stats */}
      <section className="why_choose white_text" ref={statsRef}>
        <div className="why_choose_inner">
          <div className="container">
            <div className="section_title white_text" data-aos="fade-up">
              <span className="title_badge">Why choose us</span>
              <h2>Company statistics</h2>
            </div>
            <div className="company_statistics">
              <ul className="app_statstic">
                {stats.map((item, i) => (
                  <li key={item.label} data-aos="fade-up" data-aos-delay={i * 100}>
                    <div className="text">
                      <p>
                        <span>{counts[i]}</span>
                        <span>{item.suffix}</span>
                      </p>
                      <p>{item.label}</p>
                    </div>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Our Values */}
      <section className="our_value_section row_am">
        <div className="container">
          <div className="section_title" data-aos="fade-up">
            <span className="title_badge">Our values</span>
            <h2>
              <span>Our values</span> driven by relations
            </h2>
          </div>
          <div className="value_slider value_grid">
            {values.map((v, i) => (
              <div className="value_block" key={v.title} data-aos="fade-up" data-aos-delay={i * 100}>
                <div className="icon">
                  <img src={v.icon} alt="" />
                </div>
                <div className="text">
                  <h3>{v.title}</h3>
                  <p>{v.text}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Text List Flow */}
      <div className="text_list_section row_am">
        <div className="container">
          <span className="title_badge down_fix" data-aos="fade-up">Why choose our app</span>
        </div>
        <div className="slider_block">
          <div className="flow_track">
            {[...flowWords, ...flowWords].map((word, i) => (
              <div className="text_block" key={i}>
                <span>{word}</span>
                <span className="mark_star">•</span>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Service / Process */}
      <section className="row_am service_section about_service">
        <div className="container">
          <div className="row service_blocks">
            <div className="col-md-6" data-aos="fade-up">
              <div className="service_text">
                <div className="service_badge">
                  <i className="icofont-gear"></i>
                  <span>Process</span>
                </div>
                <h2>
                  <span>Overviews</span> how we develope lorem
                </h2>
                <p>
                  Lorem Ipsum is simply dummy text of the printing and typtting
                  industry lorem Ipsum has been the industrys standard dummy
                  text ever since.
                </p>
                <ul className="feature_list">
                  {[
                    "Lorem Ipsum is simply dummy text",
                    "The printing and typesetting industry lorem",
                    "Has been the industrys dummy",
                    "Text ever since the when an unknown",
                  ].map((t) => (
                    <li key={t}>
                      <div className="icon">
                        <span><i className="icofont-check-circled"></i></span>
                      </div>
                      <div className="text"><p>{t}</p></div>
                    </li>
                  ))}
                </ul>
                <div className="btn_block">
                  <a href="/contact" className="btn puprple_btn ml-0">Start Free Trial</a>
                  <div className="btn_bottom"></div>
                </div>
              </div>
            </div>
            <div className="col-md-6" data-aos="fade-up" data-aos-delay="150">
              <div className="img video_player">
                <img src="/process.png" alt="" />
                <button className="play-button play_icon" onClick={() => setVideoOpen(true)}>
                  <img src="/play_white.svg" alt="Play" />
                </button>
              </div>
            </div>
          </div>

          <div className="row service_blocks flex-row-reverse">
            <div className="col-md-6" data-aos="fade-up">
              <div className="service_text right_side">
                <div className="service_badge">
                  <i className="icofont-ui-messaging"></i>
                  <span>Comunication</span>
                </div>
                <h2><span>Client comunication</span> for best results</h2>
                <p>
                  Lorem Ipsum is simply dummy text of the printing and
                  typesetting industry lorem Ipsum has been the industrys
                  standard dummy.
                </p>
                <ul className="feature_list">
                  {[
                    "Lorem Ipsum is simply dummy text",
                    "The printing and typesetting industry lorem",
                    "Has been the industrys dummy",
                  ].map((t) => (
                    <li key={t}>
                      <div className="icon">
                        <span><i className="icofont-check-circled"></i></span>
                      </div>
                      <div className="text"><p>{t}</p></div>
                    </li>
                  ))}
                </ul>
                <div className="btn_block">
                  <a href="/contact" className="btn puprple_btn ml-0">Start Free Trial</a>
                  <div className="btn_bottom"></div>
                </div>
              </div>
            </div>
            <div className="col-md-6" data-aos="fade-up" data-aos-delay="150">
              <div className="img">
                <img src="/communication.png" alt="" />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Video Modal */}
      {videoOpen && (
        <div className="video_modal" onClick={() => setVideoOpen(false)}>
          <button className="close_video" onClick={() => setVideoOpen(false)}>
            <i className="icofont-close-line-circled"></i>
          </button>
          <div className="video_container" onClick={(e) => e.stopPropagation()}>
            <iframe
              title="About video"
              src="https://www.youtube.com"
              allowFullScreen
            ></iframe>
          </div>
        </div>
      )}

      {/* Testimonial */}
      <section className="testimonial_section white_text">
        <div className="title" data-aos="fade-up">
          <div className="star">
            {Array.from({ length: 5 }).map((_, i) => (
              <span key={i}><i className="icofont-star"></i></span>
            ))}
          </div>
          <span className="sub_title">4.9 / 5.0 Rated on App store</span>
        </div>
        <div className="testimonial_inner">
          <div className="container">
            <div className="testimonial_box" data-aos="fade-up">
              <div className="testi_img">
                <img className="user_img" src="/testimonial_01.png" alt="" />
                <button className="play-button play_icon" onClick={() => setVideoOpen(true)}>
                  <img src="/play_white.svg" alt="Play" />
                </button>
              </div>
              <div className="testi_text">
                <div className="star">
                  {Array.from({ length: 5 }).map((_, i) => (
                    <span key={i}><i className="icofont-star"></i></span>
                  ))}
                </div>
                <p>
                  Lorem Ipsum is simply dummy text of the printing and
                  typesetting industry lorem Ipsum has been the standard dummy.
                </p>
                <div className="user_info">
                  <h3>Willium Joy,</h3>
                  <span>Smartbrain Tech</span>
                </div>
              </div>
            </div>

            <div className="client_logo_slider" data-aos="fade-up">
              <div className="client_track">
                {clients.map((c) => (
                  <div className="img" key={c}>
                    <img src={`public/${c}.png`} alt={c} />
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Team */}
      <section className="row_am experts_team_section">
        <div className="container">
          <div className="section_title" data-aos="fade-up">
            <span className="title_badge">Experts</span>
            <h2>Meet <span>our team</span></h2>
          </div>
          <div className="row">
            {team.map((member, i) => (
              <div className="col-md-4" key={member.name} data-aos="fade-up" data-aos-delay={i * 100}>
                <div className="experts_box">
                  <img src={member.img} alt={member.name} />
                  <div className="text">
                    <h3>{member.name}</h3>
                    <span>{member.role}</span>
                    <ul className="social_media">
                      <li><a href="#"><i className="icofont-facebook"></i></a></li>
                      <li><a href="#"><i className="icofont-twitter"></i></a></li>
                      <li><a href="#"><i className="icofont-instagram"></i></a></li>
                    </ul>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="row_am faq_section">
        <div className="container">
          <div className="section_title" data-aos="fade-up">
            <span className="title_badge">Question & Answer</span>
            <h2><span>FAQs</span> - Frequently Asked Questions</h2>
          </div>
          <div className="accordion">
            <div className="row">
              {faqs.map((faq, i) => (
                <div className="col-md-6" key={faq.q} data-aos="fade-up" data-aos-delay={(i % 2) * 100}>
                  <div className="card">
                    <div className="card-header">
                      <button
                        className={`accordion-btn ${openFaq === i ? "" : "collapsed"}`}
                        onClick={() => setOpenFaq(openFaq === i ? null : i)}
                      >
                        {faq.q}
                        <span className="icons">
                          <i className={openFaq === i ? "icofont-minus" : "icofont-plus"}></i>
                        </span>
                      </button>
                    </div>
                    {openFaq === i && (
                      <div className="card-body">{faq.a}</div>
                    )}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Download App */}
      <section className="row_am download_app">
        <div className="task_block">
          <div className="row">
            <div className="col-md-6" data-aos="fade-up">
              <div className="task_text">
                <div className="section_title white_text">
                  <span className="title_badge">Download</span>
                  <h2>Our app is available for Android & iOS</h2>
                  <p>Lorem Ipsum is simply dummy text of the printing indus orem Ipsum has been the industrys.</p>
                </div>
                <ul className="app_btn">
                  <li><a href="#"><img className="blue_img" src="/googleplay.png" alt="" /></a></li>
                  <li><a href="#"><img className="blue_img" src="/appstorebtn.png" alt="" /></a></li>
                </ul>
              </div>
            </div>
            <div className="col-md-6" data-aos="fade-up" data-aos-delay="180">
              <div className="task_img">
                <div className="frame_img">
                  <img src="/our_app.png" alt="" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default AboutUS;