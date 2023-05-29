import React, { useEffect, useState } from "react";
import "./index.css";
import Header from "../header";
import PropertyCard from "../propertyCard";
import IconWithTextCard from "../iconWithTestCard";
import ReviewCard from "../reviewCard";
import Footer from "../footer";
import BlogCard from "../blogCard";

const browseTheLatest = [
  {
    type: "sale",
    img: "referance-images/Area Real Estate (1)/Rectangle 50.png",
    price: "$760,000-$820,000",
    description: "23 Rutherford Grove, ARMSTRONG CREEK",
    purpose: "FOR SALE",
    beds: "4",
    washroom: "2",
    cars: "2",
    area: "512m2",
  },
  {
    type: "sale",
    img: "referance-images/Area Real Estate (1)/Rectangle 50-1.png",
    price: "$760,000-$820,000",
    description: "23 Rutherford Grove, ARMSTRONG CREEK",
    purpose: "FOR SALE",
    beds: "4",
    washroom: "2",
    cars: "2",
    area: "512m2",
  },
  {
    type: "rent",
    img: "referance-images/Area Real Estate (1)/Rectangle 50-2.png",
    price: "$760,000-$820,000",
    description: "23 Rutherford Grove, ARMSTRONG CREEK",
    purpose: "FOR RENT",
    beds: "4",
    washroom: "2",
    cars: "2",
    area: "512m2",
  },
  {
    type: "buy",
    img: "referance-images/Area Real Estate (1)/Rectangle 50-3.png",
    price: "$760,000-$820,000",
    description: "23 Rutherford Grove, ARMSTRONG CREEK",
    purpose: "FOR BUY",
    beds: "4",
    washroom: "2",
    cars: "2",
    area: "512m2",
  },
  {
    type: "sale",
    img: "referance-images/Area Real Estate (1)/Rectangle 50-4.png",
    price: "$760,000-$820,000",
    description: "23 Rutherford Grove, ARMSTRONG CREEK",
    purpose: "FOR SALE",
    beds: "4",
    washroom: "2",
    cars: "2",
    area: "512m2",
  },
  {
    type: "rent",
    img: "referance-images/Area Real Estate (1)/Rectangle 50-5.png",
    price: "$760,000-$820,000",
    description: "23 Rutherford Grove, ARMSTRONG CREEK",
    purpose: "FOR RENT",
    beds: "4",
    washroom: "2",
    cars: "2",
    area: "512m2",
  },
  {
    type: "buy",
    img: "referance-images/Area Real Estate (1)/Rectangle 50.png",
    price: "$760,000-$820,000",
    description: "23 Rutherford Grove, ARMSTRONG CREEK",
    purpose: "FOR BUY",
    beds: "4",
    washroom: "2",
    cars: "2",
    area: "512m2",
  },
  {
    type: "rent",
    img: "referance-images/Area Real Estate (1)/Rectangle 50-1.png",
    price: "$760,000-$820,000",
    description: "23 Rutherford Grove, ARMSTRONG CREEK",
    purpose: "FOR RENT",
    beds: "4",
    washroom: "2",
    cars: "2",
    area: "512m2",
  },
  {
    type: "buy",
    img: "referance-images/Area Real Estate (1)/Rectangle 50-2.png",
    price: "$760,000-$820,000",
    description: "23 Rutherford Grove, ARMSTRONG CREEK",
    purpose: "FOR BUY",
    beds: "4",
    washroom: "2",
    cars: "2",
    area: "512m2",
  },
  {
    type: "sale",
    img: "referance-images/Area Real Estate (1)/Rectangle 50-3.png",
    price: "$760,000-$820,000",
    description: "23 Rutherford Grove, ARMSTRONG CREEK",
    purpose: "FOR SALE",
    beds: "4",
    washroom: "2",
    cars: "2",
    area: "512m2",
  },
  {
    type: "buy",
    img: "referance-images/Area Real Estate (1)/Rectangle 50-4.png",
    price: "$760,000-$820,000",
    description: "23 Rutherford Grove, ARMSTRONG CREEK",
    purpose: "FOR BUY",
    beds: "4",
    washroom: "2",
    cars: "2",
    area: "512m2",
  },
  {
    type: "rent",
    img: "referance-images/Area Real Estate (1)/Rectangle 50-5.png",
    price: "$760,000-$820,000",
    description: "23 Rutherford Grove, ARMSTRONG CREEK",
    purpose: "FOR RENT",
    beds: "4",
    washroom: "2",
    cars: "2",
    area: "512m2",
  },
];

