import EducationModel from '../../../models/EducationModel';
import './EducationItem.scss';

interface Props {
  educationModel: EducationModel;
}

function EducationItem({ educationModel }: Props) {
  return (
    <div className="experience-resume-item">
      <h4 id="school-name-header">{`${educationModel.school}`}</h4>
      <h4 id="graduation-date-header">{`Graduated: ${educationModel.graduationDate}`}</h4>
      <h4 id="major-header">{`Major: ${educationModel.major}`}</h4>
    </div>
  );
}

export default EducationItem;
