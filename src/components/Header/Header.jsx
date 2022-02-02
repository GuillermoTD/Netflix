import React from "react";
import Logo from "../../img/Logo.png";
import userNotImage from "../../img/user.png";
const Header = () => {
  window.addEventListener("scroll", () => {
    const navbar = document.querySelector(".Header");
    navbar.classList.toggle("sticky", window.scrollY > 0);
  });
  return (
    <div className="Header">
      <img src={Logo} className="Header_Logo" alt="Netflix" />
      <div className="Header_NavBar">
        <div className="Header_Links">
          <a href="#">Home</a>
          <a href="#">Tv Shows</a>
          <a href="#">Movies</a>
          <a href="#">Latest</a>
          <a href="#">My List</a>
        </div>

        <div className="Header_Buttons">
          <i className="fas fa-search"></i>
          <i className="fas fa-bell"></i>
          <div className="Header_UserBox">
              <i className="fas fa-user Header_Avatar"></i>
              <i class="fas fa-sort-down"></i>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Header;
