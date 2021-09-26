import "./Feature_Section.css";
import "../../App.css";

const Feature_Section = () => {
  return (
    <div className="wrs_section_2 section_featured">
      <div className="wrs_container feature-section">
        <div className="title">
          <h1>
            Featured <span>Blogs</span>
          </h1>
        </div>

        {/* sidebarImg section */}
        <div className="side-section">
          <div className="blog-post">
            <div className="feature">
              <div className="feature-blog">
                <div className="cont">
                  <img
                    src="https://cms.werstupid.com/wp-content/uploads/2021/06/Untitled-design-3-2.jpg"
                    className="blog-post-img"
                  />
                </div>

                <h3 className="blog-head">
                  5 reasons indians are against the use of protien supplements
                </h3>
                <div className="blog-span">
                  <div className="log">
                    <span>MISC</span>
                  </div>
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
                <h3 className="feature-heading">
                  which are the best utensils for cooking
                  <span className="span">10 min</span>
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
                <h3 className="feature-heading">
                  is it safe to cook in non-stick cookware
                  <span className="span">10 min</span>
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
                <h3 className="feature-heading">
                  is why protein safe for diabetics?
                  <span className="span">10 min</span>
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
                <h3 className="feature-heading">
                  99.99% people don't need cutting and bulking
                  <span className="span">10 min</span>
                </h3>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Feature_Section;
