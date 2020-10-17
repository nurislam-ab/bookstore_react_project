import React from 'react';
import '../Header.scss';

const Header = () => (
  <header className="main-nav">
    <div className="logo">
      <h1>Bookstore CMS</h1>
    </div>

    <nav className="menu">
      <a href="https://polar-citadel-29411.herokuapp.com/" className="active">Books</a>
      <a href="https://polar-citadel-29411.herokuapp.com/">Categories</a>
    </nav>
    <div className="profile">
      <img src="" alt="User avatar" />
    </div>
  </header>
);

export default Header;
