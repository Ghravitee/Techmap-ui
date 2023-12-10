import "./box4.scss";
import { RiBookOpenLine } from "react-icons/ri";
import { Link } from "react-router-dom";

const box4 = () => {
  return (
    <Link to="/backend" className="flex-container">
      <div className="circle4">
        <RiBookOpenLine size={30} />
      </div>
      <p>Backend Courses</p>
      <h2>6</h2>
    </Link>
  );
};

export default box4;
