import FeatureBlog from "../../components/featureblog/FeatureBlog";
import NewCard from "../../components/newCard/NewCard";
import Pagination from "../../components/Pagination";

import Footer from "../../components/footer/Footer";
import { useState } from "react";

const SinglePost = () => {
  const [currentPage, setCurrentPage] = useState(1);
  const [posts, setPosts] = useState([
    {
      img: "https://cms.werstupid.com/wp-content/uploads/2021/06/Untitled-design-3-2.jpg",
      title: "5 reasons indians are against the use of protien",
      para: "In our country, you can see many eyebrows being raised whenever you talk about taking protein supplements. A large part of the population is still ",
      button: "MISC",
    },
    {
      img: "https://cms.werstupid.com/wp-content/uploads/2021/06/Untitled-design-3-1.jpg",
      title: "5 reasons indians are against the use of protien",
      para: "In our country, you can see many eyebrows being raised whenever you talk about taking protein supplements. A large part of the population is still ",
      button: "MISC",
    },
    {
      img: "https://cms.werstupid.com/wp-content/uploads/2021/06/Untitled-design-2-1.jpg",
      title: "5 reasons indians are against the use of protien",
      para: "In our country, you can see many eyebrows being raised whenever you talk about taking protein supplements. A large part of the population is still ",
      button: "MISC",
    },
    {
      img: "https://cms.werstupid.com/wp-content/uploads/2021/06/Untitled-design.jpg",
      title: "5 reasons indians are against the use of protien",
      para: "In our country, you can see many eyebrows being raised whenever you talk about taking protein supplements. A large part of the population is still ",
      button: "MISC",
    },
    {
      img: "https://cms.werstupid.com/wp-content/uploads/2021/06/Untitled-design-4.jpg",
      title: "5 reasons indians are against the use of protien",
      para: "In our country, you can see many eyebrows being raised whenever you talk about taking protein supplements. A large part of the population is still ",
      button: "MISC",
    },
    {
      img: "https://cms.werstupid.com/wp-content/uploads/2021/05/Untitled-design-22.jpg",
      title: "5 reasons indians are against the use of protien",
      para: "In our country, you can see many eyebrows being raised whenever you talk about taking protein supplements. A large part of the population is still ",
      button: "MISC",
    },
    {
      img: "https://cms.werstupid.com/wp-content/uploads/2021/02/xv-e1620915122978.jpg",
      title: "5 reasons indians are against the use of protien",
      para: "In our country, you can see many eyebrows being raised whenever you talk about taking protein supplements. A large part of the population is still ",
      button: "MISC",
    },
    {
      img: "https://cms.werstupid.com/wp-content/uploads/2021/05/imageonline-co-overlayed-image5.png",
      title: "5 reasons indians are against the use of protien",
      para: "In our country, you can see many eyebrows being raised whenever you talk about taking protein supplements. A large part of the population is still ",
      button: "MISC",
    },
    {
      img: "https://cms.werstupid.com/wp-content/uploads/2021/05/Untitled-design-7-1.jpg",
      title: "5 reasons indians are against the use of protien",
      para: "In our country, you can see many eyebrows being raised whenever you talk about taking protein supplements. A large part of the population is still ",
      button: "MISC",
    },
    {
      img: "https://cms.werstupid.com/wp-content/uploads/2021/05/Untitled-design-15.jpg",
      title: "5 reasons indians are against the use of protien",
      para: "In our country, you can see many eyebrows being raised whenever you talk about taking protein supplements. A large part of the population is still ",
      button: "MISC",
    },
    {
      img: "https://cms.werstupid.com/wp-content/uploads/2021/05/Untitled-design-11.jpg",
      title: "5 reasons indians are against the use of protien",
      para: "In our country, you can see many eyebrows being raised whenever you talk about taking protein supplements. A large part of the population is still ",
      button: "MISC",
    },
    {
      img: "https://cms.werstupid.com/wp-content/uploads/2021/04/Untitled-design-5-4-e1619620666470.jpg",
      title: "5 reasons indians are against the use of protien",
      para: "In our country, you can see many eyebrows being raised whenever you talk about taking protein supplements. A large part of the population is still ",
      button: "MISC",
    },
    {
      img: "https://cms.werstupid.com/wp-content/uploads/2021/04/Untitled-design-14-e1619621123667.jpg",
      title: "5 reasons indians are against the use of protien",
      para: "In our country, you can see many eyebrows being raised whenever you talk about taking protein supplements. A large part of the population is still ",
      button: "MISC",
    },
    {
      img: "https://cms.werstupid.com/wp-content/uploads/2021/04/ezgif.com-gif-maker-1-e1619621392837.jpg",
      title: "5 reasons indians are against the use of protien",
      para: "In our country, you can see many eyebrows being raised whenever you talk about taking protein supplements. A large part of the population is still ",
      button: "MISC",
    },
    {
      img: "https://cms.werstupid.com/wp-content/uploads/2021/04/Untitled-design-20-e1619621666397.jpg",
      title: "5 reasons indians are against the use of protien",
      para: "In our country, you can see many eyebrows being raised whenever you talk about taking protein supplements. A large part of the population is still ",
      button: "MISC",
    },
    {
      img: "https://cms.werstupid.com/wp-content/uploads/2021/04/Untitled-design-13-e1619622146922.jpg",
      title: "5 reasons indians are against the use of protien",
      para: "In our country, you can see many eyebrows being raised whenever you talk about taking protein supplements. A large part of the population is still ",
      button: "MISC",
    },
    {
      img: "https://cms.werstupid.com/wp-content/uploads/2021/04/Untitled-design-5-3-e1619622554135.jpg",
      title: "5 reasons indians are against the use of protien",
      para: "In our country, you can see many eyebrows being raised whenever you talk about taking protein supplements. A large part of the population is still ",
      button: "MISC",
    },
    {
      img: "https://cms.werstupid.com/wp-content/uploads/2021/04/Untitled-design-7.jpg",
      title: "5 reasons indians are against the use of protien",
      para: "In our country, you can see many eyebrows being raised whenever you talk about taking protein supplements. A large part of the population is still ",
      button: "MISC",
    },
    {
      img: "https://cms.werstupid.com/wp-content/uploads/2021/04/Untitled-design-4.jpg",
      title: "5 reasons indians are against the use of protien",
      para: "In our country, you can see many eyebrows being raised whenever you talk about taking protein supplements. A large part of the population is still ",
      button: "MISC",
    },
    {
      img: "https://cms.werstupid.com/wp-content/uploads/2021/04/sugarcane-4-1-e1617632698594.jpg",
      title: "5 reasons indians are against the use of protien",
      para: "In our country, you can see many eyebrows being raised whenever you talk about taking protein supplements. A large part of the population is still ",
      button: "MISC",
    },
    {
      img: "https://cms.werstupid.com/wp-content/uploads/2021/03/Untitled-design-8-2.jpg",
      title: "5 reasons indians are against the use of protien",
      para: "In our country, you can see many eyebrows being raised whenever you talk about taking protein supplements. A large part of the population is still ",
      button: "MISC",
    },
    {
      img: "https://cms.werstupid.com/wp-content/uploads/2021/03/Untitled-design-3.jpg",
      title: "5 reasons indians are against the use of protien",
      para: "In our country, you can see many eyebrows being raised whenever you talk about taking protein supplements. A large part of the population is still ",
      button: "MISC",
    },
    {
      img: "https://cms.werstupid.com/wp-content/uploads/2021/03/Open-Mon-to-Sat-9-AM-%E2%80%93-11-P.jpg",
      title: "5 reasons indians are against the use of protien",
      para: "In our country, you can see many eyebrows being raised whenever you talk about taking protein supplements. A large part of the population is still ",
      button: "MISC",
    },
    {
      img: "https://cms.werstupid.com/wp-content/uploads/2021/03/Open-Mon-to-Sat-9-AM-%E2%80%93-11-P-1.jpg",
      title: "5 reasons indians are against the use of protien",
      para: "In our country, you can see many eyebrows being raised whenever you talk about taking protein supplements. A large part of the population is still ",
      button: "MISC",
    },
    {
      img: "https://cms.werstupid.com/wp-content/uploads/2021/03/Untitled-design-12.jpg",
      title: "5 reasons indians are against the use of protien",
      para: "In our country, you can see many eyebrows being raised whenever you talk about taking protein supplements. A large part of the population is still ",
      button: "MISC",
    },
    {
      img: "https://cms.werstupid.com/wp-content/uploads/2021/03/FITNESS_NUTRITION-DEGREE-VS-CERTIFICATION.jpg",
      title: "5 reasons indians are against the use of protien",
      para: "In our country, you can see many eyebrows being raised whenever you talk about taking protein supplements. A large part of the population is still ",
      button: "MISC",
    },
    {
      img: "https://cms.werstupid.com/wp-content/uploads/2021/02/TABLE-SALT-ROCK-SALT-PINK-SALT-SEA-SALT-%E2%80%93-WHICH-IS-BETTER_.jpg",
      title: "5 reasons indians are against the use of protien",
      para: "In our country, you can see many eyebrows being raised whenever you talk about taking protein supplements. A large part of the population is still ",
      button: "MISC",
    },
  ]);

  const [postPerPage] = useState(9);
  const [loading, setLoading] = useState(false);
  const indexOfLastPost = currentPage * postPerPage;
  const indexOfFirstPost = indexOfLastPost - postPerPage;
  const currentPosts = posts.slice(indexOfFirstPost, indexOfLastPost);
  const paginate = (pageNumber) => setCurrentPage(pageNumber);

  if (loading) {
    return <h2>loading...</h2>;
  }
  return (
    <div>
      <FeatureBlog />
      <NewCard posts={currentPosts} />
      <Pagination
        postPerPage={postPerPage}
        totalPost={posts.length}
        paginate={paginate}
      />
      <Footer />
    </div>
  );
};

export default SinglePost;
