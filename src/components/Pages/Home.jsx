import React, { useEffect } from "react";
import Card from "../Card";
import FunFact from "../FunFact";
// import Hero from '../Hero';
import Div from "../Div";
import SectionHeading from "../SectionHeading";
import Spacing from "../Spacing";
import Cta from "../Cta";
import LogoList from "../LogoList";
import MovingText from "../MovingText";
import PortfolioSlider from "../Slider/PortfolioSlider";
import PostSlider from "../Slider/PostSlider";
import TestimonialSlider from "../Slider/TestimonialSlider";
import TeamSlider from "../Slider/TeamSlider";
import VideoModal from "../VideoModal";
import TimelineSlider from "../Slider/TimelineSlider";
import { pageTitle } from "../../helper";
import "./Home.scss";
import { useState } from "react";
import Calendar from "react-calendar";
import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";

export default function Home() {
  pageTitle("Home");

  // Hero Social Links
  const heroSocialLinks = [
    {
      name: "Behance",
      links: "/",
    },
    {
      name: "Twitter",
      links: "/",
    },
  ];

  // FunFact Data
  const funfaceData = [
    {
      title: "Global Happy Clients",
      factNumber: "40K",
    },
    {
      title: "Project Completed",
      factNumber: "50K",
    },
    {
      title: "Team Members",
      factNumber: "245",
    },
    {
      title: "Digital products",
      factNumber: "550",
    },
  ];

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  const [date, setDate] = useState([
    new Date(2021, 6, 1),
    new Date(2021, 6, 10),
  ]);

  return (
    <>
      {/* Start Hero Section */}
      <div className="container">
        <div className="testimonial-container">
          <div className="testimonial">
            {/*  */}
            <div className="row d-flex justify-content-center">
              <div className="col-md-10 col-xl-8 text-center">
                <h3 className="mb-4">Testimonials</h3>
                {/* Testimonials */}

                <Carousel
                  showArrows={true}
                  infiniteLoop={true}
                  showThumbs={false}
                  showStatus={false}
                  autoPlay={true}
                  interval={3000}
                >
                  <div>
                    <img src="/images/testimonials_1.jpeg" alt=""style={{width: "400px" ,height:"400px"}}/>
                    <div className="myCarousel bg-dark">
                      <h3>Shirley Fultz</h3>
                      <h4>Designer</h4>
                      <p>
                        It's freeing to be able to catch up on customized news
                        and not be distracted by a social media element on the
                        same site.The simple and intuitive design makes it easy
                        for me use. I highly recommend Fetch to my peers.
                      </p>
                    </div>
                  </div>
                  <div>
                    <img src="/images/testimonials_2.jpeg" alt="" style={{width: "400px" ,height:"400px"}}/>
                    <div className="myCarousel bg-dark">
                      <h3>Daniel Keystone</h3>
                      <h4>Designer</h4>
                      <p>
                        The simple and intuitive design makes it easy for me
                        use. I highly recommend Fetch to my peers.It's freeing
                        to be able to catch up on customized news and not be
                        distracted by a social media element on the same site
                      </p>
                    </div>
                  </div>
                  <div>
                    <img src="/images/testimonials_3.jpeg" alt="" style={{width: "400px" ,height:"400px"}}/>
                    <div className="myCarousel bg-dark">
                      <h3>Shirley Fultz</h3>
                      <h4>Designer</h4>
                      <p>
                        It's freeing to be able to catch up on customized news
                        and not be distracted by a social media element on the
                        same site.The simple and intuitive design makes it easy
                        for me use. I highly recommend Fetch to my peers.
                      </p>
                    </div>
                  </div>
                  <div>
                    <img src="/images/testimonials_4.jpeg" alt=""  />
                    <div className="myCarousel bg-dark">
                      <h3> Management</h3>
                      <h4>Our Team</h4>
                      <p>
                        I enjoy catching up with Fetch on my laptop, or on my
                        phone when I'm on the go!I highly recommend Fetch to my
                        peers.It's freeing to be able to catch up on customized
                        news I highly recommend Fetch to my peers.
                      </p>
                    </div>
                  </div>
                   {/*  <div>
                    <img src="/images/testimonials_6.jpeg" alt="" style={{width: "400px" ,height:"400px"}} />
                    <div className="myCarousel">
                      <h3>Daniel Keystone</h3>
                      <h4>Designer</h4>
                      <p>
                        The simple and intuitive design makes it easy for me
                        use. I highly recommend Fetch to my peers.It's freeing
                        to be able to catch up on customized news and not be
                        distracted by a social media element on the same site
                      </p>
                    </div>
                  </div>

                <div>
                    <img src="/images/testimonials_1.jpeg" alt="" />
                    <div className="myCarousel">
                      <h3>Theo Sorel</h3>
                      <h4>Designer</h4>
                      <p>
                        I enjoy catching up with Fetch on my laptop, or on my
                        phone when I'm on the go!I highly recommend Fetch to my
                        peers.It's freeing to be able to catch up on customized
                        news
                      </p>
                    </div>
                  </div>
                  <div>
                    <img src="/images/testimonials_3.jpeg" alt="" />
                    <div className="myCarousel">
                      <h3>Daniel Keystone</h3>
                      <h4>Designer</h4>
                      <p>
                        The simple and intuitive design makes it easy for me
                        use. I highly recommend Fetch to my peers.It's freeing
                        to be able to catch up on customized news and not be
                        distracted by a social media element on the same site
                      </p>
                    </div>
                  </div>
                  <div>
                    <img src="/images/testimonials_2.jpeg" alt="" />
                    <div className="myCarousel">
                      <h3>Daniel Keystone</h3>
                      <h4>Designer</h4>
                      <p>
                        The simple and intuitive design makes it easy for me
                        use. I highly recommend Fetch to my peers.It's freeing
                        to be able to catch up on customized news and not be
                        distracted by a social media element on the same site
                      </p>
                    </div>
                  </div> */}
                </Carousel>

                {/* EndTes */}
              </div>
            </div>

            <div className="row text-center d-flex align-items-stretch">
              <div
                className="col-md-4 mb-5 mb-md-0 d-flex align-items-stretch"
                style={{ width: "60%" , height : "30%" }}
              ></div>
            </div>
          </div>
         
          <div className="testimonial-image">
          <h3 id="h3heading" className="text-center mb-5">Schedule Your Meeting</h3>  
            <div className="app">
           
              <div className="calendar-container">
                <Calendar
                  onChange={setDate}
                  selectRange={true}
                  defaultView="decade"
                />
              </div>
              {date.length > 0 ? (
                <p className="text-center mx-20 my-20">
                  <span className="bold">Start:</span> {date[0].toDateString()}
                  &nbsp;|&nbsp;
                  <span className="bold">End:</span> {date[1].toDateString()}
                </p>
              ) : (
                <p className="text-center">
                  <span className="bold">Meeting schedule :</span>{" "}
                  {date.toDateString()}
                </p>
              )}
            </div>

            {/* <img src="./images/Calendly.png" alt="Testimonial" /> */}
          </div>
        </div>
      </div>

      {/* End Service Section */}

      {/* Start Portfolio Section */}
      <Spacing lg="150" md="50" />
      <Div>
        <Div className="container">
          <SectionHeading
            title="Portfolio to explore"
            subtitle="Latest Projects"
            variant="cs-style1 text-center"
          />
          <Spacing lg="90" md="45" />
        </Div>
        <PortfolioSlider />
      </Div>
      {/* End Portfolio Section */}

      {/* Start Awards Section */}
      <Spacing lg="150" md="80" />
      <Div className="cs-shape_wrap_2">
        <Div className="cs-shape_2">
          <Div />
        </Div>
        <Div className="container">
          <Div className="row">
            <Div className="col-xl-4">
              <SectionHeading
                title="We get multiple awards"
                subtitle="Our Awards"
                variant="cs-style1"
              />
              <Spacing lg="90" md="45" />
            </Div>
            <Div className="col-xl-7 offset-xl-1">
              <TimelineSlider />
            </Div>
          </Div>
        </Div>
      </Div>
      {/* End Awards Section */}

      {/* Start Video Block Section */}
      <Spacing lg="130" md="70" />
      <Div className="container">
        <h2 className="cs-font_50 cs-m0 text-center cs-line_height_4">
          Our agile process is ability to adapt and respond to change. Agile
          organizations view change as an opportunity, not a threat.
        </h2>
        <Spacing lg="70" md="70" />
        <VideoModal
          videoSrc="https://www.youtube.com/watch?v=VcaAVWtP48A"
          bgUrl="/images/video_bg.jpeg"
        />
      </Div>
      {/* End Video Block Section */}

      {/* Start Team Section */}
      <Spacing lg="145" md="80" />
      <Div className="container">
        <SectionHeading
          title="Awesome team <br/>members"
          subtitle="Our Team"
          variant="cs-style1"
        />
        <Spacing lg="85" md="45" />
        <TeamSlider />
      </Div>
      <Spacing lg="150" md="80" />
      {/* End Team Section */}

      {/* Start Testimonial Section */}
      <TestimonialSlider />
      {/* End Testimonial Section */}

      {/* Start Blog Section */}
      <Spacing lg="150" md="80" />
      <Div className="cs-shape_wrap_4">
        <Div className="cs-shape_4"></Div>
        <Div className="cs-shape_4"></Div>
        <Div className="container">
          <Div className="row">
            <Div className="col-xl-4">
              <SectionHeading
                title="Explore recent publication"
                subtitle="Our Blog"
                btnText="View More Blog"
                btnLink="/blog"
              />
              <Spacing lg="90" md="45" />
            </Div>
            <Div className="col-xl-7 offset-xl-1">
              <Div className="cs-half_of_full_width">
                <PostSlider />
              </Div>
            </Div>
          </Div>
        </Div>
      </Div>
      {/* End Blog Section */}

      {/* Start MovingText Section */}
      <Spacing lg="125" md="70" />
      <MovingText text="Our reputed world wide partners" />
      <Spacing lg="105" md="70" />
      {/* End MovingText Section */}

      {/* Start LogoList Section */}
      <Div className="container">
        <LogoList />
      </Div>
      <Spacing lg="150" md="80" />
      {/* End LogoList Section */}

      {/* Start CTA Section */}
      <Div className="container">
        <Cta
          title="Let’s disscuse make <br />something <i>cool</i> together"
          btnText="Apply For Meeting"
          btnLink="/contact"
          bgSrc="/images/cta_bg.jpeg"
        />
      </Div>
      {/* End CTA Section */}
    </>
  );
}
