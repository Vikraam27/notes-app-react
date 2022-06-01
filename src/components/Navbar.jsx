import React from 'react';

function Navbar() {
  const showNavbar = () => {
    const menuToggle = document.querySelector('.menu-toggle');
    const navigation = document.querySelector('.navigation');

    menuToggle.classList.toggle('active');
    navigation.classList.toggle('active');
  };

  return (
    <header>
      <a href="#/" className="logo">
        Notes
        <span>App</span>
      </a>
      <button type="button" className="menu-toggle" onClick={showNavbar} aria-label="navigation-menu" />
      <ul className="navigation">
        <li><a href="/#">Home</a></li>
        <li><a href="#notes">Notes</a></li>
        <li><a target="_blank" href="https://www.dicoding.com/users/vikram27" rel="noreferrer">About me</a></li>
      </ul>
    </header>
  );
}

export default Navbar;