const chooseOueProvenTrak = [
  {
    id: "1",
    icon: "referance-images/icons/set-up 1.png",
    head: "Personalised Service",
    para: "We take the time to understand your unique needs and preferences to deliver tailored solutions for the best outcome.",
  },
  {
    id: "1",
    icon: "referance-images/icons/insight 1.png",
    head: "Market Insight",
    para: "By being up-to-date on market trends and data, our professionals provide you with a competitive advantage to buy, sell, and invest in properties",
  },
  {
    id: "1",
    icon: "referance-images/icons/expertise 1.png",
    head: "Expertise",
    para: "Our agents have extensive knowledge of the local market, giving you an edge when it comes to making informed decisions about property resolution.",
  },
];

const reviewData = [
  {
    id: "1",
    image: "referance-images/review-image.png",
    reviewWord: "Wonderful Experience",
    stars: 5,
    description:
      "At Area Real Estate, we're more than just a real estate agency - we're your partner working towards your property goals. As an independent, locally-owned agency, we're committed to providing a personalised, full-service, and relationship-driven approach to our clients.",
    userName: "Keith ",
    userAdress: "8 Nanda Place, Waramanga",
  },
  {
    id: "2",
    image: "referance-images/review-image.png",
    reviewWord: "Wonderful Experience",
    stars: 5,
    description:
      "At Area Real Estate, we're more than just a real estate agency - we're your partner working towards your property goals. As an independent, locally-owned agency, we're committed to providing a personalised, full-service, and relationship-driven approach to our clients.",
    userName: "Keith ",
    userAdress: "8 Nanda Place, Waramanga",
  },
  {
    id: "3",
    image: "referance-images/review-image.png",
    reviewWord: "Wonderful Experience",
    stars: 5,
    description:
      "At Area Real Estate, we're more than just a real estate agency - we're your partner working towards your property goals. As an independent, locally-owned agency, we're committed to providing a personalised, full-service, and relationship-driven approach to our clients.",
    userName: "Keith ",
    userAdress: "8 Nanda Place, Waramanga",
  },
];

const blogData = [
  {
    id: "1",
    blogImage: "referance-images/Blog-images/Rectangle 50.png",
    blogName: "Market and Local Wrap-up – March 2023",
    descrption:
      "What’s new in 3217: Welcome back to your market update reflecting on the month of February. In big news, one of the four Commonwealth Games Villages for March 2026 will… Read More",
    date: "March 28, 2023",
  },
  {
    id: "1",
    blogImage: "referance-images/Blog-images/Rectangle 50-1.png",
    blogName: "Market and Local Wrap-up – March 2023",
    descrption:
      "What’s new in 3217: Welcome back to your market update reflecting on the month of February. In big news, one of the four Commonwealth Games Villages for March 2026 will… Read More",
    date: "March 28, 2023",
  },
  {
    id: "1",
    blogImage: "referance-images/Blog-images/Rectangle 50-2.png",
    blogName: "Market and Local Wrap-up – March 2023",
    descrption:
      "What’s new in 3217: Welcome back to your market update reflecting on the month of February. In big news, one of the four Commonwealth Games Villages for March 2026 will… Read More",
    date: "March 28, 2023",
  },
];

