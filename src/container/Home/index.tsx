import { Modal } from "antd";
import { useState } from "react";

const HomeContainer = (): JSX.Element => {
  const [open, setOpen] = useState(false);

  const onPlayVideo = (): void => {
    setOpen(true);
  };

  return (
    <>
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
                    <span
                      className="main-btn rounded-four video-popup"
                      onClick={onPlayVideo}
                    >
                      WATCH THE VIDEO <i className="lni-play"></i>
                    </span>
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
      <Modal
        title="Video"
        centered
        open={open}
        onOk={() => setOpen(false)}
        onCancel={() => setOpen(false)}
        width={800}
        bodyStyle={{ backgroundColor: "rgba(0,0,0, .3)" }}
        footer={false}
      >
        <iframe
          style={{ width: "100%", height: 500, border: 0 }}
          src="../../watch.html?v=r44RKWyfcFw"
          title="video"
        ></iframe>
      </Modal>
    </>
  );
};

export default HomeContainer;
