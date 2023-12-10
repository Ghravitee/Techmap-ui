import "./box2.scss";
import { RiBookOpenLine } from "react-icons/ri";

const box2 = () => {
  return (
    <div className="flex-container">
      <div className="circle2">
        <RiBookOpenLine size={30} />
      </div>
      <p>Total Users</p>
      <h2>30</h2>
    </div>
  );
};

export default box2;
