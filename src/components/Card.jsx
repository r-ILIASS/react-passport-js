import React from "react";

const Card = ({ post }) => {
  return (
    <div className="card">
      <span className="title">{post.title}</span>
      <img className="cardImg" src={post.img} alt={`${post.title} image`} />
      <p className="desc">{post.desc}</p>
      <button className="cardButton">Read More</button>
    </div>
  );
};

export default Card;
