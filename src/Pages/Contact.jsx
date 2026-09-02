import { useState } from "react";
import "../Pages/Contact.css";

export default function Contact() {
  const [form, setForm] = useState({
    name: "",
    email: "",
    company: "",
    country: "",
    phone: "",
    website: "",
    comments: "",
    agree: false,
  });

  const [errors, setErrors] = useState({});

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;

    setForm({
      ...form,
      [name]: type === "checkbox" ? checked : value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const newErrors = {};

    if (!form.name.trim()) newErrors.name = "Name is required";

    if (!form.email.trim()) {
      newErrors.email = "Email is required";
    } else if (!/^[^ ]+@[^ ]+\.[a-z]{2,}$/i.test(form.email)) {
      newErrors.email = "Enter a valid email";
    }

    if (!form.country) newErrors.country = "Select country";

    if (!form.phone.trim()) {
      newErrors.phone = "Phone is required";
    } else if (!/^[0-9]{10}$/.test(form.phone)) {
      newErrors.phone = "Enter 10 digit phone number";
    }

    if (!form.comments.trim())
      newErrors.comments = "Comments are required";

    if (!form.agree) newErrors.agree = "Please accept the checkbox";

    setErrors(newErrors);

    if (Object.keys(newErrors).length === 0) {
      alert("Form submitted successfully!");

      setForm({
        name: "",
        email: "",
        company: "",
        country: "",
        phone: "",
        website: "",
        comments: "",
        agree: false,
      });

      setErrors({});
    }
  };

  return (
    <div className="page_wrapper">
      {/* Contact Us */}
      <section className="contact_section">
        <div className="container">
          <div className="section_title" data-aos="fade-up">
            <span className="title_badge">Contact us</span>

            <h2>
              Any query? <span>let's talk</span>
            </h2>

            <p>
              Lorem Ipsum is simply dummy text of the printing industry.
              <br />
              Lorem Ipsum has been the industry's standard dummy text ever since.
            </p>
          </div>

          <ul className="contact_listing">
            <li>
              <span className="icon">
                <img src="/mail_icon.png" alt="" />
              </span>
              <span className="lable">Email us</span>
              <a href="mailto:example@gmail.com">example@gmail.com</a>
            </li>

            <li>
              <span className="icon">
                <img src="/phone_icon.png" alt="" />
              </span>
              <span className="lable">Call us</span>
              <a href="tel:+11234567890">+1 123 456 7890</a>
            </li>

            <li>
              <span className="icon">
                <img src="/location_icon.png" alt="" />
              </span>
              <span className="lable">Our location</span>
              <a
                href="https://www.google.com/maps"
                target="_blank"
                rel="noreferrer"
              >
                Open Google Maps
              </a>
            </li>
          </ul>
        </div>
      </section>

      {/* Contact Form */}
      <section className="contact_form">
        <div className="contact_inner">
          <div className="red_glow"></div>

          <div className="container">
            <div className="section_title">
              <span className="title_badge">Message us</span>
              <h2>Drop a message us</h2>
              <p>Fill up form below, our team will get back soon</p>
            </div>

            <form onSubmit={handleSubmit}>
              <div className="form_grid">
                <div>
                  <input
                    type="text"
                    name="name"
                    placeholder="Name *"
                    value={form.name}
                    onChange={handleChange}
                  />
                  {errors.name && <p className="error">{errors.name}</p>}
                </div>

                <div>
                  <input
                    type="email"
                    name="email"
                    placeholder="Email *"
                    value={form.email}
                    onChange={handleChange}
                  />
                  {errors.email && <p className="error">{errors.email}</p>}
                </div>

                <div>
                  <input
                    type="text"
                    name="company"
                    placeholder="Company Name"
                    value={form.company}
                    onChange={handleChange}
                  />
                </div>

                <div>
                  <select
                    name="country"
                    value={form.country}
                    onChange={handleChange}
                  >
                    <option value="">Country</option>
                    <option value="India">India</option>
                    <option value="USA">USA</option>
                  </select>
                  {errors.country && (
                    <p className="error">{errors.country}</p>
                  )}
                </div>

                <div>
                  <input
                    type="text"
                    name="phone"
                    placeholder="Phone"
                    value={form.phone}
                    onChange={handleChange}
                  />
                  {errors.phone && <p className="error">{errors.phone}</p>}
                </div>

                <div>
                  <input
                    type="text"
                    name="website"
                    placeholder="Website"
                    value={form.website}
                    onChange={handleChange}
                  />
                </div>
              </div>

              <div className="textarea_box">
                <textarea
                  name="comments"
                  rows="5"
                  placeholder="Comments"
                  value={form.comments}
                  onChange={handleChange}
                />
                {errors.comments && (
                  <p className="error">{errors.comments}</p>
                )}
              </div>

              <div className="form_bottom">
                <div>
                  <label className="check_box">
                    <input
                      type="checkbox"
                      name="agree"
                      checked={form.agree}
                      onChange={handleChange}
                    />
                    <span></span>
                    I agree to receive emails, newsletters and promotional
                    messages
                  </label>
                  {errors.agree && (
                    <p className="error">{errors.agree}</p>
                  )}
                </div>

                <button type="submit" className="submit_btn">
                  Submit
                </button>
              </div>
            </form>
          </div>
        </div>
      </section>

      {/* Google Map */}
      <div className="map_block">
        <div className="container">
          <iframe
            title="Google Map"
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d103190.9858395081!2d-115.2979677164074!3d36.07597430119342!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x80beb782a4f57dd1%3A0x3accd5e6d5b379a3!2sLas%20Vegas%2C%20NV%2C%20USA!5e0!3m2!1sen!2sin!4v1691230337798!5m2!1sen!2sin"
            width="100%"
            height="450"
            style={{ border: 0 }}
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          />
        </div>
      </div>
    </div>
  );
}