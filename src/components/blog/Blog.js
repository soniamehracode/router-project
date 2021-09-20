import "./Blog.css";
import Nav from "../../genesis/nav/Nav";
import Feature_Section from "../../pages/feature/Feature_Section";
import SinglePost from "../../genesis/singlepost/SinglePost";
import Footer from "../../pages/footer/Footer";
const Blog = () => {
  return (
    <div className="blog-container">
      <div className="blog-heading">
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
      <Nav />
      <Feature_Section />
      <SinglePost />
      <Footer />
    </div>
  );
};

export default Blog;
