import ExperienceModel from "../../../models/ExperienceModel";

interface Props {
  experienceModel: ExperienceModel;
}

function ExperienceItem({ experienceModel }: Props) {
  return (
    <div className="experience-resume-item">
      <h3>{`${experienceModel.company}`}</h3>
      <h4>{`${experienceModel.position} (${experienceModel.startDate}-${experienceModel.endDate})`}</h4>
      <ul>
        {experienceModel.descriptions.map((description, index) => (
          <li
            key={`${experienceModel.company}-${experienceModel.position}-description-${index}`}
            className="experience-description-list-item"
          >
            {description}
          </li>
        ))}
      </ul>
    </div>
  );
}

export default ExperienceItem;
