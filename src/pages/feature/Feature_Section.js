import "./Feature_Section.css";
import "../../App.css";

const Feature_Section = () => {
  return (
    <div className="wrs_section_2 section_featured">
      <div className="wrs_container">
        <div className="title">
          <h1>
            Featured <span>Blogs</span>
          </h1>
        </div>

        {/* sidebarImg section */}
        <div className="side-section">
          <div className="blog-post">
            <div className="cont">
              <img
                src="https://cms.werstupid.com/wp-content/uploads/2021/06/Untitled-design-3-2.jpg"
                className="blog-post-img"
              />
            </div>
            <div className="blog-head">
              <h3>
                5 reasons indians are against the use of protien supplements
              </h3>
              <span>MISC</span>
            </div>
            <span className="span">10min</span>
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
                <h3>
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

export default Feature_Section;
