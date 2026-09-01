import { useState } from "react";
import "../Style/Header.css";
import { Link } from "react-router-dom";
function Header() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [openDropdown, setOpenDropdown] = useState(null);

  const toggleDropdown = (index) => {
    setOpenDropdown(openDropdown === index ? null : index);
  };

  const closeAll = () => {
    setMenuOpen(false);
    setOpenDropdown(null);
  };

  return (
    <header className="header">
      <div className="header-container">
        <a href="/" className="logo" onClick={closeAll}>
          <img src="/logo2.png" alt="Logo(2)" />
        </a>

        <button
          className={`menu-toggle ${menuOpen ? "active" : ""}`}
          onClick={() => setMenuOpen((prev) => !prev)}
          aria-label="Toggle menu"
          aria-expanded={menuOpen}
        >
          <span></span>
          <span></span>
          <span></span>
        </button>

        <nav className={`navigation ${menuOpen ? "open" : ""}`}>
          <ul className="nav-list">
            <li
              className={`nav-item dropdown ${openDropdown === 0 ? "active" : ""}`}
            >
              <a href="/">Home</a>
              <span
                className="dropdown-arrow"
                onClick={(e) => {
                  e.preventDefault();
                  toggleDropdown(0);
                }}
              >
                ⌄
              </span>
              <ul className="dropdown-menu">
                <li>
                  <a href="/">Home 1</a>
                </li>
                <li>
                  <a href="/">Home 2</a>
                </li>
                <li>
                  <a href="/">Home 4</a>
                </li>
                <li>
                  <a href="/">Home 5</a>
                </li>
                <li>
                  <a href="/">Home 6</a>
                </li>
                <li>
                  <a href="/">Home 7</a>
                </li>
                <li>
                  <a href="/">Home 8</a>
                </li>

                <li>
                  <a href="/">Home 9</a>
                </li>

                <li>
                  <a href="/">Home 10</a>
                </li>
              </ul>
            </li>

            <li className="nav-item">
              <Link to="/aboutUs">About Us</Link>
            </li>
            <li
              className={`nav-item dropdown ${openDropdown === 1 ? "active" : ""}`}
            >
              <a href="/">Pages</a>
              <span
                className="dropdown-arrow"
                onClick={(e) => {
                  e.preventDefault();
                  toggleDropdown(1);
                }}
              >
                ⌄
              </span>
              <ul className="dropdown-menu">
                <li>
                     <Link to="/blog">Blog List</Link>
                </li>
                <li>
                  <a href="/blog-detail">Single Blog</a>
                </li>
                <li>
                  <a href="/sign-in">Sign In</a>
                </li>
                <li>
                  <a href="/sign-up">Sign Up</a>
                </li>
              </ul>
            </li>

            <li className="nav-item">
              <a href="/pricing">Pricing</a>
            </li>

            <li className="nav-item">
              <a href="/reviews">Reviews</a>
            </li>

            <li className="nav-item">
              <a href="/blog">Blog</a>
            </li>

            <li className="nav-item">
              <a href="/contact">Contact</a>
            </li>

            <li className="nav-item download-item">
              <div className="btn_block">
                <a href="/contact" className="hero_btn purple_btn download-btn">
                  Download
                </a>
                <div className="btn_bottom"></div>
              </div>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
}

export default Header;
