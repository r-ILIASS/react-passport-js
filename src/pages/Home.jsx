import React from "react";
// Components
import Card from "../components/Card";
// Dummy data
import { posts } from "../data";

const Home = () => {
  return (
    <div className="home">
      {posts.map((post) => (
        <Card key={post.id} post={post} />
      ))}
    </div>
  );
};

export default Home;
