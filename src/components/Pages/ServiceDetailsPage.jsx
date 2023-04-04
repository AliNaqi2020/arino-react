import React, { useEffect } from "react";
import { useParams } from "react-router-dom";
import { pageTitle } from "../../helper";
import Accordion from "../Accordion";
import Button from "../Button";
import Cta from "../Cta";
import IconBox from "../IconBox";
import PageHeading from "../PageHeading";
import Div from "../Div";
import SectionHeading from "../SectionHeading";
import TestimonialSlider from "../Slider/TestimonialSlider";
import Spacing from "../Spacing";
import { useState } from "react";
import "./popup.scss";
import { Element } from "html-react-parser";
// import ReactDOM from "react-dom";
// import makeAnimated from "react-select/animated";
// import { colourOptions } from "./data.js";
// import MySelect from "./MySelect.js";
// import "./styles.css";
// import { components } from "react-select";
<link
  rel="stylesheet"
  href="https://cdn.jsdelivr.net/npm/bootstrap@4.3.1/dist/css/bootstrap.min.css"
  integrity="sha384-ggOyR0iXCbMQv3Xipma34MD+dH/1fQ784/j6cY/iJTQUOhcWr7x9JvoRxT2MZw1T"
  crossorigin="anonymous"
></link>;

export default function ServiceDetailsPage() {
  pageTitle("Service Details");
  const params = useParams();
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  const handleSubmit = (e) => {
    e.preventDefault();
    // const onSubmit = (data, e) => {
    //   e.preventDefault();
    //   console.log(data);
    //   alert(`thank you ${data.name} for your message`);
    // };

    // handle form submission here
  };
  // const handleDelete = (e) => {
  //   e.();

  //   }
  //   // const onSubmit = (data, e) => {
  //   //   e.preventDefault();
  //   //   console.log(data);
  //   //   alert(`thank you ${data.name} for your message`);
  //   // };

  //   // handle form submission here
  // };
  const handleEvent = () => {
    console.log(email);
    alert("Your form is Successfully  Submitted! Thank you  for your Time!");
  };
  // const disableEvent = (e) => {
  //  if ( e.preventDefault()===null){
  //   disabled = true;
  //  }
  // };
  const handleDelEvent = () => {
    console.log(email);
    alert("Your form is Successfully Remove!");
  };
  const [name, setName] = useState();
  const [email, setEmail] = useState();
  const [phone, setPhone] = useState();
  const [password, setPassword] = useState();
  const [website, setWebsite] = useState();
  const [social1, setSocial1] = useState();
  const [social2, setSocial2] = useState();
  const [social3, setSocial3] = useState();
  const [social4, setSocial4] = useState();
  const [social5, setSocial5] = useState();
  // const [city, setCity] = useState();
  // const [state, setState] = useState();
  // const [zip, setZip] = useState();
  // const [isChecked, setIsChecked] = useState();

  // select<br
  // let option = ["Facebook", "Twitter", "Linkdin", "TickTok", " Instagram"];
  // let selectedValue = () => {
  //   if (option === "Facebook") {
  //     document.display = "inline";
  //   }
  // };

  const options = [
    { label: "Select", value: "Social Media handles"},
    { label: "Facebook", value: "Facebook" },

    { label: "LinkdIn", value: "LinkdIn" },

    { label: "Instagram", value: "Instagram" },
    
    { label: "TickTok", value: "TickTok" },

    { label: "Twitter", value: "Twitter" },
  ];

  const [value, setValue] = React.useState("Select Social Handles");
  // function myFunction() {
  //   var x = document.getElementById('fac');
  //   if (x.style.display === 'none') {
  //     x.style.display = 'block';
  //   } else {
  //     x.style.display = 'none';
  //   }
  // }

 

  const handleChange = (event) => {
    setValue(event.target.value);
  
  if (value==='Facebook'){ 

      document.getElementById("fac").style.display = "block";
  
        console.log(value);
       }
   else if (value==='LinkdIn'){ 
  
    document.getElementById("li").style.display = "block";
    console.log(value);
  }
    
   else if (value==='Instagram'){ 
      // alert(document.getElementById("ins").style.display);
    document.getElementById("ins").style.display = "block";}
   else if (value==='TickTok'){ 
            // alert(document.getElementById("tic").style.display);
    document.getElementById("tic").style.display = "block";}
   else if (value==='Twitter'){ 
              // alert(document.getElementById("twi").style.display);
    document.getElementById("twi").style.display = "block";} 
   
else{
  // alert(document.getElementById("soc").style.display);
 <h1>Please Select Social handles</h1>
}   
    

  };


  return (
    <>
      <h2 className="pope3">Services</h2>
      <div className="popup">
        <form className="pope4 " onSubmit={handleSubmit} onReset={""}>
          <div className="form-row">
            <div
              className="form-group col-md-5"
              style={{ display: "inline-block" }}
            >
              <label htmlFor="name">Full Name*</label>
              <input
                type="text"
                className="form-control"
                id="text"
                placeholder="Enter full name"
                value={name}
                onChange={(e) => setName(e.target.value)}
                style={{ backgroundColor: "gray" }}
                required
              />
            </div>
            <div
              className="form-group col-md-5 mx-5"
              style={{ display: "inline-block" }}
            >
              <label htmlFor="inputEmail4">Email*</label>
              <input
                type="email"
                className="form-control"
                id="inputEmail4"
                placeholder="Email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                style={{ backgroundColor: "gray" }}
                required
              />
            </div>
            <div
              className="form-group col-md-5 mt-3"
              style={{ display: "inline-block" }}
            >
              <label htmlFor="inputPassword4">Contact No*</label>
              <input
                type="number"
                className="form-control"
                id="Phone"
                placeholder="Enter Phone No."
                value={phone}
                onChange={(e) => setPhone(e.target.value)}
                style={{ backgroundColor: "gray" }}
                required
              />
            </div>

            <div
              className="form-group col-md-5 mx-5 mt-3"
              style={{ display: "inline-block" }}
            >
              <label htmlFor="inputPassword4">Password*</label>
              <input
                type="password"
                className="form-control"
                id="inputPassword4"
                placeholder="Password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                style={{ backgroundColor: "gray" }}
                required
              />
            </div>
            <div
              className="form-group col-md-5  mx-6 mt-3"
              style={{ display: "inline-block" }}
            >
              <label htmlFor="inputAddress">Business Website</label>
              <input
                type="text"
                className="form-control"
                id="inputWebsite"
                placeholder="Business Website"
                value={website}
                onChange={(e) => setWebsite(e.target.value)}
                style={{ backgroundColor: "gray" }}
              />
            </div>
            {/* <div
              className="form-group col-md-5  mx-6 mt-3"
             
            > <h5>Social Media Handles</h5>
              <select class="browser-default custom-select">
             
                <option selected isMulti
                   closeMenuOnSelect={false}
                  hideSelectedOptions={false}>
                </option>
                   
                <option value={selectedValue}>Facebook</option>
                <option value={selectedValue}>Instagram</option>
                <option value={selectedValue}>LinkdIn</option>
                <option value={selectedValue}>TickTok</option>
                <option value={selectedValue}>Twitter</option>
              </select>
            </div> */}
            <div  className="form-group col-md-5  mx-6 mt-3" > 
              <label><h5>Social Media Handles</h5>
                <select value={value} onChange={handleChange} style={{ backgroundColor: "gray" }}>
                  {options.map((option) => (
                    <option >{option.label}</option>
                  ))}
                </select>
              </label>

              <p>  {value}</p>
            </div>

            <div 
              id="soc"
              className="form-group col-md-5 mt-5"
              style={{ display: "none" }}
            >
              <h5>Social Media Handles</h5>
            </div>
            <div
              id="fac"
              className="form-group col-md-5"
              style={{ display: "inline-block",display: "none" }} 
            >
              <label htmlFor="inputFacebook">Facebook</label>
              <input
                type="text"
                className="form-control"
                id="inputFacebook"
                placeholder="Facebook"
                value={social1}
                onChange={(e) => setSocial1(e.target.value)}
                style={{ backgroundColor: "gray" }} 
              />
            </div>
            <div id="li"
              className="form-group col-md-5 mx-5"
              style={{ display: "inline-block", display: "none" }} 
            >
              <label htmlFor="inputLinkedIn">LinkedIn</label>
              <input 
                type="text"
                className="form-control col-md-5"
                id="inputLinkedIn"
                placeholder="LinkedIn"
                value={social2}
                onChange={(e) => setSocial2(e.target.value)}
                style={{ backgroundColor: "gray" }} 
              />
            </div>
            <div 
              id="ins"
              className="form-group col-md-5 mt-3"
              style={{ display: "inline-block",display: "none" }}

            >
              <label htmlFor="inputInstagram">Instagram</label>
              <input
                type="text"
                className="form-control"
                id="inputInstagram"
                placeholder="Instagram"
                value={social3}
                onChange={(e) => setSocial3(e.target.value)}
                style={{ backgroundColor: "gray" }}
              />
            </div>
            <div 
              id="twi"
              className="form-group col-md-5 mx-5"
              style={{ display: "inline-block", display: "none" }}
            >
              <label htmlFor="inputTwitter">Twitter</label>
              <input
                type="text"
                className="form-control"
                id="inputTwitter"
                placeholder="Twitter"
                value={social4}
                onChange={(e) => setSocial4(e.target.value)}
                style={{ backgroundColor: "gray" }}
              />
            </div>
            <div
              id="tic"
              className="form-group col-md-5 mx-6 mt-3"
              style={{display: "inline-block", display: "none" }}
            >
              <label htmlFor="inputTiktok">Tiktok</label>
              <input
                type="text"
                className="form-control"
                id="inputTiktok"
                placeholder="Tiktok"
                value={social5}
                onChange={(e) => setSocial5(e.target.value)}
                style={{ backgroundColor: "gray" }}
              />
            </div>

            {/* <div className="form-row">
            <div className="form-group col-md-5 mx-6 mt-3">
              <label htmlFor="inputCity">City</label>
              <input
                type="text"
                className="form-control"
                placeholder="City"
                id="inputCity"
                value={city}
                onChange={(e) => setCity(e.target.value)}
              />
            </div>
            </div> */}
            {/* <div className="form-group col-md-12">
              <label htmlFor="inputState">State</label>
              <select
                id="inputState"
                className="form-control col-md-12"
                value={state}
                onChange={(e) => setState(e.target.value)}
              >
                <option selected>Choose...</option>
                <option>...</option>
              </select>
            </div>
            <div className="form-group col-md-12">
              <label htmlFor="inputZip">Zip-Code</label>
              <input
                type="text"
                className="form-control col-md-12"
                id="inputZip"
                value={zip}
                onChange={(e) => setZip(e.target.value)}
              />
            </div>*/}
          </div>
          {/* <div className="form-group">
            <div className="form-check">
              <input
                className="form-check-input"
                type="checkbox"
                id="gridCheck"
                checked={isChecked}
                onChange={() => setIsChecked(!isChecked)}
                required
              />
              <label className="form-check-label" htmlFor="gridCheck">
                Check me out
              </label>
            </div> */}
          {/* </div> */}
          <button
            type="delete"
            className="btn btn-dark col-md-2 text- center mt-3"
            onClick={handleDelEvent}
          >
            Discard
          </button>
          <button
            type="submit"
            className="btn btn-primary col-md-2 mx-3 mt-3"
            onClick={handleEvent}
          >
            Submit
          </button>
        </form>
      </div>

      <PageHeading
        title="Service Details"
        bgSrc="/images/service_hero_bg.jpeg"
        pageLinkText={params.serviceDetailsId}
      />

      <Spacing lg="145" md="80" />
      <Div className="container">
        <SectionHeading
          title="Design working process"
          subtitle="UI/UX Design"
          variant="cs-style1 text-center"
        />
        <Spacing lg="90" md="45" />
        <Div className="row">
          <Div className="col-lg-4">
            <IconBox
              icon="/images/icons/service_icon_1.svg"
              title="Sketching"
              subtitle="Sed ut perspiciatis unde omnis iste natus error voluptatem accusantium also a doloremque laudantium, totam remain beatae vitae dictaro enim ipsam sunt explicabo."
            />
            <Spacing lg="30" md="30" />
          </Div>
          <Div className="col-lg-4">
            <IconBox
              icon="/images/icons/service_icon_2.svg"
              title="Wireframing"
              subtitle="Sed ut perspiciatis unde omnis iste natus error voluptatem accusantium also a doloremque laudantium, totam remain beatae vitae dictaro enim ipsam sunt explicabo."
            />
            <Spacing lg="30" md="30" />
          </Div>
          <Div className="col-lg-4">
            <IconBox
              icon="/images/icons/service_icon_3.svg"
              title="Prototyping"
              subtitle="Sed ut perspiciatis unde omnis iste natus error voluptatem accusantium also a doloremque laudantium, totam remain beatae vitae dictaro enim ipsam sunt explicabo."
            />
            <Spacing lg="30" md="30" />
          </Div>
        </Div>
      </Div>
      <Spacing lg="120" md="50" />
      <Div className="container">
        <Div className="row align-items-center">
          <Div className="col-xl-5 col-lg-6">
            <Div className="cs-radius_15 cs-shine_hover_1">
              <img
                src="/images/service_img_1.jpeg"
                alt="Service"
                className="cs-radius_15 w-100"
              />
            </Div>
            <Spacing lg="0" md="40" />
          </Div>
          <Div className="col-lg-6 offset-xl-1">
            <h2 className="cs-font_50 cs-m0">
              Below our most design related services
            </h2>
            <Spacing lg="50" md="30" />
            <Div className="row">
              <Div className="col-lg-6">
                <Button
                  btnLink="/service/service-details"
                  btnText="Web page design"
                  variant="cs-type2"
                />
                <Spacing lg="20" md="10" />
                <Button
                  btnLink="/service/service-details"
                  btnText="eCommerce design"
                  variant="cs-type2"
                />
                <Spacing lg="20" md="10" />
                <Button
                  btnLink="/service/service-details"
                  btnText="Landing page"
                  variant="cs-type2"
                />
                <Spacing lg="20" md="10" />
                <Button
                  btnLink="/service/service-details"
                  btnText="Email template"
                  variant="cs-type2"
                />
                <Spacing lg="20" md="10" />
                <Button
                  btnLink="/service/service-details"
                  btnText="Application design"
                  variant="cs-type2"
                />
                <Spacing lg="20" md="10" />
                <Button
                  btnLink="/service/service-details"
                  btnText="Illustration"
                  variant="cs-type2"
                />
                <Spacing lg="0" md="10" />
              </Div>
              <Div className="col-lg-6">
                <Button
                  btnLink="/service/service-details"
                  btnText="Infographic design"
                  variant="cs-type2"
                />
                <Spacing lg="20" md="10" />
                <Button
                  btnLink="/service/service-details"
                  btnText="Mobile apps design"
                  variant="cs-type2"
                />
                <Spacing lg="20" md="10" />
                <Button
                  btnLink="/service/service-details"
                  btnText="Banner, brochure, card"
                  variant="cs-type2"
                />
                <Spacing lg="20" md="10" />
                <Button
                  btnLink="/service/service-details"
                  btnText="Other design"
                  variant="cs-type2"
                />
                <Spacing lg="20" md="10" />
              </Div>
            </Div>
          </Div>
        </Div>
      </Div>
      <Spacing lg="150" md="80" />
      <TestimonialSlider />
      <Spacing lg="145" md="80" />
      <Div className="container cs-shape_wrap_4">
        <Div className="cs-shape_4"></Div>
        <Div className="cs-shape_4"></Div>
        <Div className="container">
          <Div className="row">
            <Div className="col-xl-5 col-lg-6">
              <SectionHeading
                title="Some pre questions and answers"
                subtitle="FAQ’s"
              />
              <Spacing lg="90" md="45" />
            </Div>
            <Div className="col-lg-6 offset-xl-1">
              <Accordion />
            </Div>
          </Div>
        </Div>
      </Div>
      <Spacing lg="150" md="80" />
      <Div className="container">
        <Cta
          title="Let’s disscuse make <br />something <i>cool</i> together"
          btnText="Apply For Meeting"
          btnLink="/contact"
          bgSrc="/images/cta_bg.jpeg"
        />
      </Div>
    </>
  );
}
