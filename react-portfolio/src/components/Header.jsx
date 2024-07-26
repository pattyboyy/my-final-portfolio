import React from 'react';
import Navigation from './Navigation';

function Header() {
  return (
    <header>
      <div className="header-content">
        <h1>
          Patrick Riedinger
          <span className="subtitle">Full Stack Developer</span>
        </h1>
      </div>
      <Navigation />
    </header>
  );
}

export default Header;