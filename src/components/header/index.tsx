import { memo } from "react";
import { Link, NavLink } from "react-router-dom";

export const HeaderComponent = memo(() => {
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
                      <NavLink
                        to="/"
                        className={({ isActive }) =>
                          isActive ? "page-scroll active" : "page-scroll"
                        }
                      >
                        HOME
                      </NavLink>
                    </li>
                    <li className="nav-item">
                      <NavLink
                        to="/services"
                        className={({ isActive }) =>
                          isActive ? "page-scroll active" : "page-scroll"
                        }
                      >
                        SERVICES
                      </NavLink>
                    </li>
                    <li className="nav-item">
                      <NavLink
                        to="/pricing"
                        className={({ isActive }) =>
                          isActive ? "page-scroll active" : "page-scroll"
                        }
                      >
                        PRICING
                      </NavLink>
                    </li>
                    <li className="nav-item">
                      <NavLink
                        to="/testimonial"
                        className={({ isActive }) =>
                          isActive ? "page-scroll active" : "page-scroll"
                        }
                      >
                        Testimonial
                      </NavLink>
                    </li>
                    <li className="nav-item">
                      <NavLink
                        to="/contact"
                        className={({ isActive }) =>
                          isActive ? "page-scroll active" : "page-scroll"
                        }
                      >
                        CONTACT
                      </NavLink>
                    </li>
                  </ul>
                </div>
                <div className="navbar-social d-none d-sm-flex align-items-center">
                  <span>FOLLOW US</span>
                  <ul>
                    <li>
                      <NavLink
                        to="/"
                        className={({ isActive }) =>
                          isActive ? "page-scroll active" : "page-scroll"
                        }
                      >
                        <i className="lni-facebook-filled"></i>
                      </NavLink>
                    </li>
                    <li>
                      <NavLink
                        to="/"
                        className={({ isActive }) =>
                          isActive ? "page-scroll active" : "page-scroll"
                        }
                      >
                        <i className="lni-twitter-original"></i>
                      </NavLink>
                    </li>
                    <li>
                      <NavLink
                        to="/"
                        className={({ isActive }) =>
                          isActive ? "page-scroll active" : "page-scroll"
                        }
                      >
                        <i className="lni-instagram-original"></i>
                      </NavLink>
                    </li>
                    <li>
                      <NavLink
                        to="/"
                        className={({ isActive }) =>
                          isActive ? "page-scroll active" : "page-scroll"
                        }
                      >
                        <i className="lni-linkedin-original"></i>
                      </NavLink>
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
