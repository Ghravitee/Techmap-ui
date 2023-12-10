import "./frontend.scss";
import Course1 from "../../components/course1/Course1";
import { coursesData } from "../../data";

const Frontend = () => {
  return (
    <>
      <h1 className="frontend-heading">Courses</h1>
      <div className="frontend-box">
        {coursesData.map((item) => (
          <Course1
            key={item.id}
            id={item.id}
            IconStyles={item.IconStyle}
            title={item.title}
            color={item.backgroundColor}
          />
        ))}
      </div>
    </>
  );
};

export default Frontend;
