import { useEffect, useRef, useState } from "react";
import "../Style/OurValues.css";

const VALUES = [
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
];

const TEXT_ITEMS = [
  "Multiple campaigns",
  "User friendly",
  "Advanced analytics",
  "Task management",
  "Event Scheduler",
  "Group Video Calls",
  "Live Chat",
  "Activity Stream",
];

function itemsForWidth(w) {
  if (w < 768) return 1;
  if (w < 992) return 2;
  return 3;
}

function ValueCarousel() {
  const [perView, setPerView] = useState(() =>
    typeof window !== "undefined" ? itemsForWidth(window.innerWidth) : 3,
  );
  const [index, setIndex] = useState(perView);
  const [withTransition, setWithTransition] = useState(true);
  const timerRef = useRef(null);
  const total = VALUES.length;

  useEffect(() => {
    const onResize = () => {
      const pv = itemsForWidth(window.innerWidth);
      setPerView(pv);
      setWithTransition(false);
      setIndex(pv);
    };
    window.addEventListener("resize", onResize);
    return () => window.removeEventListener("resize", onResize);
  }, []);

  const slides = [
    ...VALUES.slice(-perView),
    ...VALUES,
    ...VALUES.slice(0, perView),
  ];
  const slideWidthPercent = 100 / slides.length;
  const trackWidthPercent = (slides.length / perView) * 100;

  const goTo = (i) => {
    setWithTransition(true);
    setIndex(i);
  };
  const next = () => goTo(index + 1);
  const prev = () => goTo(index - 1);

  useEffect(() => {
    timerRef.current = setInterval(next, 3000);
    return () => clearInterval(timerRef.current);
  }, [index, perView]);

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
      onMouseEnter={() => clearInterval(timerRef.current)}
      onMouseLeave={() => (timerRef.current = setInterval(next, 3000))}
    >
      <div className="value_track_viewport">
        <div
          className="value_track"
          style={{
            width: `${trackWidthPercent}%`,
            transform: `translateX(-${index * slideWidthPercent}%)`,
            transition: withTransition ? "transform 0.5s ease" : "none",
          }}
          onTransitionEnd={handleTransitionEnd}
        >
          {slides.map((v, i) => (
            <div
              className="item"
              key={i}
              style={{ flex: `0 0 ${slideWidthPercent}%` }}
            >
              <div className="value_block">
                <div className="icon">
                  <img src={v.icon} alt={v.title} />
                </div>
                <div className="text">
                  <h3>{v.title}</h3>
                  <p>{v.text}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      <div className="owl-nav">
        <button
          type="button"
          className="owl-prev"
          onClick={prev}
          aria-label="Previous"
        >
          <span>‹</span>
        </button>
        <button
          type="button"
          className="owl-next"
          onClick={next}
          aria-label="Next"
        >
          <span>›</span>
        </button>
      </div>
    </div>
  );
}

function TextMarquee() {
  const doubled = [...TEXT_ITEMS, ...TEXT_ITEMS];
  return (
    <div className="slider_block">
      <div className="marquee_track">
        {doubled.map((t, i) => (
          <div className="text_block" key={i}>
            <span>{t}</span>
            <span className="mark_star">•</span>
          </div>
        ))}
      </div>
    </div>
  );
}

function OurValues() {
  return (
    <>
      <section className="our_value_section row_am">
        <div className="container">
          <div className="section_title">
            <span className="title_badge">Our values</span>
            <h2>
              <span>Our values</span> driven by relations
            </h2>
          </div>
          <ValueCarousel />
        </div>
      </section>

      <section className="text_list_section row_am">
        <div className="container">
          <span className="title_badge down_fix">Why choose our app</span>
        </div>
        <TextMarquee />
      </section>
    </>
  );
}

export default OurValues;
