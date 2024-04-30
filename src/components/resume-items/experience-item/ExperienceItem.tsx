import ExperienceModel from '../../../models/ExperienceModel';
import './ExperienceItem.scss';

interface Props {
  experienceModel: ExperienceModel;
}

function ExperienceItem({ experienceModel }: Props) {
  return (
    <div className="experience-resume-item">
      <div id="experience-title-wrapper">
        <h3>{`${experienceModel.company}`} </h3>
        <i id="experience-date">{`(${experienceModel.startDate}-${experienceModel.endDate})`}</i>
      </div>
      {experienceModel.positions.map((position) => (
        <h4 id="position-item">{`${position.title}`} </h4>
      ))}
      <ul>
        {experienceModel.descriptions.map((description, index) => (
          <li key={index} className="experience-description-list-item">
            {description}
          </li>
        ))}
      </ul>
    </div>
  );
}

export default ExperienceItem;
