import { memo } from "react";

export const FooterComponent = memo(() => {
  return (
    <>
      <footer id="footer" className="footer-area">
        <div className="footer-widget">
          <div className="container">
            <div className="row">
              <div className="col-lg-12">
                <div className="footer-logo-support d-md-flex align-items-end justify-content-between">
                  <div className="footer-logo d-flex align-items-end">
                    <a className="mt-30" href="index.html">
                      <img src="assets/images/logo.svg" alt="Logo" />
                    </a>
                    <ul className="social mt-30">
                      <li>
                        <a href="/">
                          <i className="lni-facebook-filled"></i>
                        </a>
                      </li>
                      <li>
                        <a href="/">
                          <i className="lni-twitter-original"></i>
                        </a>
                      </li>
                      <li>
                        <a href="/">
                          <i className="lni-instagram-original"></i>
                        </a>
                      </li>
                      <li>
                        <a href="/">
                          <i className="lni-linkedin-original"></i>
                        </a>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
            <div className="row">
              <div className="col-lg-2 col-md-4 col-sm-6">
                <div className="footer-link">
                  <h6 className="footer-title">Company</h6>
                  <ul>
                    <li>
                      <a href="/">About</a>
                    </li>
                    <li>
                      <a href="/">Contact</a>
                    </li>
                    <li>
                      <a href="/">Career</a>
                    </li>
                  </ul>
                </div>
              </div>
              <div className="col-lg-3 col-md-4 col-sm-6">
                <div className="footer-link">
                  <h6 className="footer-title">Product & Services</h6>
                  <ul>
                    <li>
                      <a href="/">Products</a>
                    </li>
                    <li>
                      <a href="/">Business</a>
                    </li>
                    <li>
                      <a href="/">Developer</a>
                    </li>
                  </ul>
                </div>
              </div>
              <div className="col-lg-3 col-md-4 col-sm-5">
                <div className="footer-link">
                  <h6 className="footer-title">Help & Suuport</h6>
                  <ul>
                    <li>
                      <a href="/">Support Center</a>
                    </li>
                    <li>
                      <a href="/">FAQ</a>
                    </li>
                    <li>
                      <a href="/">Terms & Conditions</a>
                    </li>
                  </ul>
                </div>
              </div>
              <div className="col-lg-4 col-md-6 col-sm-7">
                <div className="footer-newsletter">
                  <h6 className="footer-title">Subscribe Newsletter</h6>
                  <div className="newsletter">
                    <form action="#">
                      <input type="text" placeholder="Your Email" />
                      <button type="submit">
                        <i className="lni-angle-double-right"></i>
                      </button>
                    </form>
                  </div>
                  <p className="text">
                    Subscribe weekly newsletter to stay upto date. We don’t send
                    spam.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="footer-copyright">
          <div className="container">
            <div className="row">
              <div className="col-lg-12">
                <div className="copyright text-center">
                  <p className="text">
                    Template Crafted by
                    <a rel="nofollow" href="../../index.htm">
                      UIdeck
                    </a>
                    - UI Powered by
                    <a rel="nofollow" href="../../index-1.htm">
                      AyroUI
                    </a>
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </footer>
      <a className="back-to-top" href="/">
        <i className="lni-chevron-up"></i>
      </a>
    </>
  );
});
