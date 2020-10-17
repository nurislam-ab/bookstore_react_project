import React from 'react';
import '../assets/scss/Header.scss';

const Header = () => (
  <header className="main-nav">
    <div className="logo">
      <h1>Bookstore CMS</h1>
    </div>

    <nav className="menu">
      <a href="https://polar-citadel-29411.herokuapp.com/" className="active menu-link">Books</a>
      <a href="https://polar-citadel-29411.herokuapp.com/" className="menu-link">Categories</a>
    </nav>
    <div className="profile">
      <a href="https://polar-citadel-29411.herokuapp.com/">
        <svg x="0px" y="0px" viewBox="0 0 487.678 487.678">
          <path
            d="M377.996,282.347c-56.201-18.357-79.563-41.185-79.563-41.185l-1.881,1.793
              c-16.69,15.709-35.149,24.944-51.965,24.944H243c-16.815,0-35.274-9.235-51.964-24.944l-1.882-1.793
              c0,0-23.36,22.827-79.562,41.185c-82.964,30.992-58.053,157.119-58.077,158.096c2.613,14.047,4.136,18.875,5.463,19.417
              c83.314,37.091,290.319,37.091,373.634,0c1.327-0.542,2.85-5.37,5.463-19.417C436.051,439.466,461.295,313.84,377.996,282.347z"
          />
          <path
            d="M330.924,121.441l-0.696-0.755c-4.668-4.274-4.303-4.029-4.303-4.029s8.142-41.083,1.613-60.511
            c-10.25-31.027-71.475-51.822-83.755-54.239c0.002-0.023-7.469-1.518-7.946-1.521c0,0-9.659-1.953-20.854,2.93
            c-7.291,2.805-45.408,20.09-56.227,52.83c-6.528,19.428,1.614,60.511,1.614,60.511s0.365-0.245-4.304,4.029l-0.695,0.755
            c-3.158,3.586-2.378,14.806,1.074,26.479c3.128,11.695,7.205,14.838,8.182,17.577c9.903,46.497,44.338,86.197,79.429,86.197
            s67.707-39.7,77.61-86.197c0.978-2.738,5.055-5.882,8.183-17.577C333.301,136.246,334.172,124.256,330.924,121.441z"
          />
        </svg>
      </a>
    </div>
  </header>
);

export default Header;
