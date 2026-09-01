import { useEffect, useRef, useState } from "react";
import "../Style/Features.css";

const FEATURES = [
  {
    icon: "/ourvalue_1.png",
    title: "Skilled Team",
    text: "Lorem Ipsum is simply dummy text of the printing and typtting industry lorem Ipsum has.",
  },
  {
    icon: "/ourvalue_2.png",
    title: "Creative Thinking",
    text: "Lorem Ipsum is simply dummy text of the printing and typtting industry lorem Ipsum has.",
  },
  {
    icon: "/ourvalue_3.png",
    title: "Growth Support",
    text: "Lorem Ipsum is simply dummy text of the printing and typtting industry lorem Ipsum has.",
  },
  {
    icon: "/ourvalue_1.png",
    title: "Skilled Team",
    text: "Lorem Ipsum is simply dummy text of the printing and typtting industry lorem Ipsum has.",
  },
];

function itemsForWidth(w) {
  if (w < 768) return 1;
  if (w < 992) return 2;
  return 3;
}

function FeatureCarousel() {
  const [perView, setPerView] = useState(() =>
    typeof window !== "undefined" ? itemsForWidth(window.innerWidth) : 3
  );

  const [index, setIndex] = useState(perView);
  const [withTransition, setWithTransition] = useState(true);
  const timerRef = useRef(null);
  const total = FEATURES.length;

  useEffect(() => {
    const id = setInterval(() => {
      setIndex((prev) => prev + 1);
      setWithTransition(true);
    }, 4000);

    return () => clearInterval(id);
  }, [perView]);

  const next = () => {
    setWithTransition(true);
    setIndex((prev) => prev + 1);
  };

  const stopAuto = () => clearInterval(timerRef.current);

  const startAuto = () => {
    clearInterval(timerRef.current);
    timerRef.current = setInterval(next, 2800);
  };

  useEffect(() => {
    startAuto();
    return stopAuto;
  }, [perView]);

  const handleTransitionEnd = () => {
    if (index >= total + perView) {
      setWithTransition(false);
      setIndex(index - total);
    } else if (index < perView) {
      setWithTransition(false);
      setIndex(index + total);
    }
  };

  return (
    <div
      className="value_slider"
      onMouseEnter={stopAuto}
      onMouseLeave={startAuto}
    >
      <div className="value_slider">
        <div className="value_track continuous">
          {[...FEATURES, ...FEATURES].map((f, i) => (
            <div className="item" key={i}>
              <div className="value_block">
                <div className="icon">
                  <img src={f.icon} alt={f.title} />
                </div>
                <div className="text">
                  <h3>{f.title}</h3>
                  <p>{f.text}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

function Features() {
  return (
    <section className="our_value_section home_feature white_text row_am">
      <div className="dotes_blue">
        <img src="/yellow_dots.png" alt="" />
      </div>

      <div className="container">
        <div className="section_title">
          <span
            className="title_badge"
            data-aos="fade-up"
            data-aos-duration="1200"
          >
            Unique Features
          </span>

          <h2 data-aos="fade-up" data-aos-duration="1200">
            Powerful features
          </h2>
        </div>

        <div className="value_slider_wrap">
          <FeatureCarousel />
        </div>
      </div>
    </section>
  );
}

export default Features;