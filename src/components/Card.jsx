import React from "react";
import { Link } from "react-router-dom";

const Card = ({ post }) => {
  return (
    <div className="card">
      <img className="cardImg" src={post.img} alt={`${post.title} image`} />
      <h1 className="cardTitle">{post.title}</h1>
      <p className="desc">{post.desc}</p>
      <Link to={`/post/${post.id}`}>
        <button className="cardButton">Read More</button>
      </Link>
    </div>
  );
};

export default Card;
