const HomeContainer = () => {
  return (
    <div
      id="home"
      className="header-hero bg_cover"
      style={{ backgroundImage: "url(assets/images/header-bg.jpg)" }}
    >
      <div className="container">
        <div className="row justify-content-center">
          <div className="col-xl-8 col-lg-10">
            <div className="header-content text-center">
              <h3 className="header-title">
                Handcrafted Landing Page for Startups and SaaS Businesses
              </h3>
              <p className="text">
                A simple, customizable, and, beautiful SaaS business focused
                landing page to make your project closer to launch!
              </p>
              <ul className="header-btn rounded-buttons">
                <li>
                  <a className="main-btn rounded-three" href="/">
                    GET IN TOUCH
                  </a>
                </li>
                <li>
                  <a
                    className="main-btn rounded-four video-popup"
                    href="../../watch.html?v=r44RKWyfcFw"
                  >
                    WATCH THE VIDEO <i className="lni-play"></i>
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
      <div className="header-shape">
        <img src="assets/images/header-shape.svg" alt="shape" />
      </div>
    </div>
  );
};

export default HomeContainer;
