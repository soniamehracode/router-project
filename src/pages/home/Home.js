import "./Home.css";
import Header from "../../pages/header/Header";
import Card from "../../pages/card/Card";
import Feature_Section from "../../pages/feature/Feature_Section";
import Carosal from "../../pages/carosal/Carosal";
import FeatureVedio from "../../pages/featurevedio/FeatureVedio";
import Cards from "../../pages/cards/Cards";
import HeaderSlider from "../../pages/headerSlider/HeaderSlider";
import Slide from "../../pages/slide/Slide";
import Footer from "../footer/Footer";
const Home = () => {
  return (
    <div>
      <Header
        title="we R stupid life"
        para="inspire & get inspire"
        paragraph="beautifuly crafted motivational products,for your daily boost off inspiration"
        button="get started"
      />
      <Card />
      <Feature_Section />
      <Carosal
        title="mango herbs store"
        paragr="Life Changing Ayurvedic Products."
        img="https://werstupid.netlify.app/images/logo_mango_herbs.png"
      />
      <FeatureVedio
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
      <Cards />
      <HeaderSlider
        title="india's most extensive"
        para="personalized online training program"
        paragraph="6 months of intense training under the finest coatching & dieticions hand picked by akshay chopda"
        button="know more"
      />
      <Slide />
      <Footer />
    </div>
  );
};

export default Home;
