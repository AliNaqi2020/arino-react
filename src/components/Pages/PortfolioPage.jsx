import { Icon } from "@iconify/react";
import React, { useEffect } from "react";
import { useState } from "react";
import { pageTitle } from "../../helper";
import Cta from "../Cta";
import PageHeading from "../PageHeading";
import Portfolio from "../Portfolio";
import Div from "../Div";
import SectionHeading from "../SectionHeading";
import Spacing from "../Spacing";
// import 'mdb-react-ui-kit/dist/css/mdb.min.css';
// import "@fortawesome/fontawesome-free/css/all.min.css";
// import { MDBCardBody,MDBCardImage,MDBCard ,MDBCol ,MDBRow ,MDBCardText,MDBCardTitle
//  } from "mdb-react-ui-kit";
//  import "./portfolioPage.scss";

export default function PortfolioPage() {
  pageTitle("Portfolio");
  const [active, setActive] = useState("all");
  const [itemShow, setItemShow] = useState(7);
  const portfolioData = [
    {
      title: "ui_ux_design",
      subtitle: "See Details",
      href: "/portfolio/portfolio-details",
      src: "/images/service_4.jpeg",
      category: "ui_ux_design",
    },
    {
      title: "logo_design",
      subtitle: "See Details",
      href: "/portfolio/portfolio-details",
      src: "/images/testimonials_4.jpeg",
      category: "logo_design",
    },
    {
      title: "web_design",
      subtitle: "See Details",
      href: "/portfolio/portfolio-details",
      src: "/images/service_1.jpeg",
      category: "web_design", 
    },
    {
      title: "mobile_apps",
      subtitle: "See Details",
      href: "/portfolio/portfolio-details",
      src: "/images/service_5.jpeg",
      category: "mobile_apps",
    },
    {
      title: "ui_ux_design",
      subtitle: "See Details",
      href: "/portfolio/portfolio-details",
      src: "/images/portfolio_8.jpeg",
      category: "ui_ux_design",
    },
    {
      title: "Colorful Art Work",
      subtitle: "See Details",
      href: "/portfolio/portfolio-details",
      src: "/images/service_6.jpeg",
      category: "web_design",
    },
    {
      title: "logo_design",
      subtitle: "See Details",
      href: "/portfolio/portfolio-details",
      src: "/images/service_2.jpeg",
      category: "logo_design",
    },
    {
      title: "ui_ux_design",
      subtitle: "See Details",
      href: "/portfolio/portfolio-details",
      src: "/images/service_4.jpeg",
      category: "ui_ux_design",
    },
    {
      title: "logo_design",
      subtitle: "See Details",
      href: "/portfolio/portfolio-details",
      src: "/images/service_2.jpeg",
      category: "logo_design",
    },
    {
      title: "web_design",
      subtitle: "See Details",
      href: "/portfolio/portfolio-details",
      src: "/images/portfolioweb.jpeg",
      category: "web_design",
    },
  ];
  const categoryMenu = [
    {
      title: "Web Design",
      category: "web_design",
    },
    {
      title: "UI/UX Design",
      category: "ui_ux_design",
    },
    {
      title: "Mobile Apps",
      category: "mobile_apps",
    },
    {
      title: "Logo Design",
      category: "logo_design",
    },
  ];

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <>
       {/* <PageHeading
        title="Portfolio"
        bgSrc="images/portfolio_hero_bg.jpeg"
        pageLinkText="Portfolio"
      /> */}
      {/* portfolio cards start */}
      {/* <div id = "portfoliocard"className="portfoliocard my-5 mx-5"></div>
      <MDBRow className='row-cols-1 row-cols-md-3 g-4'>
      <MDBCol>
        <MDBCard className='h-100'> 
          <MDBCardImage
            src='https://mdbootstrap.com/img/new/standard/city/041.webp'
            alt='...'
            position='top'
          />
          <MDBCardBody>
            <MDBCardTitle>Card title</MDBCardTitle>
            <MDBCardText>
              This is a longer card with supporting text below as a natural lead-in to additional content.
              This content is a little bit longer.
            </MDBCardText>
          </MDBCardBody>
        </MDBCard>
      </MDBCol>
      <MDBCol>
        <MDBCard className='h-100'>
          <MDBCardImage
            src='https://mdbootstrap.com/img/new/standard/city/042.webp'
            alt='...'
            position='top'
          />
          <MDBCardBody>
            <MDBCardTitle>Card title</MDBCardTitle>
            <MDBCardText>This is a short card.</MDBCardText>
          </MDBCardBody>
        </MDBCard>
      </MDBCol>
      <MDBCol>
        <MDBCard className='h-100'>
          <MDBCardImage
            src='https://mdbootstrap.com/img/new/standard/city/043.webp'
            alt='...'
            position='top'
          />
          <MDBCardBody>
            <MDBCardTitle>Card title</MDBCardTitle>
            <MDBCardText>
              This is a longer card with supporting text below as a natural lead-in to additional content.
            </MDBCardText>
          </MDBCardBody>
        </MDBCard>
      </MDBCol>
      <MDBCol>
        <MDBCard className='h-100'>
          <MDBCardImage
            src='https://mdbootstrap.com/img/new/standard/city/044.webp'
            alt='...'
            position='top'
          />
          <MDBCardBody>
            <MDBCardTitle>Card title</MDBCardTitle>
            <MDBCardText>
              This is a longer card with supporting text below as a natural lead-in to additional content.
              This content is a little bit longer.
            </MDBCardText>
          </MDBCardBody>
        </MDBCard>
      </MDBCol>
      <MDBCol>
        <MDBCard className='h-100'>
          <MDBCardImage
            src='https://mdbootstrap.com/img/new/standard/city/041.webp'
            alt='...'
            position='top'
          />
          <MDBCardBody>
            <MDBCardTitle>Card title</MDBCardTitle>
            <MDBCardText>
              This is a longer card with supporting text below as a natural lead-in to additional content.
              This content is a little bit longer.
            </MDBCardText>
          </MDBCardBody>
        </MDBCard>
      </MDBCol>
      <MDBCol>
        <MDBCard className='h-100'>
          <MDBCardImage
            src='https://mdbootstrap.com/img/new/standard/city/041.webp'
            alt='...'
            position='top'
          />
          <MDBCardBody>
            <MDBCardTitle>Card title</MDBCardTitle>
            <MDBCardText>
              This is a longer card with supporting text below as a natural lead-in to additional content.
              This content is a little bit longer.
            </MDBCardText>
          </MDBCardBody>
        </MDBCard>
      </MDBCol> 
    </MDBRow> */}

      {/* portfolio cards end */}
   
      <Spacing lg="145" md="80" />
      <Div className="container">
        <Div className="cs-portfolio_1_heading">
          <SectionHeading title="Some recent work" subtitle="Our Portfolio" />
          <Div className="cs-filter_menu cs-style1">
            <ul className="cs-mp0 cs-center">
              <li className={active === "all" ? "active" : ""}>
                <span onClick={() => setActive("all")}>All</span>
              </li>
              {categoryMenu.map((item, index) => (
                <li
                  className={active === item.category ? "active" : ""}
                  key={index}
                >
                  <span onClick={() => setActive(item.category)}>
                    {item.title}
                  </span>
                </li>
              ))}
            </ul>
          </Div>
        </Div>
        <Spacing lg="90" md="45" />
        <Div className="row">
          {portfolioData.slice(0, itemShow).map((item, index) => (
            <Div
              className={`${
                index === 3 || index === 6 ? "col-lg-8" : "col-lg-4"
              } ${
                active === "all"
                  ? ""
                  : !(active === item.category)
                  ? "d-none"
                  : ""
              }`}
              key={index}
            >
              <Portfolio
                title={item.title}
                subtitle={item.subtitle}
                href={item.href}
                src={item.src}
                variant="cs-style1 cs-type1"
              />
              <Spacing lg="25" md="25" />
            </Div>
          ))}
        </Div>

        <Div className="text-center">
          {portfolioData.length <= itemShow ? (
            ""
          ) : (
            <>
              <Spacing lg="65" md="40" />
              <span
                className="cs-text_btn"
                onClick={() => setItemShow(itemShow + 3)}
              >
                <span>Load More</span>
                <Icon icon="bi:arrow-right" />
              </span>
            </>
          )}
        </Div>
      </Div>
      <Spacing lg="145" md="80" />
      <Cta
        title="agency@SocialMediaSuit.com"
        bgSrc="/images/cta_bg_2.jpeg"
        variant="rounded-0"
      />
    </>
  );
}
