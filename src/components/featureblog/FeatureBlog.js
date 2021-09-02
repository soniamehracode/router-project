import "./FeatureBlog.css";
import "../../App.css";

const FeatureBlog = () => {
  return (
    <div className="wrs_section_2 section_featured">
      <div className="wrs_container">
        <div className="cont">
          <div className="title">
            <h1>
              Featured <span>Blog</span>
            </h1>
          </div>
        </div>
        {/* sidebarImg section */}
        <div className="side-section">
          <div className="blog-post">
            <div>
              <img
                src="https://cms.werstupid.com/wp-content/uploads/2021/06/Untitled-design-3-2.jpg"
                className="blog-post-img"
              />
              <div className="para">
                <p>
                  5 reasons indians are against the use of protien supplements
                </p>
                <div className="btn-section">
                  <button className="btns">MISC</button>
                  <span>10min</span>
                </div>
              </div>
            </div>
          </div>

          {/* sidebar */}
          <div className="sidebar">
            <div className="sidebarItem">
              <div className="sidemenu">
                <div className="menuImg">
                  <img
                    className="image"
                    src="https://cms.werstupid.com/wp-content/uploads/2021/06/Untitled-design-3-1.jpg"
                  />
                </div>
                <h3 className="heading-title">
                  which are the best utensils for cooking <span>10 min</span>
                </h3>
              </div>
            </div>
            <div className="sidebarItem">
              <div className="sidemenu">
                <div className="menuImg">
                  <img
                    className="image"
                    src="https://cms.werstupid.com/wp-content/uploads/2021/06/Untitled-design-2-1.jpg"
                  />
                </div>
                <h3 className="heading-title">
                  is it safe to cook in non-stick cookware <span>10 min</span>
                </h3>
              </div>
            </div>
            <div className="sidebarItem">
              <div className="sidemenu">
                <div className="menuImg">
                  <img
                    className="image"
                    src="https://cms.werstupid.com/wp-content/uploads/2021/06/Untitled-design.jpg"
                  />
                </div>
                <h3 className="heading-title">
                  is why protein safe for diabetics?<span>10 min</span>
                </h3>
              </div>
            </div>
            <div className="sidebarItem">
              <div className="sidemenu">
                <div className="menuImg">
                  <img
                    className="image"
                    src="https://cms.werstupid.com/wp-content/uploads/2021/06/Untitled-design-4.jpg"
                  />
                </div>
                <h3 className="heading-title">
                  99.99% people don't need cutting and bulking{" "}
                  <span>10 min</span>
                </h3>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FeatureBlog;
