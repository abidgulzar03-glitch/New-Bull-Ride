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
        <Link to="/" className="logo" onClick={closeAll}>
          <img src="/logo2.png" alt="Logo(2)" />
          <span className="br-logo__word">
            Bull
            <span className="br-em">R</span>
            ide
          </span>
        </Link>

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
              <Link to="/" onClick={closeAll}>Home</Link>
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
                  <Link to="/" onClick={closeAll}>Home 1</Link>
                </li>
                <li>
                  <Link to="/" onClick={closeAll}>Home 2</Link>
                </li>
                <li>
                  <Link to="/" onClick={closeAll}>Home 4</Link>
                </li>
                <li>
                  <Link to="/" onClick={closeAll}>Home 5</Link>
                </li>
                <li>
                  <Link to="/" onClick={closeAll}>Home 6</Link>
                </li>
                <li>
                  <Link to="/" onClick={closeAll}>Home 7</Link>
                </li>
                <li>
                  <Link to="/" onClick={closeAll}>Home 8</Link>
                </li>

                <li>
                  <Link to="/" onClick={closeAll}>Home 9</Link>
                </li>

                <li>
                  <Link to="/" onClick={closeAll}>Home 10</Link>
                </li>
              </ul>
            </li>

            <li className="nav-item">
              <Link to="/aboutUs" onClick={closeAll}>About Us</Link>
            </li>
            <li
              className={`nav-item dropdown ${openDropdown === 1 ? "active" : ""}`}
            >
              <Link to="/" onClick={closeAll}>Pages</Link>
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
                     <Link to="/blog-list" onClick={closeAll}>Blog List</Link>
                </li>
                <li>
                 
                   <Link to="/blog-detail" onClick={closeAll}>Single Blog</Link>
                </li>
                <li>
                 
                  <Link to="/sign-in" onClick={closeAll}>Sign In </Link>

                </li>
                <li>
                 <Link to="/sign-up" onClick={closeAll}>Sign Up </Link>
                </li>
              </ul>
            </li>

            <li className="nav-item">
              <Link to="/pricing" onClick={closeAll}>Pricing</Link>
            </li>

            <li className="nav-item">
              <Link to="/reviews" onClick={closeAll}>Reviews</Link>
            </li>

           <li className="nav-item">
  <Link to="/lastblog" onClick={closeAll}>Blog</Link>
</li>

          <li className="nav-item">
  <Link to="/contact" onClick={closeAll}>
    Contact
  </Link>
</li>

            <li className="nav-item download-item">
              <div className="btn_block">
                <Link to="/contact" className="hero_btn purple_btn download-btn" onClick={closeAll}>
                  Download
                </Link>
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