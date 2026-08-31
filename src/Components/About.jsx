import { useEffect, useRef, useState } from "react";
import "../Style/About.css";

const stats = [
  { value: 17, suffix: "M+", label: "Download" },
  { value: 2300, suffix: "+", label: "Reviews" },
  { value: 150, suffix: "+", label: "Countries" },
  { value: 8, suffix: "M+", label: "Followers" },
];

function About() {
  const sectionRef = useRef(null);
  const [counts, setCounts] = useState(stats.map(() => 0));
  const [played, setPlayed] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !played) {
          setPlayed(true);

          stats.forEach((item, i) => {
            let start = 0;
            const end = item.value;
            const duration = 1800;
            const step = end / (duration / 16);

            const timer = setInterval(() => {
              start += step;

              if (start >= end) {
                start = end;
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
      { threshold: 0.3 },
    );

    if (sectionRef.current) observer.observe(sectionRef.current);
    return () => observer.disconnect();
  }, [played]);

  return (
    <section className="about_section" ref={sectionRef}>
      <div className="container">
        <div className="section_title">
          <span
            className="title_badge"
            data-aos="fade-up"
            data-aos-duration="1200"
          >
            About us
          </span>

          <h2
            className="about_heading"
            data-aos="fade-up"
            data-aos-duration="1200"
          >
            Application with the best{" "}
            <img src="/mobileicon.png" alt="" className="title_icon" />
            user interface convert
            <br />
            <img src="/usericon.png" alt="" className="title_icon" />
            <span className="highlight">visitor</span> into{" "}
            <img src="/magnet.png" alt="" className="title_icon" />
            <span className="highlight">leads</span>
          </h2>
        </div>

        <div className="about_row">
          <div
            className="about_col"
            data-aos="fade-right"
            data-aos-duration="1500"
          >
            <ul className="app_statstic">
              {stats.map((item, i) => (
                <li key={i}>
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

          <div
            className="about_col center"
            data-aos="zoom-in"
            data-aos-duration="1500"
          >
            <div className="abtImg">
              <img src="/appscreen.png" alt="App Screen" />
            </div>
          </div>

          <div
            className="about_col"
            data-aos="fade-left"
            data-aos-duration="1500"
          >
            <p>
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry. It has been the industry's standard dummy text ever
              since an unknown printer took a galley of type and scrambled it.
            </p>

            <div className="video_block">
              <img
                className="thumbnil"
                src="/applicationvideothumb.png"
                alt="Video"
              />

              <div className="video_overlay"></div>

              <a
                href="https://www.youtube.com/watch?v=tgbNymZ7vqY"
                target="_blank"
                rel="noreferrer"
                className="play_wrapper"
              >
                <svg className="circle_text" viewBox="0 0 160 160">
                  <defs>
                    <path
                      id="textCircle"
                      d="M80,80 m-52,0 a52,52 0 1,1 104,0 a52,52 0 1,1 -104,0"
                    />
                  </defs>

                  <text>
                    <textPath href="#textCircle" startOffset="0%">
                      PLAY VIDEO • PLAY VIDEO • PLAY VIDEO •
                    </textPath>
                  </text>
                </svg>
                <div className="playBtn">
                  <img src="/play_white.svg" alt="Play" className="play_icon" />
                </div>
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default About;