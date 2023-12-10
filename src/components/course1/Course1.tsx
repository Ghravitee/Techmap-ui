import "./course1.scss";

/**
 * Render a course component.
 *
 * @param {number} id - The ID of the course.
 * @param {React.ComponentType} IconStyles - The component for the course icon.
 * @param {string} title - The title of the course.
 * @returns {JSX.Element} - The rendered course component.
 */
const Course1 = ({ id, IconStyles, title, color }: { id: number, IconStyles: React.ComponentType, title: string, color: string}): JSX.Element => {
  return (
    <div className="course-flex-container" key={id}>
      <div className="circle1" style={{ backgroundColor: color }}>
        <IconStyles.IconTitle size={30} />
      </div>

      <h2 className="course-title">{title}</h2>
    </div>
  );
};

export default Course1;


