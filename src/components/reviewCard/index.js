import React from "react";
import "./index.css";
import { AiFillStar } from "react-icons/ai";

const ReviewCard = ({ review }) => {
  const { id, image, reviewWord, stars, description, userName, userAdress } =
    review;
  return (
    <div className="review-quote-card-white-div">
      <img
        className="review-qote-image"
        alt="quote"
        src="referance-images/review-quote 1.png"
      />
      <img className="review-quote-card-imag" alt="ss" src={image} />
      <div className="review-quote-card-text-div">
        <h4>{reviewWord}</h4>
        <div>
          <AiFillStar className="review-star" />
          <AiFillStar className="review-star" />
          <AiFillStar className="review-star" />
          <AiFillStar className="review-star" />
          <AiFillStar className="review-star" />
        </div>
        <p>{description}</p>
        <div>
          <h4>{userName}</h4>
          <p>{userAdress}</p>
        </div>
      </div>
    </div>
  );
};

export default ReviewCard;
