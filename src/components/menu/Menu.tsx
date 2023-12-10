import "./menu.scss";
import { Link } from "react-router-dom";
import { IoHomeOutline } from "react-icons/io5";
import { RiBookOpenLine } from "react-icons/ri";
import { FaCalendar, FaRegUser } from "react-icons/fa";


const Menubar = () => {
  return (
    <div className="menu">
      <div className="item">
        <span className="title">Main</span>
        <Link to={"/"} className="listItem">
        <IoHomeOutline />
          <span className="listItemTitle">Homepage</span>
        </Link>
      </div>
      <div className="item">
        <span className="title">Courses</span>
        <Link to={"/frontend"} className="listItem">
        <RiBookOpenLine />
          <span className="listItemTitle">Frontend Courses</span>
        </Link>
        <Link to={"/backend"} className="listItem">
        <RiBookOpenLine />
          <span className="listItemTitle">Backend Courses</span>
        </Link>
       
        
      </div>
      <div className="item">
        <span className="title">User Info</span>
        <Link to={"/users"} className="listItem">
        <FaRegUser />
          <span className="listItemTitle">Users</span>
        </Link>
      </div>
      <div className="item">
        <span className="title">General</span>
        <Link to={"/calendar"} className="listItem">
        <FaCalendar />
          <span className="listItemTitle">Calendar</span>
        </Link>
      </div>
    </div>
  );
};

export default Menubar;
