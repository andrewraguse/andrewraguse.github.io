import CourseModel from '../../../models/CourseModel';
import './CourseItem.scss';

interface Props {
  courseModel: CourseModel;
}

function CourseItem({ courseModel }: Props) {
  return (
    <div className="experience-resume-item">
      <p id="course-item">
        <b>{`${courseModel.courseNumber}: `}</b>
        {courseModel.courseName}
      </p>
    </div>
  );
}

export default CourseItem;
