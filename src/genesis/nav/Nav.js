import "./Nav.css";

const Nav = () => {
  return (
    <div className="nav-container">
      <div className="nav-span">
        <span>All</span>
      </div>
      <div className="nav-item">
        <ul>
          <li>Anabolics</li>
          <li>Fitness</li>
          <li>Food</li>
          <li>Lifestyle</li>
          <li>Music</li>
        </ul>
      </div>
    </div>
  );
};

export default Nav;
