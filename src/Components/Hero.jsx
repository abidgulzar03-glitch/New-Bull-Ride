import { useState, useEffect } from "react";
import "../Style/Hero.css";

function useTypedText(words, speed = 160, pause = 1400) {
  const [text, setText] = useState("");
  const [wordIndex, setWordIndex] = useState(0);
  const [deleting, setDeleting] = useState(false);

  useEffect(() => {
    const current = words[wordIndex % words.length];
    let timeout;

    if (!deleting && text.length < current.length) {
      timeout = setTimeout(() => {
        setText(current.slice(0, text.length + 1));
      }, speed);
    } else if (!deleting && text.length === current.length) {
      timeout = setTimeout(() => {
        setDeleting(true);
      }, pause);
    } else if (deleting && text.length > 0) {
      timeout = setTimeout(() => {
        setText(current.slice(0, text.length - 1));
      }, speed / 2);
    } else if (deleting && text.length === 0) {
      setDeleting(false);
      setWordIndex((i) => i + 1);
    }

    return () => clearTimeout(timeout);
  }, [text, deleting, wordIndex, words, speed, pause]);

  return text;
}

function Hero() {
  const typed = useTypedText([
    "Type Writing Text",
    "Auto Type Text",
    "Add any text you like here.",
  ]);

  return (
    <section className="banner_section">
      <div className="container">
        <div className="banner_row">
          <div className="banner_col">
            <div
              className="banner_text"
              data-aos="fade-up"
              data-aos-duration="1400"
            >
              {/* Typing Text */}
              <div className="type-wrap">
                <span className="typed">{typed}</span>
                <span className="typed-cursor">|</span>
              </div>

              {/* Heading */}
              <h1>
                Lead generation <span>mobile app landing page</span>
              </h1>

              {/* Description */}
              <p>
                Lorem Ipsum is simply dummy text of the printing indus orem
                Ipsum has been the industrys standard dummy text ever since.
              </p>

              {/* Buttons */}
              <div className="hero_buttons">
                {/* Watch Demo */}
                <div className="btn_block right_space">
                  <a
                    href="https://youtu.be/6mbwJ2xhgzM"
                    className="hero_btn black_btn"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <span className="play_icon">▶</span>
                    Watch 2 min demo
                  </a>

                  <div className="btn_bottom black"></div>
                </div>

                {/* Start Free Trial */}
                <div className="btn_block left_space">
                  <a href="/contact" className="hero_btn purple_btn">
                    Start Free Trial
                  </a>

                  <div className="btn_bottom"></div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Desktop Hero Image */}
        <div
          className="hero_image md_screen"
       
        >
          <img src="/hero-image.png" alt="Hero" />
        </div>

        {/* Mobile Hero Image */}
        <div
          className="hero_image mobile"
     
        >
          <img
            src="/hero-image-mobile.png"
            alt="Hero mobile"
           
          />
        </div>
      </div>
    </section>
  );
}

export default Hero;