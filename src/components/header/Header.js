import "./Header.css";
import Logo from "../../assets/logo.png";
import Bars from "../../assets/list.svg";
import { useState } from "react";

export default function Header() {
  const [isNavOpen, setIsNavOpen] = useState(false);
  return (
    <div className="main-nav">
      <nav className="nav">
        <img className="logo" src={Logo} alt="" />
        <p
          onClick={() => setIsNavOpen(!isNavOpen)}
          className={isNavOpen ? "bar show-nav" : "bar"}
        >
          CLick
        </p>
        <ul className={isNavOpen ? "nav-list show-nav" : "nav-list"}>
          <li>Home</li>
          <li>Programs</li>
          <li>Why us</li>
          <li>Plans</li>
          <li>Testimonials</li>
        </ul>
      </nav>
    </div>
  );
}
