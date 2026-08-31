import "../Style/Blog.css";

const blogPosts = [
  {
    id: 1,
    image: "/blog1.png",
    date: "May 12, 2023",
    category: "Mobile app",
    comments: "5 Comments",
    title: "Effective ways to monetize mobile apps for better performance",
    tag: "Mobile app",
  },
  {
    id: 2,
    image: "/blog2.png",
    date: "May 12, 2023",
    category: "Mobile app",
    comments: "5 Comments",
    title: "Why you our app, top 5 reason to choose our app",
    tag: "User experience",
  },
];

function Blog() {
  return (
    <section className="blog_section row_am">
      <div className="container">
        {/* Section Title */}
        <div
          className="section_title"
          data-aos="fade-up"
          data-aos-duration="1500"
        >
          <span className="title_badge">Latest updates</span>

          <h2>
            Our latest <span>blog post</span>
          </h2>
        </div>

        {/* Blog Posts */}
        <div className="blog_listing">
          {blogPosts.map((post) => (
            <div
              className="blog_post"
              key={post.id}
              data-aos="fade-up"
              data-aos-duration="1500"
            >
              {/* Blog Image */}
              <a href="#" className="img">
                <img src={post.image} alt={post.title} />
              </a>

              <div className="text">
                {/* Blog Information */}
                <ul className="blog_info">
                  <li>{post.date}</li>
                  <li>{post.category}</li>
                  <li>{post.comments}</li>
                </ul>

                {/* Blog Title */}
                <h3>
                  <a href="#">{post.title}</a>
                </h3>

                {/* Tag + Read More */}
                <div className="tag_more">
                  <span className="tag">{post.tag}</span>

                  <a href="#">
                    Read more
                    <i className="icofont-arrow-right"></i>
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Blog;
