import { useEffect, useState } from "react";
import "../Style/Preloader.css";

function Preloader() {
  const [loading, setLoading] = useState(true);
  const [hide, setHide] = useState(false);

  useEffect(() => {
    // Disable scrolling while loader is visible
    document.body.style.overflow = "hidden";

    const handleLoad = () => {
      // Small delay so the loader is visible smoothly
      setTimeout(() => {
        setHide(true);

        // Remove loader from DOM after fade animation
        setTimeout(() => {
          setLoading(false);
          document.body.style.overflow = "";
        }, 500);
      }, 500);
    };

    // If page is already loaded
    if (document.readyState === "complete") {
      handleLoad();
    } else {
      window.addEventListener("load", handleLoad);
    }

    return () => {
      window.removeEventListener("load", handleLoad);
      document.body.style.overflow = "";
    };
  }, []);

  if (!loading) {
    return null;
  }

  return (
    <div id="preloader" className={hide ? "preloader-hide" : ""}>
      <div id="loader"></div>
    </div>
  );
}

export default Preloader;
