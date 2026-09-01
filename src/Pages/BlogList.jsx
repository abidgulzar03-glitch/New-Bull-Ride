
import { Link } from "react-router-dom";
import "../Pages/BlogList.css";


const blogPosts = [
  {
    id: 1,
    image: "/blog1.png",
    tag: "Mobile app",
    title: "Effective ways to monetize mobile apps for better perfomance",
    date: "May 12, 2023",
    comments: "5 Comments",
    views: "750 Views",
    authorImg: "/authore_01.png",
    authorName: "Willium Joy",
    authorRole: "Copy editor",
  },
  {
    id: 2,
    image: "/blog2.png",
    tag: "User experience",
    title: "Why you our app, top 5 reason to choose our app",
    date: "May 12, 2023",
    comments: "5 Comments",
    views: "520 Views",
    authorImg: "/authore_02.png",
    authorName: "Philip Jose",
    authorRole: "Tech manager",
  },
  {
    id: 3,
    image: "/blog_list3.png",
    tag: "Mobile app",
    title: "How to use mobile application with best performance lorem...",
    date: "May 12, 2023",
    comments: "5 Comments",
    views: "333 Views",
    authorImg: "/authore_01.png",
    authorName: "Willium Joy",
    authorRole: "Copy editor",
  },
  {
    id: 4,
    image: "/blog_list4.png",
    tag: "User experience",
    title: "Why you our app, top 5 reason to choose our app",
    date: "May 12, 2023",
    comments: "5 Comments",
    views: "421 Views",
    authorImg: "/authore_02.png",
    authorName: "Philip Jose",
    authorRole: "Tech manager",
  },
  {
    id: 5,
    image: "/blog1.png",
    tag: "Mobile app",
    title: "Effective ways to monetize mobile apps for better perfomance",
    date: "May 12, 2023",
    comments: "5 Comments",
    views: "750 Views",
    authorImg: "/authore_01.png",
    authorName: "Philip Jose",
    authorRole: "Tech manager",
  },
  {
    id: 6,
    image: "/blog2.png",
    tag: "User experience",
    title: "Why you our app, top 5 reason to choose our app",
    date: "May 12, 2023",
    comments: "5 Comments",
    views: "520 Views",
    authorImg: "/authore_02.png",
    authorName: "Philip Jose",
    authorRole: "Tech manager",
  },
];

const filterTags = ["All", "Mobile app", "Android", "iOS", "Trending Tech"];

const BlogList = () => {
  return (
    <div className="page_wrapper">
      {/* Our Resource Section Start */}
  <section className="our_resource">
      <div className="container">
        <div className="resource_wrapper">

          <div className="resource_left" data-aos="fade-right">
            <span className="title_badge">Our Resources</span>

            <h2>
              Latest <span>blog post</span>
            </h2>

            <p>
              Lorem Ipsum is simply dummy text of the printing industry.
              Lorem Ipsum has been the industry's standard text ever since.
            </p>
          </div>

          <div className="resource_right" data-aos="fade-left">
            <div className="mail_block">

              <div className="dots_bg">
                <img src="/blue_dotes.png" alt="" />
              </div>

              <div className="mail_content">
                <img
                  src="/email_icon.png"
                  alt="email"
                  className="mail_icon"
                />

                <h3>Join our mailing list</h3>

                <p className="sub_text">
                  Be the first to receive all latest post in your inbox
                </p>

                <form>
                  <div className="input_box">
                    <input
                      type="email"
                      placeholder="Enter your email"
                    />

                    <button type="submit">
                      <i className="icofont-paper-plane"></i>
                    </button>
                  </div>
                </form>

                <p className="note">
                  By clicking send link you agree to receive message.
                </p>

              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
      {/* Our Resource Section End */}

      {/* Recent Articles Section Start */}
      <section className="articles_section row_am">
        <div className="container">
          <div className="section_title" data-aos="fade-up" data-aos-duration="1500">
            <h2>
              Recent <span>articles</span>
            </h2>
          </div>

          <ul className="filter_tags" data-aos="fade-up" data-aos-duration="1500">
            {filterTags.map((tag, index) => (
              <li key={tag}>
                <a href="#" className={index === 0 ? "active" : ""}>
                  {tag}
                </a>
              </li>
            ))}
          </ul>

          <div className="blog_listings">
            {blogPosts.map((post) => (
              <div
                className="listing_block"
                key={post.id}
                data-aos="fade-up"
                data-aos-duration="1500"
              >
                <Link to={`/blog/${post.id}`} className="img">
                  <img src={post.image} alt="image" />
                </Link>
                <div className="blog_text">
                  <span className="tag">{post.tag}</span>
                  <h2>
                    <Link to={`/blog/${post.id}`}>{post.title}</Link>
                  </h2>
                  <Link to={`/blog/${post.id}`}>
                    Read more <i className="icofont-arrow-right"></i>
                  </Link>
                </div>
                <div className="authore_info">
                  <ul className="blog_info">
                    <li>{post.date}</li>
                    <li>{post.comments}</li>
                    <li>{post.views}</li>
                  </ul>
                  <div className="avtar">
                    <img src={post.authorImg} alt="image" />
                    <div className="text">
                      <h3>{post.authorName}</h3>
                      <span>{post.authorRole}</span>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Pagination */}
          <div className="pagination_block" data-aos="fade-in" data-aos-duration="1500">
            <ul>
              <li>
                <a href="#" className="prev">
                  <i className="icofont-arrow-left"></i> Prev
                </a>
              </li>
              <li>
                <a href="#">1</a>
              </li>
              <li>
                <a href="#" className="active">
                  2
                </a>
              </li>
              <li>
                <a href="#">3</a>
              </li>
              <li>
                <a href="#">4</a>
              </li>
              <li>
                <a href="#">5</a>
              </li>
              <li>
                <a href="#">6</a>
              </li>
              <li>
                <a href="#" className="next">
                  Next <i className="icofont-arrow-right"></i>
                </a>
              </li>
            </ul>
          </div>
        </div>
      </section>
      {/* Recent Articles Section End */}
    </div>
  );
};

export default BlogList;