import "../Pages/BlogDetail.css";

export default function BlogDetail() {
  return (
    <>
      {/* Blog Detail */}
      <section className="blog_detail_section">
        <div className="container container-sm">
          {/* Header */}
          <div
            className="blog_head"
            data-aos="fade-up"
            data-aos-duration="1200"
          >
            <div className="tags_info">
              <span className="tag">Mobile app</span>

              <ul className="blog_info">
                <li>May 12, 2023</li>
                <li>5 Comments</li>
                <li>750 Views</li>
              </ul>
            </div>

            <h1>Effective ways to monetize app for better performance.</h1>

            <div className="avtar">
              <img src="/authore_01.png" alt="" />
              <div className="text">
                <h3>William Joy</h3>
                <span>Copy editor</span>
              </div>
            </div>
          </div>

          <div className="blog_body">
            <div
              className="img"
              data-aos="fade-up"
              data-aos-duration="1200"
            >
              <img src="/blog_single_01.png" alt="" />
            </div>

            <p data-aos="fade-up" data-aos-duration="1200">
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry. Lorem Ipsum has been the industry's standard dummy text
              ever since the 1500s when an unknown printer took a galley of type
              and scrambled it to make a type specimen book.
            </p>

            <ul
              className="listings"
              data-aos="fade-right"
              data-aos-duration="1200"
            >
              <li>
                <i className="icofont-check-circled"></i>
                Lorem Ipsum is simply dummy text
              </li>
              <li>
                <i className="icofont-check-circled"></i>
                The printing and typesetting industry
              </li>
              <li>
                <i className="icofont-check-circled"></i>
                Has been the industry's dummy
              </li>
              <li>
                <i className="icofont-check-circled"></i>
                Text ever since the when an unknown
              </li>
            </ul>

            <h2 data-aos="fade-up" data-aos-duration="1200">
              Article sub title goes here
            </h2>

            <p data-aos="fade-up" data-aos-duration="1200">
              Typesetting industry. Lorem Ipsum has been the industry's standard
              dummy text ever since the when an unknown printer took a galley of
              type and scrambled. Survived not only five centuries, but also the
              leap into electronic typesetting.
            </p>

            <div
              className="yt_video"
              data-aos="fade-up"
              data-aos-duration="1200"
            >
              <iframe
                src="https://www.youtube.com/embed/tgbNymZ7vqY?mute=1"
                title="YouTube"
                allowFullScreen
              ></iframe>
            </div>

            <p data-aos="fade-up" data-aos-duration="1200">
              Lorem Ipsum has been the industry's standard dummy text ever since
              the when an unknown printer took a galley of type and scrambled.
              Survived not only five centuries, but also the leap into electronic
              typesetting.
            </p>

            <div
              className="highlight_text"
              data-aos="fade-right"
              data-aos-duration="1200"
            >
              <h3>
                “Lorem Ipsum has been the industry's standard dummy text ever
                since when an unknown printer took a galley of type and
                scrambled.”
              </h3>
            </div>

            <p data-aos="fade-up" data-aos-duration="1200">
              Standard dummy text ever since the when an unknown printer took a
              galley of type and scrambled. Survived not only five centuries,
              but also the leap into electronic typesetting, remaining
              essentially unchanged.
            </p>

            <p data-aos="fade-up" data-aos-duration="1200">
              It was popularised in the 1960s with the release of Letraset
              sheets containing Lorem Ipsum passages, and more recently with
              software like Aldus PageMaker sheets containing Lorem Ipsum
              passages.
            </p>

            <ul
              className="social_media"
              data-aos="fade-up"
              data-aos-duration="1200"
            >
              <li>
                <a href="#">
                  <i className="icofont-facebook"></i>
                </a>
              </li>
              <li>
                <a href="#">
                  <i className="icofont-twitter"></i>
                </a>
              </li>
              <li>
                <a href="#">
                  <i className="icofont-instagram"></i>
                </a>
              </li>
              <li>
                <a href="#">
                  <i className="icofont-pinterest"></i>
                </a>
              </li>
            </ul>
          </div>
        </div>
      </section>

      {/* Comments */}
      <section className="comment_section">
        <div className="container container-sm">
          <div
            className="section_title"
            data-aos="fade-up"
            data-aos-duration="1200"
          >
            <h2>5 Comments</h2>
          </div>

          <ul className="comments_list">
            <li data-aos="fade-right" data-aos-duration="1000">
              <div className="authore_info">
                <div className="avtar">
                  <img src="/authore_01.png" alt="" />
                </div>
                <div className="text">
                  <span>1 day ago</span>
                  <h4>Thomas</h4>
                </div>
              </div>
              <div className="comment">
                <p>
                  Lorem Ipsum has been the industry's standard dummy text ever
                  since the when an unknown printer took a galley of type and
                  scrambled.
                </p>
              </div>
            </li>

            <li
              className="replay_comment"
              data-aos="fade-right"
              data-aos-duration="1200"
            >
              <div className="authore_info">
                <div className="avtar">
                  <img src="/authore_02.png" alt="" />
                </div>
                <div className="text">
                  <span>1 day ago</span>
                  <h4>Shaily</h4>
                </div>
              </div>
              <div className="comment">
                <p>
                  Industry's standard dummy text ever since the when an unknown
                  printer took.
                </p>
              </div>
            </li>

            <li data-aos="fade-right" data-aos-duration="1400">
              <div className="authore_info">
                <div className="avtar">
                  <img src="/blog_d03.png" alt="" />
                </div>
                <div className="text">
                  <span>2 days ago</span>
                  <h4>William Joe</h4>
                </div>
              </div>
              <div className="comment">
                <p>
                  Has been the industry's standard dummy text ever since the
                  when an unknown printer took a galley of type and scrambled.
                </p>
              </div>
            </li>
          </ul>
        </div>
      </section>

      {/* Leave Comment */}
      <section className="comment_form_section">
        <div className="container container-sm">
          <div
            className="section_title"
            data-aos="fade-up"
            data-aos-duration="1200"
          >
            <h2>Leave a comment</h2>
            <p>
              Your email address will not be published. Required fields are
              marked *
            </p>
          </div>

          <form data-aos="fade-up" data-aos-duration="1400">
            <div className="row">
              <div className="col-md-6">
                <div className="form-group">
                  <input
                    type="text"
                    className="form-control"
                    placeholder="Name *"
                  />
                </div>
              </div>

              <div className="col-md-6">
                <div className="form-group">
                  <input
                    type="email"
                    className="form-control"
                    placeholder="Email *"
                  />
                </div>
              </div>

              <div className="col-md-6">
                <div className="form-group">
                  <input
                    type="text"
                    className="form-control"
                    placeholder="Phone"
                  />
                </div>
              </div>

              <div className="col-md-6">
                <div className="form-group">
                  <input
                    type="text"
                    className="form-control"
                    placeholder="Website"
                  />
                </div>
              </div>

              <div className="col-12">
                <div className="form-group">
                  <textarea
                    rows="5"
                    className="form-control"
                    placeholder="Comments"
                  ></textarea>
                </div>
              </div>
            </div>

            <div className="text-end">
              <button type="submit" className="submit_btn">
                Submit
              </button>
            </div>
          </form>
        </div>
      </section>
    </>
  );
}