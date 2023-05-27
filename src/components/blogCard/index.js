import React from "react";
import "./index.css";
import { AiFillStar } from "react-icons/ai";

const BlogCard = ({ blogData }) => {
  const { id, blogImage, blogName, descrption, date } =
  blogData;
  return (
    <div className="blog-data-card-white-div">
      <img className="blog-card-imag" alt="ss" src={blogImage} />
      <div className="blog-card-text-div">
        <h3>{blogName}</h3>
        <p className="blog-card-para">{descrption}</p>
        <div>
          <p className="blog-card-date">{date}</p>
        </div>
      </div>
    </div>
  );
};

export default BlogCard;
