import "./box3.scss";
import { RiBookOpenLine } from "react-icons/ri";
import { Link } from "react-router-dom";

const box3 = () => {
  return (
    <Link to="/frontend" className="flex-container">
      <div className="circle3">
        <RiBookOpenLine size={30} />
      </div>
      <p>Frontend Courses</p>
      <h2>10</h2>
    </Link>
  );
};

export default box3;
