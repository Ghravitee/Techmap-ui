import "./navbar.scss";

const Navbar = () => {
  return (
    <div className="navbar">
      <div className="logo">
        <img src="logo.svg" alt="" />
        <span>Techmap</span>
      </div>
      <div className="icons">
        <img src="./search.svg" alt="" className="icon" />
        <img src="./app.svg" alt="" className="icon" />
        <img src="./expand.svg" alt="" className="icon" />
        <div className="notification">
          <img src="./notifications.svg" alt="" className="icon" />
          <span className="count">2</span>
        </div>
        <div className="user">
          <img src="https://images.pexels.com/photos/941693/pexels-photo-941693.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500" alt="" />
          <span>John Doe</span>
        </div>
        <img src="./settings.svg" alt="" className="icon" />
      </div>
    </div>
  );
};

export default Navbar;