const HomePage = () => {
  const [selectedTab, setSelecetdTab] = useState("sale");
  const [filteredTabData, setFilteredTabData] = useState([]);
  useEffect(() => {
    const filteredData = browseTheLatest.filter(
      (eachItem) => eachItem.type === selectedTab
    );
    setFilteredTabData(filteredData);
  }, [selectedTab]);
  return (
    <>
      <div>
        <div className="banner-main-container">
          <div className="banner-container">
            <Header />
            <div className="banner-input-test-container">
              <h1 className="banner-heading">
                Determine the current market value of your property
              </h1>
              <div className="banner-input-div">
                <input
                  placeholder="Enter your property address"
                  type="text"
                  className="banner-input"
                />
                <button className="banner-btn-cls">Get An Estimate</button>
              </div>
              <button className="mobile-button">Get An Estimate</button>
            </div>
          </div>
        </div>
      </div>
      <div className="body-main-container">
        <div className="container">
          {/* meet the real expert container */}
          <div className="meet-real-expert-container containers-padding">
            <div className="meet-real-expert-text">
              <h2 className="heading-para">
                Meet the real experts of real estate in your area
              </h2>
              <p className="meet-the-real-para">
                At Area Real Estate, we're more than just a real estate agency -
                we're your partner working towards your property goals. As an
                independent, locally-owned agency, we're committed to providing
                a personalized, full-service, and relationship-driven approach
                to our clients.
              </p>
              <p className="meet-the-real-para">
                Led by our dedicated Licensee, Ankur Bhaseen, we're passionate
                about providing exceptional experiences for buyers and sellers
                alike. That's why we enthusiastically offer our consulting
                services to all individuals and families, helping them make
                informed decisions to achieve their long-term real estate
                objectives
              </p>
              <div>
                <button className="activeButton">READ MORE</button>
              </div>
            </div>
            <div className="meet-image-div">
              <img
                className="meet-real-image"
                alt="meet-home"
                src="referance-images/Rectangle 6.png"
              />
            </div>
          </div>
          {/* celebrate excellence container */}
          <div className="celebrate-conatiner containers-padding">
            <h2 className="heading-para celebrate-main-head">
              Celebrate excellence with Perth's best and standout agents
            </h2>
            <div className="celebrate-image-div">
              <img
                className="celebrate-award-img"
                alt="award"
                src="referance-images/cebelrate-award.png"
              />
              <img
                className="celebrate-award-img"
                alt="award"
                src="referance-images/cebelrate-award.png"
              />
              <img
                className="celebrate-award-img"
                alt="award"
                src="referance-images/cebelrate-award.png"
              />
            </div>
          </div>
        </div>
      </div>
      {/* Browse the latest things container */}
      <div className="celebrate-main-container containers-padding">
        <div className="container browse-the-card-container-2">
          <div className="browse-the-heading-div">
            <h2 className="heading-para browse-the-head">
              Browse the Latest Listings of Top Properties in the Area
            </h2>
          </div>
          <div className="browse-the-tabs">
            <p
              onClick={() => setSelecetdTab("sale")}
              className={selectedTab === "sale" ? " active" : " inActive"}
            >
              FOR SALE
            </p>
            <p
              onClick={() => setSelecetdTab("buy")}
              className={selectedTab === "buy" ? " active" : " inActive"}
            >
              FOR BUY
            </p>
            <p
              onClick={() => setSelecetdTab("rent")}
              className={selectedTab === "rent" ? " active" : " inActive"}
            >
              FOR RENT
            </p>
          </div>
          <div className="browse-the-card-div">
            {filteredTabData.map((eachItem) => (
              <div key={eachItem.id} className="browse-the-card-width">
                <PropertyCard propertyDetails={eachItem} />
              </div>
            ))}
          </div>
        </div>
      </div>
      {/* Choose or prooven track container */}
      <div className="body-main-container">
        <div className="container choose-our-prooven-container containers-padding">
          <div className="browse-the-heading-div">
            <h2 className="heading-para choose-head-width">
              Choose Us for Our Proven Track Record, Industry Recognition, and
              Happy Customers!
            </h2>
          </div>
          <div className="choose-the-card-div">
            {chooseOueProvenTrak.map((each) => (
              <div key={each.id} className="">
                <IconWithTextCard cardContent={each} />
              </div>
            ))}
          </div>
        </div>
        {/* Delivering Exceptional Service container */}
        <div className="container containers-padding">
          <div className="delevering-and-btn-container">
            <h2 className="heading-para delevering-main-text">
              Delivering Exceptional Service, One Client at a Time
            </h2>
            <button className="in-active-button develry-see-btn">
              See us on rate my agent
            </button>
          </div>
          <div className="delivering-review-card">
            {reviewData.map((each) => (
              <div className="review-card-width">
                <ReviewCard key={each.id} review={each} />
              </div>
            ))}
          </div>
        </div>
      </div>
      {/* middel banner image container */}
      <div className="middle-banner">
        <h1 className="heading-para middle-banner-width">
          <span className="middle-banner-span">Hold the key to every</span> real
          estate opportunity in Perth
        </h1>
        <p className="middle-banner-para">
          Discover your slice of paradise in Perth's real estate market with the
          help of our industry experts. From beachside villas to suburban family
          homes, benefit from insights and make the right choice.
        </p>
        <div>
          <button className="activeButton">GET IN TOUCH</button>
        </div>
      </div>
      {/* Blogs Container */}
      <div className="body-main-container containers-padding">
        <div className="container">
          <div className="blogs-button-test-container">
            <h2 className="heading-para blog-para-width">
              Get the inside scoop on the latest market trends in Perth,
              Australia
            </h2>
            <div>
              <button className="in-active-button">More from our blogs</button>
            </div>
          </div>
          <div className="blog-data-card">
            {blogData.map((each) => (
              <div className="blog-card-width" key={each.id}>
                <BlogCard blogData={each} />
              </div>
            ))}
          </div>
        </div>
      </div>
      {/* About Container */}
      <div className="body-main-container containers-padding about-main-div">
        <div className="container blog-container">
          <h2 className="heading-para blog-heading">
            Here at Area Real Estate we are, by nature, an optimistic bunch.
          </h2>
          <p className="about-para">
            At Area Real Estate, our passion is to help you achieve your
            property dreams. We're a customer-centric brand that provides expert
            guidance in navigating the real estate market. With our seasoned
            team of experts, we'll help you reach optimal results. Whether
            you're a first-time homebuyer, seasoned investor, or seeking advice,
            we have the resources to help you reach your goals.
          </p>
          <div className="about-buttons-div">
            <button className="activeButton">More our Team</button>
            <button className="in-active-button">Learn About us</button>
          </div>
        </div>
      </div>
      {/* Footer Container */}
      <div className="body-main-container containers-padding footer-main-div">
        <Footer />
      </div>
    </>
  );
};

export default HomePage;
