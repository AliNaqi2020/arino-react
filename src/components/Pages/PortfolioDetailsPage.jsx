import React, { useEffect } from "react";
import { useParams } from "react-router-dom";
import { pageTitle } from "../../helper";
import Button from "../Button";
import Cta from "../Cta";
import PageHeading from "../PageHeading";
import Div from "../Div";
import SectionHeading from "../SectionHeading";
import Spacing from "../Spacing";
import Dropdown from "react-dropdown";
import "react-dropdown/style.css";
// import "./portfolioPage.scss"
// import { MDBBtn, MDBCard, MDBCardBody, MDBCardHeader, MDBCheckbox, MDBCol, MDBInput, MDBListGroup, MDBListGroupItem, MDBRow, MDBTextArea, MDBTypography } from 'mdb-react-ui-kit';

export default function PortfolioDetailsPage() {
  const params = useParams();
  pageTitle("Portfolio Details");
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  // let onSelect = (Props) => {

  let showMedia = () => {
    console.log("showMedia");
  }

  return (
    <>
      <PageHeading
        title="Portfolio Details"
        bgSrc="/images/service_hero_bg.jpeg"
      />
      {/* DropDown */}

    
         
         <div class="btn-group">
           <button class="btn btn-secondary btn-sm dropdown-toggle" type="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
             Small button
           </button>
           <div class="dropdown-menu">
             ...
           </div>
         </div>
         <div class="btn-group">
           <button class="btn btn-secondary btn-sm" type="button" onClick={showMedia}>
             Small split button
           </button>
           <button type="button" class="btn btn-sm btn-secondary dropdown-toggle dropdown-toggle-split" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
             <span class="sr-only">Toggle Dropdown</span>
           </button>
           <div class="dropdown-menu">
             ...
           </div>
         </div>
                 
    
      <Spacing lg="150" md="80" />
      <Div classNameNameName="container">
        <img
          src="/images/portfolio_details_1.jpeg"
          alt="Details"
          classNameNameName="cs-radius_15 w-100"
        />
     
     
        <Spacing lg="90" md="40" />
        <Div classNameNameName="row">
          <Div classNameNameName="col-lg-6">
            <SectionHeading title="Graffiti wall artwork" subtitle="Creative">
              <Spacing lg="40" md="20" />
              <p>
                Sed ut perspiciatis unde omnis iste natus error sit voluptatem
                accusantium voltire doloremque laudantium, totam rem aperiam,
                eaque ipsa quae ab illo inventore veritatis et quasi architecto
                beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem
                quia voluptas sit aspernatur aut odit aut fugit, sed quia
                consequuntur magni dolores eos qui ratione voluptatem sequi
                nesciunt.
              </p>
              <Spacing lg="10" md="10" />
              <p>
                Ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia
                non numquam eius modi tempora incidunt ut labore et dolore
                magnam aliquam quaerat voluptatem. Ut enim ad minima veniam,
                quis nostrum exercitationem ullam corporis suscipit.
              </p>
            </SectionHeading>
          </Div>
          <Div classNameNameName="col-lg-5 offset-lg-1">
            <Spacing lg="60" md="40" />
            <h2 classNameNameName="cs-font_30 cs-font_26_sm cs-m0">
              Project Info -
            </h2>
            <Spacing lg="50" md="30" />
            <Div classNameNameName="row">
              <Div classNameNameName="col-6">
                <h3 classNameNameName="cs-accent_color cs-font_22 cs-font_18_sm cs-m0">
                  Category:
                </h3>
                <p classNameNameName="cs-m0">Artwork</p>
                <Spacing lg="30" md="30" />
              </Div>
              <Div classNameNameName="col-6">
                <h3 classNameNameName="cs-accent_color cs-font_22 cs-font_18_sm cs-m0">
                  Location:
                </h3>
                <p classNameNameName="cs-m0">United Kindom</p>
                <Spacing lg="30" md="30" />
              </Div>
              <Div classNameNameName="col-6">
                <h3 classNameNameName="cs-accent_color cs-font_22 cs-font_18_sm cs-m0">
                  Software:
                </h3>
                <p classNameNameName="cs-m0">Adobe Illustrator</p>
                <Spacing lg="30" md="30" />
              </Div>
              <Div classNameNameName="col-6">
                <h3 classNameNameName="cs-accent_color cs-font_22 cs-font_18_sm cs-m0">
                  Dated:
                </h3>
                <p classNameNameName="cs-m0">14-Aug-2022</p>
                <Spacing lg="30" md="30" />
              </Div>
              <Div classNameNameName="col-6">
                <h3 classNameNameName="cs-accent_color cs-font_22 cs-font_18_sm cs-m0">
                  Client:
                </h3>
                <p classNameNameName="cs-m0">Andreo Bowla</p>
                <Spacing lg="30" md="30" />
              </Div>
            </Div>
          </Div>
        </Div>
        <Spacing lg="65" md="10" />
        <Div classNameNameName="cs-page_navigation cs-center">
          <Div>
            <Button
              btnLink="/portfolio/portfolio-details"
              btnText="Prev Project"
              variant="cs-type1"
            />
          </Div>
          <Div>
            <Button
              btnLink="/portfolio/portfolio-details"
              btnText="Next Project"
            />
          </Div>
        </Div>
      </Div>
      <Spacing lg="145" md="80" />
      <Cta
        title="agency@arino.com"
        bgSrc="/images/cta_bg_2.jpeg"
        variant="rounded-0"
      />
    </>
  );
}
