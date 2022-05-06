import { FaBars } from "react-icons/fa";
import { FaPencilAlt } from "react-icons/fa";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <header className="deep-orange accent-3">
      <nav className="blue-grey">
        <div className="nav-wrapper">
          <div>
            <Link to="/" className="brand-logo black-text">
              DemoBlog <FaPencilAlt />
            </Link>
          </div>
          <a className="sidenav-trigger " data-target="mobile-menu">
            <i className="material-icons ">
              <FaBars className="black-text" />
            </i>
          </a>
          <ul id="nav-mobile" className=" right hide-on-med-and-down ">
            <li>
              <Link to="/" className="hoverable black-text ">
                Home
              </Link>
            </li>
            <li>
              <Link to="/authors" className="hoverable black-text">
                Authors
              </Link>
            </li>
            <li>
              <Link to="/about" className="hoverable black-text">
                About
              </Link>
            </li>
          </ul>
          <ul className="sidenav blue-grey  black-text " id="mobile-menu">
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/authors">Authors</Link>
            </li>
            <li>
              <Link to="/about">About</Link>
            </li>
          </ul>
        </div>
      </nav>
    </header>
  );
};

export default Header;
