import "../Style/Review.css";

const reviews = [
  {
    avatar: "/review1.png",
    name: "Willium Joy",
    company: "Smartbrain Tech",
    text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Sapiente culpa, dolores ullam laudantium deleniti ipsa qui saepe voluptatum nam pariatur? Lorem ipsum dolor sit amet consectetur adipisicing elit. Neque, totam.",
  },
  {
    avatar: "/review2..png",
    name: "John Due",
    company: "Corporate Agency",
    text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Sapiente culpa, dolores ullam laudantium deleniti ipsa qui saepe voluptatum nam pariatur? Lorem ipsum dolor sit amet consectetur adipisicing elit. Pariatur et, nemo distinctio eum omnis quam!",
  },
  {
    avatar: "/review3..png",
    name: "Maria",
    company: "Company Inc",
    text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Sapiente culpa, dolores ullam laudantium deleniti ipsa qui saepe voluptatum nam pariatur? Lorem ipsum dolor sit amet consectetur adipisicing elit. Pariatur et, nemo distinctio eum omnis quam!",
  },
];

function Stars() {
  return (
    <div className="star">
      {Array.from({ length: 5 }).map((_, i) => (
        <span key={i}>
          <i className="icofont-star"></i>
        </span>
      ))}
    </div>
  );
}

function Review() {
  return (
    <section className="review_section row_am">
      <div className="container">
        <div className="positive_inner">
          <div className="row">
            <div className="col-md-6 sticky-top">
              <div
                className="sidebar_text"
                data-aos="fade-up"
                data-aos-duration="1500"
              >
                <div className="section_title text-left">
                  <span className="title_badge">Reviews</span>
                  <h2>
                    <span>Positive reviews </span> <br />
                    of our clients
                  </h2>
                </div>

                <div className="google_rating">
                  <Stars />
                  <p>
                    4.5/5.0 Rated on{" "}
                    <img className="img-fluid" src="/google.png" alt="image" />
                  </p>
                </div>

                <div className="user_review">
                  <p>
                    1399{" "}
                    <a href="#">
                      Total user reviews <i className="icofont-arrow-right"></i>
                    </a>
                  </p>
                </div>

                <div className="smiley_icon">
                  <img src="/smily.png" alt="image" />
                </div>
              </div>
            </div>

            <div className="col-md-6">
              <div className="review_side">
                {reviews.map((review, index) => (
                  <div
                    className="review_block"
                    key={index}
                    data-aos="fade-up"
                    data-aos-duration="1500"
                  >
                    <div className="coustomer_info">
                      <div className="avtar">
                        <img src={review.avatar} alt="image" />
                        <div className="text">
                          <h3>{review.name}</h3>
                          <span>{review.company}</span>
                        </div>
                      </div>
                      <Stars />
                    </div>
                    <p>{review.text}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Review;
