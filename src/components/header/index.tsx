import { memo } from "react";
// import { Link, Link } from "react-router-dom";
import { Link } from "react-scroll";

export const HeaderComponent = memo(() => {
  const navConfig = {
    activeClass: "active",
    spy: true,
    smooth: true,
    duration: 500,
  };
  return (
    <header className="header-area">
      <div className="navgition navgition-transparent">
        <div className="container">
          <div className="row">
            <div className="col-lg-12">
              <nav className="navbar navbar-expand-lg">
                <a className="navbar-brand" href="/">
                  <img src="assets/images/logo.svg" alt="Logo" />
                </a>
                <button
                  className="navbar-toggler"
                  type="button"
                  data-toggle="collapse"
                  data-target="#navbarOne"
                  aria-controls="navbarOne"
                  aria-expanded="false"
                  aria-label="Toggle navigation"
                >
                  <span className="toggler-icon"></span>
                  <span className="toggler-icon"></span>
                  <span className="toggler-icon"></span>
                </button>
                <div
                  className="collapse navbar-collapse sub-menu-bar"
                  id="navbarOne"
                >
                  <ul className="navbar-nav m-auto">
                    <li className="nav-item">
                      <Link to="home" {...navConfig}>
                        HOME
                      </Link>
                    </li>
                    <li className="nav-item">
                      <Link to="services" {...navConfig}>
                        SERVICES
                      </Link>
                    </li>
                    <li className="nav-item">
                      <Link to="pricing" {...navConfig}>
                        PRICING
                      </Link>
                    </li>
                    <li className="nav-item">
                      <Link to="testimonial" {...navConfig}>
                        Testimonial
                      </Link>
                    </li>
                    <li className="nav-item">
                      <Link to="contact" {...navConfig}>
                        CONTACT
                      </Link>
                    </li>
                  </ul>
                </div>
                <div className="navbar-social d-none d-sm-flex align-items-center">
                  <span>FOLLOW US</span>
                  <ul>
                    <li>
                      <Link to="home" activeClass="active">
                        <i className="lni-facebook-filled"></i>
                      </Link>
                    </li>
                    <li>
                      <Link to="home" activeClass="active">
                        <i className="lni-twitter-original"></i>
                      </Link>
                    </li>
                    <li>
                      <Link to="home" activeClass="active">
                        <i className="lni-instagram-original"></i>
                      </Link>
                    </li>
                    <li>
                      <Link to="home" activeClass="active">
                        <i className="lni-linkedin-original"></i>
                      </Link>
                    </li>
                  </ul>
                </div>
              </nav>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
});
