import React from "react";
import Header from "../../components/header/Header";
import Blogs from "../../components/blog/Blogs";
import FeatureBlog from "../../components/featureblog/FeatureBlog";
import Posts from "../../components/posts/Posts";
import Card from "../../components/card/Card";
import NewPost from "../../components/newpost/NewPost";
import Footer from "../../components/footer/Footer";
import Carosal from "../../components/carosal/Carosal";
const Home = () => {
  return (
    <div>
      <Header
        title="we R stupid life"
        para="inspire & get inspire"
        paragraph="beautifuly crafted motivational products,for your daily boost off inspiration"
        button="get started"
      />
      <div>
        <Blogs />
        <FeatureBlog />
        <Posts
          title="mango herb store"
          paragr="Life Changing Ayurvedic Products."
          img="https://werstupid.netlify.app/images/logo_mango_herbs.png"
        />
        <Card
          heading="Featured Videos"
          imag="https://werstupid.netlify.app/images/youtube_thumbnail_1.jpg"
          img="https://werstupid.netlify.app/images/youtube_thumbnail_2.png"
          image="https://werstupid.netlify.app/images/youtube_thumbnail_3.jpg"
          title="How much protien do you actually need?"
          titles="There is no supplement stack for beginners"
          titless="German Volume Training - Most Powerful Workout"
          button="play now"
          btn="play now"
          bttn="play now"
        />
        <NewPost />
        <Carosal
          title="india's most extensive"
          para="personalized online training program"
          paragraph="6 months of intense training under the finest coatching & dieticions hand picked by akshay chopda"
          button="know more"
        />

        <NewPost />

        <Footer />
      </div>
    </div>
  );
};

export default Home;
