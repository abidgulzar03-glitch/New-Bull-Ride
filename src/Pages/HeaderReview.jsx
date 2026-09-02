import "../Pages/HdrReview.css";

const reviews = [
  {
    name: "Willium Joy",
    company: "Smartbrain Tech",
    image: "/review1.png",
    text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Sapiente culpa, dolores ullam laudantium deleniti ipsa qui saepe voluptatum nam pariatur.",
  },
  {
    name: "John Due",
    company: "Corporate Agency",
    image: "/review2..png",
    text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Pariatur et, nemo distinctio eum omnis quam!",
  },
  {
    name: "Maria",
    company: "Company Inc",
    image: "/review3..png",
    text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Sapiente culpa, dolores ullam laudantium deleniti ipsa qui saepe voluptatum nam pariatur.",
  },
];

export default function HdrReview() {
  return (
    <div className="hdr_review_page">
      {/* Review Banner */}
      <section className="hdr_review_section hdr_row_am hdr_page_ban">
        <div className="hdr_container">
          <div className="hdr_section_title" data-aos="fade-up">
            <span className="hdr_title_badge">Reviews</span>

            <h2>
              Words from <span>trusted peoples</span>
            </h2>

            <p>
              Lorem Ipsum is simply dummy text of the printing industry.
              <br />
              Lorem Ipsum has been the industry's standard dummy text ever since.
            </p>

            <div className="hdr_google_rating">
              <div className="hdr_star">
                {[...Array(5)].map((_, i) => (
                  <i key={i} className="icofont-star" />
                ))}
              </div>

              <p>
                <strong>4.9 / 5.0</strong> Rated on App Store |
                <a href="#" className="hdr_rate_link">
                  1399 Total user reviews
                  <i className="icofont-arrow-right" />
                </a>
              </p>
            </div>
          </div>

          <div className="hdr_positive_inner">
            <div className="hdr_innerpage_block">
              {Array.from({ length: 3 }).flatMap((_, group) =>
                reviews.map((item, i) => (
                  <div
                    className="hdr_review_block"
                    key={`${group}-${i}`}
                    data-aos="fade-up"
                  >
                    <div className="hdr_coustomer_info">
                      <div className="hdr_avtar">
                        <img src={item.image} alt={item.name} />
                        <div className="hdr_text">
                          <h3>{item.name}</h3>
                          <span>{item.company}</span>
                        </div>
                      </div>

                      <div className="hdr_star">
                        {[...Array(5)].map((_, index) => (
                          <i key={index} className="icofont-star" />
                        ))}
                      </div>
                    </div>

                    <p>{item.text}</p>
                  </div>
                ))
              )}
            </div>
          </div>
        </div>
      </section>

      {/* Download Section */}
      <section className="hdr_download_app">
        <div className="hdr_task_block" data-aos="fade-up">
          <div className="hdr_dotes_blue">
            <img src="/blue_dotes.png" alt="" />
          </div>

          <div className="hdr_download_row">
            <div className="hdr_task_text" data-aos="fade-right">
              <div className="hdr_white_text">
                <span className="hdr_title_badge">Download</span>

                <h2>Our app is available for Android & iOS</h2>

                <p>
                  Lorem Ipsum is simply dummy text of the printing industry.
                  Lorem Ipsum has been the industry's standard dummy text.
                </p>
              </div>

              <ul className="hdr_app_btn">
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

            <div className="hdr_task_img" data-aos="fade-left">
              <div className="hdr_frame_img">
                <img src="/our_app.png" alt="App" />
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}