import "./backend.scss";
import Course1 from "../../components/course1/Course1";
import { backendCoursesData } from "../../data";

const Backend = () => {
  return (
    <>
      <h1 className="backend-heading">Backend Courses</h1>
      <div className="backend-box">
        {backendCoursesData.map((item) => (
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

export default Backend;
