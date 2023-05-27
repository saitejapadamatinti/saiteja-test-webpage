import React from "react";
import "./index.css";
import { IoIosBed } from "react-icons/io";
import { TbBathFilled } from "react-icons/tb";
import { FaCar } from "react-icons/fa";
import { GrStatusPlaceholderSmall } from "react-icons/gr";

const PropertyCard = ({ propertyDetails }) => {

  const { img, price, purpose, description, beds, washroom, cars, area } =
    propertyDetails;
  return (
    <div className="browse-the-card-white-div">
      <img className="browse-the-card-imag" alt="ss" src={img} />
      <div className="browse-the-card-text-div">
        <h2 className="property-card-price">{price}</h2>
        <div className="browse-the-card-purpose">
          <p className="browse-the-card-purpose-para">{purpose}</p>
        </div>
        <p>{description}</p>
        <div className="browse-the-card-extra-thing-div">
          <p>
            <IoIosBed className="property-icon" />
            {beds}
          </p>
          <p>
            <TbBathFilled className="property-icon " />
            {washroom}
          </p>
          <p>
            <FaCar className="property-icon" />
            {cars}
          </p>
          <p>
            <GrStatusPlaceholderSmall className="property-icon" />
            {area}
          </p>
        </div>
      </div>
    </div>
  );
};

export default PropertyCard;
