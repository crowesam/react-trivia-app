import React, { useState } from "react";
import './Header.css';

const Header: React.FC = () => {
  const categories = ["GENERAL", "ARTS", "HISTORY", "GEOGRAPHY", "ENTERTAINMENT", "SPORTS", "SCIENCE"];
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen((prev) => !prev);
  };

  return (
    <header className="header">
      <img src="/logo.png" alt="Logo" className="logo" />
      <nav className={`categories ${menuOpen ? "show" : ""}`}>
        {categories.map((category, index) => (
          <a key={index} href={`#${category.toLowerCase()}`} className="category-link">
            {category}
          </a>
        ))}
      </nav>
      <div className="hamburger" onClick={toggleMenu}>
        <div></div>
        <div></div>
        <div></div>
      </div>
    </header>
  );
};

export default Header;
