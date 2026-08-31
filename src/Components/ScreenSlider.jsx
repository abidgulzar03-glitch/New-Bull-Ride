import { useEffect, useRef, useState } from "react";
import "../Style/Interface.css";

const screens = [
  "/intrscrn1.png",
  "/intrscrn2.png",
  "/intrscrn3.png",
  "/intrscrn4.png",
  "/intrscrn5.png",
  "/intrscrn2.png",
];

function ScreenSlider() {
  const trackRef = useRef(null);
  const autoSlideRef = useRef(null);
  const isJumpingRef = useRef(false);
  const scrollDebounceRef = useRef(null);
  const [sidePad, setSidePad] = useState(0);

  // Add clone of last and first slide
  const infiniteScreens = [screens[screens.length - 1], ...screens, screens[0]];

  // Start at first REAL slide
  const [activeIndex, setActiveIndex] = useState(0);
  const [currentPosition, setCurrentPosition] = useState(1);

  // Compute side padding so first/last real slides can actually reach center
  useEffect(() => {
    const track = trackRef.current;
    if (!track) return;

    const updatePadding = () => {
      const firstItem = track.children[1]; // first real slide (index 0 is the clone)
      if (!firstItem) return;

      const pad = Math.max(0, (track.clientWidth - firstItem.clientWidth) / 2);
      setSidePad(pad);
    };

    updatePadding();

    const ro = new ResizeObserver(updatePadding);
    ro.observe(track);
    if (track.children[1]) ro.observe(track.children[1]);

    window.addEventListener("resize", updatePadding);

    return () => {
      ro.disconnect();
      window.removeEventListener("resize", updatePadding);
    };
  }, []);

  const scrollToPosition = (position, smooth = true) => {
    const track = trackRef.current;

    if (!track) return;

    const item = track.children[position];

    if (item) {
      track.scrollTo({
        left: item.offsetLeft - (track.clientWidth - item.clientWidth) / 2,
        behavior: smooth ? "smooth" : "auto",
      });
    }
  };

  const goToSlide = (index) => {
    const newIndex = (index + screens.length) % screens.length;

    setActiveIndex(newIndex);
    setCurrentPosition(newIndex + 1);

    scrollToPosition(newIndex + 1, true);
  };

  const handleNext = () => {
    const nextPosition = currentPosition + 1;

    setCurrentPosition(nextPosition);
    setActiveIndex((nextPosition - 1 + screens.length) % screens.length);

    scrollToPosition(nextPosition, true);
    // The loop-wrap (if we've landed on the clone) is handled by the
    // scrollend/settle logic below — no fixed timeout guessing here.
  };

  const handlePrev = () => {
    const previousPosition = currentPosition - 1;

    setCurrentPosition(previousPosition);
    setActiveIndex((previousPosition - 1 + screens.length) % screens.length);

    scrollToPosition(previousPosition, true);
  };

  // Automatic sliding
  useEffect(() => {
    autoSlideRef.current = setInterval(() => {
      handleNext();
    }, 3000);

    return () => {
      clearInterval(autoSlideRef.current);
    };
  }, [currentPosition]);

  // Initial position
  useEffect(() => {
    const timer = setTimeout(() => {
      scrollToPosition(1, false);
    }, 100);

    return () => clearTimeout(timer);
  }, []);

  // Settle logic: figures out which item we actually landed on once
  // scrolling has fully stopped, and — if it's a clone — silently (no
  // animation) repositions to the matching real slide. Because the
  // clone is a pixel-identical copy of that real slide, the jump is
  // invisible and the loop feels continuous in both directions.
  useEffect(() => {
    const track = trackRef.current;
    if (!track) return;

    const settle = () => {
      if (isJumpingRef.current) return;

      const trackCenter = track.scrollLeft + track.clientWidth / 2;

      let closestIndex = 0;
      let closestDistance = Infinity;

      Array.from(track.children).forEach((child, index) => {
        const childCenter = child.offsetLeft + child.clientWidth / 2;
        const distance = Math.abs(childCenter - trackCenter);

        if (distance < closestDistance) {
          closestDistance = distance;
          closestIndex = index;
        }
      });

      // Landed on the leading clone (visually = last real slide) —
      // jump straight to the real last slide, no animation.
      if (closestIndex === 0) {
        isJumpingRef.current = true;
        setActiveIndex(screens.length - 1);
        setCurrentPosition(screens.length);
        scrollToPosition(screens.length, false);

        requestAnimationFrame(() => {
          isJumpingRef.current = false;
        });
        return;
      }

      // Landed on the trailing clone (visually = first real slide) —
      // jump straight to the real first slide, no animation.
      if (closestIndex === screens.length + 1) {
        isJumpingRef.current = true;
        setActiveIndex(0);
        setCurrentPosition(1);
        scrollToPosition(1, false);

        requestAnimationFrame(() => {
          isJumpingRef.current = false;
        });
        return;
      }

      setActiveIndex(closestIndex - 1);
      setCurrentPosition(closestIndex);
    };

    const handleScroll = () => {
      if (isJumpingRef.current) return;

      // Fallback debounce for browsers without native "scrollend"
      // support (fires ~120ms after scrolling actually stops, rather
      // than a hardcoded guess tied to a specific transition length).
      clearTimeout(scrollDebounceRef.current);
      scrollDebounceRef.current = setTimeout(settle, 120);
    };

    const handleScrollEnd = () => {
      clearTimeout(scrollDebounceRef.current);
      settle();
    };

    track.addEventListener("scroll", handleScroll, { passive: true });
    track.addEventListener("scrollend", handleScrollEnd);

    return () => {
      track.removeEventListener("scroll", handleScroll);
      track.removeEventListener("scrollend", handleScrollEnd);
      clearTimeout(scrollDebounceRef.current);
    };
  }, []);

  return (
    <section className="interface_section row_am">
      <div className="container">
        <div
          className="screen_slider"
          data-aos="fade-up"
          data-aos-duration="1500"
        >
          <div className="owl-carousel owl-theme" id="screen_slider">
            {/* Slides */}
            <div
              className="owl-track"
              ref={trackRef}
              style={{ paddingLeft: sidePad, paddingRight: sidePad }}
            >
              {infiniteScreens.map((src, index) => {
                const realIndex = (index - 1 + screens.length) % screens.length;

                return (
                  <div
                    className={`item owl-item ${
                      realIndex === activeIndex &&
                      index !== 0 &&
                      index !== screens.length + 1
                        ? "center"
                        : ""
                    }`}
                    key={index}
                  >
                    <div className="screen_frame_img">
                      <img src={src} alt={`Screen ${realIndex + 1}`} />
                    </div>
                  </div>
                );
              })}
            </div>

            {/* Navigation */}
            <div className="owl-nav">
              <button
                className="owl-prev"
                onClick={handlePrev}
                aria-label="Previous"
              >
                <span>&#8249;</span>
              </button>

              <button
                className="owl-next"
                onClick={handleNext}
                aria-label="Next"
              >
                <span>&#8250;</span>
              </button>
            </div>

            {/* Dots */}
            <div className="owl-dots">
              {screens.map((_, index) => (
                <button
                  key={index}
                  className={`owl-dot ${index === activeIndex ? "active" : ""}`}
                  onClick={() => goToSlide(index)}
                  aria-label={`Go to slide ${index + 1}`}
                />
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default ScreenSlider;