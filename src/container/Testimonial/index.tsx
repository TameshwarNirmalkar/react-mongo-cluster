import { Carousel } from "antd";
import "./testimonial.scss";

const TestimonialContainer = (): JSX.Element => {
  return (
    <>
      <section id="testimonial" className="testimonial-area">
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-lg-6">
              <div className="section-title text-center pb-10">
                <h4 className="title">Testimonial</h4>
                <p className="text">
                  Stop wasting time and money designing and managing a website
                  that doesn’t get results. Happiness guaranteed!
                </p>
              </div>
            </div>
          </div>
          <div className="row">
            <div className="col-lg-12">
              <div className="row testimonial-active">
                <Carousel
                  slidesToShow={3}
                  centerMode={true}
                  draggable={true}
                  swipeToSlide={true}
                  touchThreshold={10}
                  focusOnSelect={false}
                  arrows={true}
                  centerPadding={"0px"}
                  className="track-slide-container"
                >
                  <div className="single-testimonial text-center">
                    <div className="testimonial-image">
                      <img src="assets/images/author-3.jpg" alt="Author" />
                    </div>
                    <div className="testimonial-content">
                      <p className="text">
                        Stop wasting time and money designing and managing a
                        website that doesn’t get results. Happiness guaranteed!
                        Stop wasting time and money designing and managing a
                        website that doesn’t get results. Happiness guaranteed!
                      </p>
                      <h6 className="author-name">Isabela Moreira</h6>
                      <span className="sub-title">CEO, GrayGrids</span>
                    </div>
                  </div>

                  <div className="single-testimonial text-center">
                    <div className="testimonial-image">
                      <img src="assets/images/author-1.jpg" alt="Author" />
                    </div>
                    <div className="testimonial-content">
                      <p className="text">
                        Stop wasting time and money designing and managing a
                        website that doesn’t get results. Happiness guaranteed!
                        Stop wasting time and money designing and managing a
                        website that doesn’t get results. Happiness guaranteed!
                      </p>
                      <h6 className="author-name">Fiona</h6>
                      <span className="sub-title">Lead Designer, UIdeck</span>
                    </div>
                  </div>

                  <div className="single-testimonial text-center">
                    <div className="testimonial-image">
                      <img src="assets/images/author-2.jpg" alt="Author" />
                    </div>
                    <div className="testimonial-content">
                      <p className="text">
                        Stop wasting time and money designing and managing a
                        website that doesn’t get results. Happiness guaranteed!
                        Stop wasting time and money designing and managing a
                        website that doesn’t get results. Happiness guaranteed!
                      </p>
                      <h6 className="author-name">Elon Musk</h6>
                      <span className="sub-title">CEO, SpaceX</span>
                    </div>
                  </div>

                  <div className="single-testimonial text-center">
                    <div className="testimonial-image">
                      <img src="assets/images/author-4.jpg" alt="Author" />
                    </div>
                    <div className="testimonial-content">
                      <p className="text">
                        Stop wasting time and money designing and managing a
                        website that doesn’t get results. Happiness guaranteed!
                        Stop wasting time and money designing and managing a
                        website that doesn’t get results. Happiness guaranteed!
                      </p>
                      <h6 className="author-name">Fajar Siddiq</h6>
                      <span className="sub-title">CEO, MakerFlix</span>
                    </div>
                  </div>
                </Carousel>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default TestimonialContainer;
