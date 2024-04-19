import ExperienceModel from '../../../models/ExperienceModel';

interface Props {
  experienceModel: ExperienceModel;
}

function ExperienceItem({ experienceModel }: Props) {
  return (
    <div className="experience-resume-item">
      <h3>{`${experienceModel.company}`}</h3>
      {experienceModel.positions.map((position) => (
        <h4 className="position-item">
          {`${position.title}`}{' '}
          <i>{`(${position.startDate}-${position.endDate})`}</i>
        </h4>
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
