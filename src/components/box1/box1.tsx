import "./box1.scss";
import { RiBookOpenLine } from "react-icons/ri";

const box1 = () => {
  return (
    <div className="flex-container">
      <div className="circle1">
        <RiBookOpenLine size={30} />
      </div>
      <p>Total Courses</p>
      <h2>20</h2>
    </div>
  );
};

export default box1;
