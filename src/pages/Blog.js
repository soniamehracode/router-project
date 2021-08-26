import React from "react";
import BlogData from "../components/blogdata/BlogData";

import "./Blog.css";
const Blog = () => {
  return (
    <div className="blog-container">
      <div>
        <div className="blog-head">
          <h1>Latest updates from our Community</h1>
        </div>
        <div className="form">
          <div className="formData">
            <form>
              <input type="text" placeholder="enter a word" />
              <button>search</button>
            </form>
          </div>
        </div>
      </div>
      <BlogData />
    </div>
  );
};

export default Blog;
